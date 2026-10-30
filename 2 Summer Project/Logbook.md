## Project Aim

replicate and adapt the AICCA cloud classification pipeline using PyTorch instead of the original TensorFlow. $256\times256 {}$ patches of MODIS data being used.

# Pre-JASMIN Analysis

Before I had access to JASMIN and CEDA I only had access to 2 weeks of latent space data and clustering labels that AICCA made available online from end of 2020 to start of 2021.

AICCA included a notebook that could be used for some preliminary analysis such as identified the geolocation of different clusters on a particular day.

![[Logbook-1784036749088.webp|557]]

from this i then identified particular clusters and where they appeared over a 2 week period, example image for cluster 33

![[Logbook-1784036900583.webp]]

I then decided to plot the mean clusters, with error bars between low and upper quartile on a plot of cloud optical thickness against cloud top pressure to identify which of the 9 ISCCP cloud classifications each cluster is associated with.

![[Logbook-1784037105285.webp|830]]

i then plotted a bar chart of each cluster, where each bar was split into the 9 ISCCP classifications.

![[Logbook-1784037328494.webp]]

and from both plots it is extremely apparent that most of the clusters reside in stratocumulus region.
##  Cluster 12

In analysing loosely different clusters, i thought cluster 12 appeared interesting due to being composed of two distinct bands in the very north and very south.

![[Logbook-1784039202122.webp]]

I created heat maps of the patches in the northern and southern hemisphere on a CTP vs COT plot

![[Logbook-1784039250883.webp|1032]]

these two bands can also be represented in a frequency plot against latitude.

![[Logbook-1784039294684.webp]]

finally i analysed the cloud phases of north and south clouds

![[Logbook-1784039321629.webp]]

we clearly observe a much higher ice percentage in the northern hemisphere clouds of this cluster type.

## Cluster 23

a similar process was run for cluster 23

![[Logbook-1784039822217.webp]]

with a similar heatmap found comparing northern and southern hemisphere bands

![[Logbook-1784039847103.webp|886]]

where again the two bands can be distinctively seen in a plot of longitude

![[Logbook-1784039903810.webp]]

however, in this case both the bands were liquid dominated

![[Logbook-1784039928620.webp]]

# Rewriting model

the next step i took was rewriting the code provided by AICCA project and rewriting it with PyTorch instead of the original TensorFlow. i went chunk by chunk through all the code and created the analogue in PyTorch

in doing this i gained a better insight into the flow that the autoencoder took

there was no information on appropriate weights for my autoencoder and so i had to train from scratch

https://github.com/1th0mas1/aicca_pytorch

## Smoke tests

to make sure after rewriting the code still ran as required, some smoke tests were carried out

initially i just used one granule and split it into patches and carried out the autoencoder on this doing just training on these pathces

initially i used nblocks=5, base_dim=4, block_len=0, scale=2 and 1000 epochs.

![[Logbook-1784044219464.webp]]

![[Logbook-1784044230642.webp]]

i then tried out to see how different nblocks =4 would be ie a higher dimensional latent space

![[Logbook-1784121119753.webp]]

![[Logbook-1784121141417.webp]]

# 1st Train

to begin i conducted training on the patches from just one month (January 2020) using about 50k patches

a circular mask was applied to these patches as i wanted to mess with a rotational term in the loss function

these patches were taking from on nadir line, and were 256x256 to capture more large scale structure compared to 128x128 in the original

i initially just trained on the non rotational term in loss function and then trained with rotational term to compare the two

![[Logbook-1784122071606.webp]]

clearly there was a slight improvement with mixed, however this could just be due to the additional training and is likely insignificant

## Changing number of blocks

i hypothesised that the reason for the blur was too small of a latent space and so i thought I'd compare again 4 vs 5 blocks

![[Logbook-1784122329498.webp]]

the MSE for n=4 was lower than for n=5

------------------ insert clustering analysis

# 2nd Train

i decided as the rotational effects seemed to be minimal that i could just use squares as then more information is captured

furthermore as nblocks = 4 seemed to work better than I would try do next train with more patches randomly selected across all of 2020

![[Logbook-1784125729804.webp]]

this ended up creating this weird blocky look that clearly shows something is wrong, so i attempted a similar run but again with nblocks = 5

![[Logbook-1784193681423.webp]]

this square effect remained showing that it was likely a padding issue, so my first priority was to fix the padding and then seeing what remained

so now I'm attempting to use reflect padding instead of zero padding ie 000|000 -> cba|abc

i just used a small run with nblocks = 5. epochs = 50 and 300 steps per epoch

![[Logbook-1784206135285.webp]]

clearly those square effects have now gone, but now we have a checkerboard effect which I need to distinguish is either due to sampling or not enough epochs - likely a sampling problem - upsampling artefact

this however is an architecture problem likely with how convtranspose is running

i now need to create a new autoencoder with primarily the same structure but changing the upsampling process

this can be done by separating the upsampling process into a resize followed by a convolution which may cause uneven overlap which can cause this checkerboard

unfortunately the resizing method made things too smooth, made effects worse

![[Logbook-1784212960551.webp]]

and the pooling method made a difference but not too significant

![[Logbook-1784212980160.webp]]

finally i attempted a solution i saw somewhere recommended where i used a kernel twice the size of stride so the overlaps worked better

![[Logbook-1784216254053.webp|1348]]

clearly it had the same problem

however it all could be an epoch problem so I'm going to run some of them overnight

## 3rd Train

Overnight I ran all three potential best options for 1000 epochs with 1500 steps - reflect padding, reflect + pooling, reflect + even kernel,

reflect:

![[Logbook-1784281537060.webp]]

reflect + pooling:

![[Logbook-1784281557625.webp]]

reflect + pooling + even kernel: (don't do this)

![[Logbook-1784281576460.webp]]

it appears visually and according to MSE that reflect + pooling is the best bet. however still not enough fine structure is captured, may begin to implement skip connections

##  Full-Length Square-Patch Architecture Tests

After the small reflect, pooling, and even-overlap smoke tests, I ran longer/full training runs on the square 2020 Terra patch set.

Dataset:
- MODIS Terra, 2020
- ~73k valid square patches
- 256 x 256
- stride 128
- nadir-only
- raw unnormalised data

Architectures compared:
- baseline ResNet autoencoder + reflect padding
- pooling encoder + reflect padding
- pooling encoder + even-overlap decoder + reflect padding

These were trained to high epoch counts, with checkpoints saved periodically. The models improved compared with early smoke tests but still showed loss of fine detail and some persistent artefacts. The normal pooling + reflect setup seemed the most promising of the three.

## Skip-Connection Autoencoder Attempt

I implemented a fourth architecture with skip connections, based on the pooling + reflect model.

Purpose:
- test whether adding encoder-decoder feature shortcuts could restore fine spatial detail
- see if this could reduce blurring without relying only on changing the loss

However, I decided not to prioritise skip connections for the main direction because they risk acting as a workaround rather than solving the underlying compression/artefact problem. The focus shifted back toward understanding data scaling, loss functions, and the original circular-mask setup.

## L1 vs L2 Reconstruction Loss

My supervisor suggested trying L1 loss instead of the usual L2/MSE loss.

Reason:
- L2 strongly penalises large errors and can encourage smoother average reconstructions
- L1/MAE can preserve sharper contrast and fine details

I updated the training code so reconstruction loss can be selected with:

- recon_loss = l1
- recon_loss = l2

I also noted that L1 and L2 should not be compared directly as MAE vs MSE. To compare fairly, L2 should be shown as RMSE, because RMSE has the same units as MAE.

![[Logbook-1784889721216.webp]]

## Raw L1 Training Runs

I launched L1 training on raw unnormalised square patches using the pooling + reflect architecture.

Runs included:
- raw L1 pooling/reflect, batch size 8
- raw L1 pooling/reflect, batch size 16

The batch-size-16 run was configured so the number of examples per epoch stayed roughly fixed:

- batch 8 x 1500 steps = 12,000 patches per epoch
- batch 16 x 750 steps = 12,000 patches per epoch

![[Logbook-1784891618275.webp]]

Purpose:
- test whether larger batch size improves training stability
- see whether L1 improves visual sharpness compared with L2

Early visual checks suggested raw L1 was more promising than the normalised models, although still not perfect.

## Normalisation Experiments

My supervisor asked whether the data were normalised before training. I checked the raw patch values and found they were not normalised.

I then implemented global per-channel normalisation scripts.

### Global Min-Max Normalisation

I created a min-max normalised patch set.

Output directory:
- patch_shards_nadir256_2020_terra_100k_square_minmax

This scaled each channel using global min and max values across the patch set.

Result:
- numerical losses became very small
- visual reconstructions became very poor
- outputs were blurry/blocky and lost cloud texture

![[Logbook-1784893097893.webp]]

Conclusion:
- global min-max was likely dominated by outliers
- it compressed useful dynamic range too much

### p01-p99 Percentile Normalisation

Following supervisor advice, I implemented robust percentile normalisation.

Output directory:
- patch_shards_nadir256_2020_terra_100k_square_p01p99

This used low/high percentiles rather than absolute min/max, to reduce outlier impact.

Technical note:
- first implementation using torch.quantile failed because the sampled tensor was too large
- I updated the script to use kth-value based percentile estimation instead

Result:
- p01-p99 normalisation worked technically
- L1 and L2 models trained successfully
- but visual reconstructions were still over-smoothed and low-detail
- even after high epoch counts, normalised models looked worse than raw-patch models

Conclusion:
- current normalisation methods are not helping
- raw unnormalised patches remain the main training path for now

l1 with normalisation:
![[Logbook-1784897744095.webp]]


## TensorBoard Discussion

My supervisor suggested tracking losses more systematically with TensorBoard.

Current status:
- plain text loss logs are still being produced
- future runs should include TensorBoard logging as standard
- this should make it easier to compare reconstruction loss, rotational loss, KL loss, etc. across experiments

Decision:
- add TensorBoard support to future training scripts/runs

## VAE / Spin-Latent Architecture

I started designing and testing a variational autoencoder with a much smaller and more interpretable latent space.

Current normal autoencoder latent:
- 256 x 8 x 8

New spin-VAE latent:
- 3 x 8 x 8

Motivation:
- compress latent space into 3 channels
- interpret each 8 x 8 latent location as a 3D spin/vector
- visualise latent as RGB or vector field
- explore a more physically interpretable latent representation

Architecture:
- encoder produces feature map
- two branches produce:
  - mean / mu
  - log-variance / logvar
- latent is sampled using reparameterisation:
  z = mu + epsilon * sigma
- decoder reconstructs from z

Loss:
- reconstruction loss
- KL divergence term
- total loss = recon_loss + kl_lambda * KL

I used a small KL weight because the 3-channel latent is already a severe bottleneck and a large KL term would likely make reconstructions blurrier.

I also made notebook visualisations:
- reconstruction vs input
- latent RGB image
- 2D vector field with colour as third channel
- 3D spin/vector field
- spin field overlaid on visible patch imagery

## Binary Cross Entropy Consideration

I considered binary cross entropy as a possible loss.

Decision:
- not suitable for raw unnormalised MODIS values
- only valid if data are scaled to [0, 1] and interpreted as probabilities/intensities
- likely not the best next step for continuous radiance/reflectance-like fields

Preferred losses:
- L1 / MAE
- SmoothL1 / Huber
- possibly L1 + gradient/edge loss later

## Returning to Circular Masks

Because square-patch models continued to show artefacts or blur, I decided to return to the original-style circular mask setup.

Reason:
- the original-looking quality may have depended on the circular mask
- circular masks remove corners and edge/corner artefacts
- this may be especially important for rotational invariance

New circular patch target:
- MODIS Terra 2020
- 256 x 256
- stride 128
- nadir-only
- nadir width 128
- ocean-only
- cloud threshold 0.3
- ocean threshold 0.9
- circular mask enabled
- raw unnormalised patches

I first tried a serial circular patch creation script, but it was too slow:
- ~136 granules in ~28 minutes
- estimated to take too long for full 70k patch set

I cancelled the serial job and switched to an array job.



## Circular Patch Array Creation

I created a shuffled granule list:

- source: granule_links_2020_terra
- number of granules: 104,434
- shuffle seed: 42

Then submitted the first array chunk:

- job ID: 41399477
- array range: 1-4000
- output directory:
  patch_shards_nadir256_2020_terra_70k_circle

This array is running in parallel on LOTUS/standard. Since each array task is independent, it will not stop automatically at exactly 70k patches. I need to check the patch count after the first chunk before deciding whether to submit 4001-8000.


clearly still blurry but it's good that there are no artefacts

## Planned Circular Mixed-RI Training

Once enough circular patches are ready, I plan to train a full mixed rotational-invariance model.

Planned run:
- raw circular patches
- model_arch = resnet
- padding_mode = zeros
- loss_mode = mixed
- recon_loss = l2
- degree = 90
- nblocks = 5
- batch size = 8
- steps per epoch = 1500
- epochs = 1000

Output run:
- nadir256_2020_terra_circle70k_nblocks5_mixedRI_full001

Purpose:
- test whether returning to circular patches + rotational/mixed loss recovers the original visual quality
- compare against square raw L1 and square pooling/reflect models

![[Logbook-1784900085514.webp]]

# Overnight Channel-1 Reconstruction Runs

Set up four overnight training runs focused on reconstructing a single visible channel rather than all six MODIS channels. This followed supervisor feedback that examples should first be simplified to one grayscale channel, with multiple different patches shown for comparison. The aim was to reduce the complexity of the reconstruction task and better diagnose whether blur/artifacts are caused by architecture, loss function, or multi-channel difficulty.

# Run 1: Channel-1 L1 With Original Transposed-Convolution Decoder

Started a single-channel reconstruction run using the original ResNet-style autoencoder structure with strided downsampling and transposed convolutions in the decoder. This acts as the baseline for the new single-channel tests.

Run name:
nadir256_2020_terra_square73k_channel1_resnet_reflectpad_l1_full001

Key settings:
- input: 2020 Terra square patches
- channel: 1 only
- loss: L1 reconstruction loss
- padding: reflect
- decoder: transposed convolutions
- epochs: 1000
- steps per epoch: 1500

Purpose:
To test whether simply reducing the reconstruction target to one channel improves sharpness, before changing the decoder architecture.

# Run 2: Channel-1 L1 With Resize-Convolution Decoder

Started a second single-channel reconstruction run replacing transposed convolutions with resize + convolution upsampling. This follows the Distill checkerboard-artifact recommendation that decoder upsampling should avoid ConvTranspose where possible.

Run name:
nadir256_2020_terra_square73k_channel1_resizeconv_reflectpad_l1_full001

Key settings:
- input: 2020 Terra square patches
- channel: 1 only
- loss: L1 reconstruction loss
- padding: reflect
- decoder: bilinear resize + Conv2d
- epochs: 1000
- steps per epoch: 1500

Purpose:
To test whether decoder artifacts are reduced by replacing transposed convolutions with interpolation-based upsampling.

# Run 3: Channel-1 L1 Plus SSIM With Resize-Convolution Decoder

Started a third single-channel reconstruction run using the resize-convolution decoder, but with an added SSIM loss term. This was motivated by supervisor feedback that L1 may help contrast, but an additional structural/detail-sensitive loss may be needed to recover fine cloud texture.

Run name:
nadir256_2020_terra_square73k_channel1_resizeconv_reflectpad_l1_ssim01_full001

Key settings:
- input: 2020 Terra square patches
- channel: 1 only
- loss: L1 + SSIM
- SSIM lambda: 0.1
- padding: reflect
- decoder: bilinear resize + Conv2d
- epochs: 1000
- steps per epoch: 1500

Purpose:
To test whether structural similarity loss improves fine-scale texture and reduces overly smooth reconstructions.

# Run 4: Channel-1 Full-Latent VAE With Resize-Convolution Decoder

Started a fourth run using a variational autoencoder, but with the full latent dimensionality preserved as 256 x 8 x 8 rather than compressing directly to 3 channels. The 3D spin representation is now treated as a projection from the full latent space rather than the full bottleneck itself.

Run name:
nadir256_2020_terra_square73k_channel1_fullvae256_resizeconv_reflectpad_l1_ssim01_kl1e6_full001

Key settings:
- input: 2020 Terra square patches
- channel: 1 only
- architecture: full-latent VAE
- latent space: 256 x 8 x 8
- spin projection: 3-channel projection from latent space for visualisation
- loss: L1 + SSIM + KL
- KL lambda: 1e-6
- padding: reflect
- decoder: bilinear resize + Conv2d
- epochs: 1000
- steps per epoch: 1500

Purpose:
To test whether keeping a high-dimensional latent space improves reconstruction quality while still allowing a 3D spin-style representation to be extracted for analysis.

# TensorBoard Logging

These runs include TensorBoard scalar logging so that the training losses can be tracked more systematically. Logged quantities should include total loss, reconstruction loss, SSIM loss where applicable, KL/transform loss for the VAE, epoch, and learning rate.

This is an improvement over relying only on printed log files, and should make it easier to compare training behaviour between architectures.

# Current Interpretation

The main aim of these four runs is not yet clustering or final analysis, but architecture diagnosis. The comparison should show whether the main limitation is:
- multi-channel reconstruction difficulty
- transposed-convolution decoder artifacts
- lack of structural/detail-sensitive loss
- excessive latent compression in the VAE

The next step is to evaluate all four runs using the same sampled patches, plotting one channel across multiple different patches, with rows for input, reconstruction, and absolute error.

# Overnight Channel-1 Reconstruction Runs

Set up four overnight training runs focused on reconstructing a single visible channel rather than all six MODIS channels. This followed supervisor feedback that examples should first be simplified to one grayscale channel, with multiple different patches shown for comparison. The aim was to reduce the complexity of the reconstruction task and better diagnose whether blur/artifacts are caused by architecture, loss function, or multi-channel difficulty.

# Run 1: Channel-1 L1 With Original Transposed-Convolution Decoder

Started a single-channel reconstruction run using the original ResNet-style autoencoder structure with strided downsampling and transposed convolutions in the decoder. This acts as the baseline for the new single-channel tests.

Run name:
nadir256_2020_terra_square73k_channel1_resnet_reflectpad_l1_full001

Key settings:
- input: 2020 Terra square patches
- channel: 1 only
- loss: L1 reconstruction loss
- padding: reflect
- decoder: transposed convolutions
- epochs: 1000
- steps per epoch: 1500

Purpose:
To test whether simply reducing the reconstruction target to one channel improves sharpness, before changing the decoder architecture.

![[Logbook-1784900174981.webp]]

# Run 2: Channel-1 L1 With Resize-Convolution Decoder

Started a second single-channel reconstruction run replacing transposed convolutions with resize + convolution upsampling. This follows the Distill checkerboard-artifact recommendation that decoder upsampling should avoid ConvTranspose where possible.

Run name:
nadir256_2020_terra_square73k_channel1_resizeconv_reflectpad_l1_full001

Key settings:
- input: 2020 Terra square patches
- channel: 1 only
- loss: L1 reconstruction loss
- padding: reflect
- decoder: bilinear resize + Conv2d
- epochs: 1000
- steps per epoch: 1500

Purpose:
To test whether decoder artifacts are reduced by replacing transposed convolutions with interpolation-based upsampling.

![[Logbook-1784900196656.webp]]

# Run 3: Channel-1 L1 Plus SSIM With Resize-Convolution Decoder

Started a third single-channel reconstruction run using the resize-convolution decoder, but with an added SSIM loss term. This was motivated by feedback that L1 may help contrast, but an additional structural/detail-sensitive loss may be needed to recover fine cloud texture.

SSIM means **Structural Similarity Index Measure**. It is a metric/loss that compares two images based not only on pixel-by-pixel differences, but also on whether they have similar local structure.

Run name:
nadir256_2020_terra_square73k_channel1_resizeconv_reflectpad_l1_ssim01_full001

Key settings:
- input: 2020 Terra square patches
- channel: 1 only
- loss: L1 + SSIM
- SSIM lambda: 0.1
- padding: reflect
- decoder: bilinear resize + Conv2d
- epochs: 1000
- steps per epoch: 1500

Purpose:
To test whether structural similarity loss improves fine-scale texture and reduces overly smooth reconstructions.

![[Logbook-1784900239100.webp]]

# Run 4: Channel-1 Full-Latent VAE With Resize-Convolution Decoder

Started a fourth run using a variational autoencoder, but with the full latent dimensionality preserved as 256 x 8 x 8 rather than compressing directly to 3 channels. The 3D spin representation is now treated as a projection from the full latent space rather than the full bottleneck itself.

Run name:
nadir256_2020_terra_square73k_channel1_fullvae256_resizeconv_reflectpad_l1_ssim01_kl1e6_full001

Key settings:
- input: 2020 Terra square patches
- channel: 1 only
- architecture: full-latent VAE
- latent space: 256 x 8 x 8
- spin projection: 3-channel projection from latent space for visualisation
- loss: L1 + SSIM + KL
- KL lambda: 1e-6
- padding: reflect
- decoder: bilinear resize + Conv2d
- epochs: 1000
- steps per epoch: 1500

Purpose:
To test whether keeping a high-dimensional latent space improves reconstruction quality while still allowing a 3D spin-style representation to be extracted for analysis.

![[Logbook-1784900260179.webp]]

![[Logbook-1784900271723.webp]]

take scalar product with unit vector in z direction to see how much aligned - heatmap
two maps - one taking the magnitude (length) and the other to take angle with respect to z direction - two channels to put into pseudo- RGB where G is the mean
overlap translucent over greyscale image

# TensorBoard Logging

These runs include TensorBoard scalar logging so that the training losses can be tracked more systematically. Logged quantities should include total loss, reconstruction loss, SSIM loss where applicable, KL/transform loss for the VAE, epoch, and learning rate.

This is an improvement over relying only on printed log files, and should make it easier to compare training behaviour between architectures.

# Current Interpretation

The main aim of these four runs is not yet clustering or final analysis, but architecture diagnosis. The comparison should show whether the main limitation is:
- multi-channel reconstruction difficulty
- transposed-convolution decoder artifacts
- lack of structural/detail-sensitive loss
- excessive latent compression in the VAE

The next step is to evaluate all four runs using the same sampled patches, plotting one channel across multiple different patches, with rows for input, reconstruction, and absolute error.

![[Logbook-1784901073117.webp]]

![[Logbook-1785160926915.webp|814]]

In the four channel-1 experiments, the resize-convolution L1 model gave the best qualitative reconstruction despite not having the lowest RMSE/MAE. The transposed-convolution model performed slightly better in pixel-wise metrics but appeared smoother. Adding SSIM produced visible contour/ringing artefacts, and the VAE256 model remained too blurred. This suggests that MAE/RMSE alone are insufficient for selecting the best reconstruction model, and visual inspection remains necessary for assessing cloud texture realism.

## Three-Channel Spectral Transformer Autoencoder Development

Since the previous logbook entry, the main focus shifted from improving standard convolutional autoencoders to testing a more structured spectral-transformer architecture. This was motivated by the fact that the best previous reconstruction models were still either blurry, affected by artifacts, or unable to preserve fine-scale cloud texture consistently across all channels.

The earlier single-channel resize-convolution experiments suggested that replacing transpose convolutions with interpolation-based upsampling gave visually better cloud structure, even when RMSE/MAE was not always the lowest. Based on this, resize-convolution was chosen as the decoder/upscaling method for the new transformer architecture.

The supervisor suggested moving toward a cloud-aware CNN/transformer architecture. The interpretation used here is that CNNs first learn local spatial cloud structure within each spectral channel, while a transformer then learns how the different spectral channels relate to each other. This differs from a standard convolutional autoencoder, where channels are mixed immediately by the first convolutional layer.

The first transformer model used three selected MODIS bands: Band 1, Band 6, and Band 31. In the patch tensor these correspond to channel indices `0, 2, 4`, assuming the six-channel order is `[Band 1, Band 2, Band 6, Band 26, Band 31, Band 32]`. These bands were chosen to include one visible/daytime band, one additional reflective cloud-structure band, and one thermal/night-capable band.

The first spectral-transformer model used three separate CNN encoders, one for each selected band. Each encoder produced a latent representation. At each latent spatial position, the three band-specific latent vectors were treated as tokens and passed through a transformer encoder. The attended spectral information was then fused into one shared latent representation, which was decoded by a single decoder back into the three reconstructed channels.

Plain-text architecture sketch for the first model:

Input patch: Bands 1, 6, 31

Band 1  -> CNN encoder -> latent token 1
Band 6  -> CNN encoder -> latent token 2
Band 31 -> CNN encoder -> latent token 3

At each latent spatial position:
token 1, token 2, token 3 -> spectral transformer attention

Transformer output -> fused latent representation -> one shared resize-conv decoder -> reconstructed Bands 1, 6, 31

A smoke test was run for this single-decoder spectral-transformer architecture on JASMIN/Orchid. After some initial queueing and one failed attempt, the smoke test completed successfully with `### TRAINING NORMAL END ###`, confirming that the architecture and training loop worked.

A full single-decoder run was then started using raw 2020 Terra square patches, selected channels `0 2 4`, L1 reconstruction loss, resize-convolution upsampling, reflect padding, and batch size 8. During this stage, the definition of epoch was corrected. Previously, “epoch” had been used as a fixed number of training steps. From this point, `--steps_per_epoch 0` was introduced so that one epoch means one full pass through the dataset. With approximately 73k patches and batch size 8, one true epoch is about 9,200 training steps.

![[Logbook-1785419923216.webp]]

Partial evaluation of the single-decoder model showed that the outputs were still very blurry. This was especially clear on worst-case examples. Although the architecture was functional, the single shared decoder may have been too restrictive because the three selected bands have different physical meanings and different statistical ranges.

![[Logbook-1785420016691.webp]]

To test whether the shared decoder was the limitation, a second architecture was implemented: the multi-decoder spectral transformer. This kept the three separate CNN encoders and the spectral transformer, but instead of fusing everything into one latent representation for one decoder, it kept the three attended band-specific latent states separate. Each band then had its own decoder. This means the model still allows spectral communication through the transformer, but each band has its own reconstruction pathway.

Plain-text architecture sketch for the multi-decoder model:

Input patch: Bands 1, 6, 31

Band 1  -> CNN encoder -> latent token 1
Band 6  -> CNN encoder -> latent token 2
Band 31 -> CNN encoder -> latent token 3

At each latent spatial position:
token 1, token 2, token 3 -> spectral transformer attention

Attended token 1 -> decoder 1 -> reconstructed Band 1
Attended token 2 -> decoder 2 -> reconstructed Band 6
Attended token 3 -> decoder 3 -> reconstructed Band 31

This difference is scientifically useful. If the single-decoder model works best, it suggests that one shared spectral cloud representation is sufficient to reconstruct all three bands. If the multi-decoder model works best, it suggests that spectral attention is helpful, but each band still needs a separate decoder because the output structures/statistics are too different.

The multi-decoder L1 and L2 models were then trained. The L1 model reached around epoch 90, while the L2 model reached around epoch 55 before jobs were interrupted. These are not yet perfectly fair comparisons because the L1 model has trained for longer. However, the partial results are already useful for checking qualitative behaviour.

[INSERT IMAGE: notebook reconstruction grid for multi-decoder L1 at the latest checkpoint. Use a “one band across many patches” figure if available.]

[INSERT IMAGE: notebook reconstruction grid for multi-decoder L2 at the latest checkpoint. Ideally use the same band and sample patches as the L1 figure.]

An important issue appeared during the multi-decoder L2 evaluation: the three bands were not reconstructed equally well. Band 1 appeared sharper and more structurally faithful, while Band 6 and Band 31 showed stronger blur or block-like artifacts. Although the architecture is symmetric, the data are not symmetric. The bands have different physical meanings, different value scales, and different spatial statistics, so an unnormalised reconstruction loss can effectively prioritise some bands more than others.

[INSERT IMAGE: notebook figure showing the band asymmetry, with Band 1, Band 6, and Band 31 plotted separately for the same model/checkpoint. This should be the set of images where Band 1 looked much better than Band 6 and Band 31.]

This led to a new loss-side normalisation idea. Earlier input normalisation experiments using global min-max and percentile scaling made reconstructions blurry, so the raw input data should not necessarily be normalised before entering the model. Instead, the loss contribution from each band can be normalised while keeping the raw data unchanged.

Two new losses were added: `bandnorm_l1` and `bandnorm_l2`. For `bandnorm_l1`, each band’s MAE is divided by that band’s batch standard deviation before averaging across bands. For `bandnorm_l2`, each band’s MSE is divided by that band’s batch variance before averaging. This should make the loss more balanced across the selected spectral channels without destroying the raw data scale.

This idea was also supported by reading the TransMCS hybrid CNN-transformer autoencoder paper. The relevant point from that paper is that multi-modal reconstruction losses often weight modalities so that each contributes fairly. In this project, the spectral bands can be treated similarly to modalities.

TensorBoard logging was also added and tested. TensorBoard now records scalar values such as total loss, reconstruction loss, SSIM loss if used, epoch, and learning rate. There was an issue launching TensorBoard because of duplicate `projector` plugins caused by duplicated site-packages paths in the JASMIN virtual environment. This was worked around by launching TensorBoard through a small Python wrapper that removes duplicate resolved site-packages paths.

Current status:
- Single-decoder spectral transformer works but appears too blurry.
- Multi-decoder spectral transformer is more physically interpretable and likely more appropriate.
- L1 and L2 multi-decoder runs are partially complete.
- Band-normalised L1 and L2 multi-decoder runs have been prepared and submitted.
- The next key comparison is between raw L1, raw L2, bandnorm L1, and bandnorm L2 using the same architecture and same patch set.

Immediate next steps:
- Finish/resume the multi-decoder L1 and L2 runs to 100 true epochs.
- Run the bandnorm L1 and bandnorm L2 models.
- Compare all four using the same sampled patches.
- Plot reconstruction metrics per band, not just overall RMSE/MAE.
- Include visual grids showing one band across many patches, as requested by the supervisor.
- Use TensorBoard loss curves alongside qualitative reconstruction figures.

````
### Aim

The aim of this stage was to move from a single end-to-end reconstruction model towards a staged cloud representation pipeline. The proposed pipeline separates:

1. per-band image tokenisation using independent autoencoders,
2. spin-lattice representation learning using a ViT/transformer model,
3. clustering of the resulting cloud representations.

This change was motivated by the difficulty of reconstructing all selected MODIS bands equally well in a single model, and by the need for a cleaner representation-learning framework.

### Architecture change: staged cloud-aware compressor

The previous spectral-transformer autoencoder treated the selected spectral bands as one end-to-end reconstruction task. The new approach treats each band separately at first.

For the first proof of concept, I selected three MODIS bands:

- Band 1: visible reflected-light cloud structure,
- Band 6: shortwave infrared/cloud-sensitive structure,
- Band 31: thermal infrared window band, usable during day and night.

In the saved tensors these correspond to channels 0, 2, and 4 respectively.

The planned tokenizer stage is:

```text
Band 1 image  -> Band 1 encoder  -> z1: 256 x 8 x 8 -> Band 1 decoder
Band 6 image  -> Band 6 encoder  -> z6: 256 x 8 x 8 -> Band 6 decoder
Band 31 image -> Band 31 encoder -> z31: 256 x 8 x 8 -> Band 31 decoder
````

The three latent grids are then stacked to form a spin lattice:

```
3 bands x 8 x 8 spatial cells x 256 latent dimensions
```

This gives a representation of shape:

```
3 x 8 x 8 x 256
```

This representation will be used as input to a ViT/transformer model in the next stage.

**Include picture here:** a simple notebook/code output or schematic showing the three separate band tokenizers and the stacked `3 x 8 x 8 x 256` spin lattice. If no notebook image exists, include a plain-text schematic like the one above.

### True epoch definition

I corrected the training setup so that “epoch” now means one full pass through the available patch dataset. Previously, many runs used a fixed number of steps per epoch, so the epoch count was more like a logging interval. The new tokenizer runs use:

```
--steps_per_epoch 0
```

so the training script uses the full dataloader length. With approximately 73,928 patches and batch size 8, one true epoch is approximately:

```
73928 / 8 ≈ 9241 steps
```

This means that true epochs are much longer than the older pseudo-epochs. I therefore used checkpoint saving every 5 epochs rather than every 10.

### Per-band tokenizer runs

I trained six initial tokenizer autoencoders:

|Data version|Band|Saved channel|Loss|Architecture|
|---|---|---|---|---|
|raw|Band 1|0|L1|resize-conv AE|
|raw|Band 6|2|L1|resize-conv AE|
|raw|Band 31|4|L1|resize-conv AE|
|p10-p90 normalised|Band 1|0|L1|resize-conv AE|
|p10-p90 normalised|Band 6|2|L1|resize-conv AE|
|p10-p90 normalised|Band 31|4|L1|resize-conv AE|

All six runs used independent autoencoders, not a shared model. The decoder uses resize-conv upsampling rather than transposed convolutions. The encoder still uses strided convolutions for downsampling. The runs used reflect padding, batch size 8, true epochs, and checkpoints every 5 epochs.

The p10-p90 normalised dataset was generated from the 2020 Terra square patches using global per-channel percentile scaling. The normalisation run completed successfully:

```
processed shards: 11800
nonzero shards: 4620
total patches: 73928
```

The percentile statistics used for the selected channels were:

```
Band 1/channel 0:  p10 = 0.8929, p90 = 21.6900
Band 6/channel 2:  p10 = 0.0736, p90 = 0.5886
Band 31/channel 4: p10 = 2.7590, p90 = 8.1686
```

### Raw versus p10-p90 normalisation

I compared the raw and p10-p90 tokenizers. Initially, raw RMSE and p10-p90 RMSE were not directly comparable because they were measured in different value spaces. To make the comparison fair, I converted the raw inputs and raw reconstructions into the p10-p90 value space using:

```
x_norm = clip((x_raw - p10) / (p90 - p10), 0, 1)
```

The p10-p90 trained models were already in this value space.

**Include picture here:** the notebook plot comparing raw versus p10-p90 in shared p10-p90 space, with bars for RMSE, MAE, and contrast retention.

**Include picture here:** the labelled raw-versus-p10p90 image grid for Band 1, with rows showing raw input, raw recon, p10p90 input, p10p90 recon, raw absolute error, and p10p90 absolute error.

**Include picture here:** equivalent labelled grids for Band 6 and Band 31, especially examples where p10-p90 normalisation did not improve the reconstruction.

The main result was that p10-p90 normalisation did not obviously improve reconstruction. In several cases, especially for Bands 6 and 31, the p10-p90 models looked smoother or less physically convincing than the raw models. This suggests that normalisation alone is not enough to solve the loss of fine structure.

### Band-dependent reconstruction quality

A consistent result is that Band 1 reconstructs better than Bands 6 and 31. Band 1 reconstructions preserve more cloud texture and small-scale visible structure, while Band 6 and Band 31 often reconstruct broad fields but lose fine detail.

One particularly informative Band 31 example showed that the model reconstructed the large-scale radiance/temperature gradient but lost thin filamentary cloud structures. This suggests that the model is not simply failing, but is compressing the thermal band into a low-frequency representation.

**Include picture here:** the Band 31 example where the input contains faint wispy filaments but the reconstruction mainly preserves the broad smooth field.

The current interpretation is:

```
Band 1 structure is visually and numerically high contrast, so L1/L2 losses reward preserving it.
Band 6 and Band 31 contain physically important but often lower-contrast or rarer structures.
The current 8 x 8 latent grid may average away thin or subtle features.
```

This means the current bottleneck may capture broad cloud state but not fine morphology, especially for thermal/infrared bands.

### SSIM and L2 follow-up runs

Because fine detail was still weak, I submitted new raw tokenizer runs using L1 + SSIM loss:

|Job ID|Band|Loss|
|---|---|---|
|43765078|Band 1|L1 + SSIM|
|43765080|Band 6|L1 + SSIM|
|43765081|Band 31|L1 + SSIM|

I also submitted raw L2 tokenizer runs as a comparator:

|Job ID|Band|Loss|
|---|---|---|
|43765083|Band 1|L2|
|43765084|Band 6|L2|
|43765085|Band 31|L2|

At the latest check, the L1+SSIM runs were running successfully. The L2 runs were still queued. The irrelevant transform and sparse losses shown in the logs are legacy outputs from the original AICCA training script and are zero for these tokenizer runs. The relevant losses for the tokenizer experiments are reconstruction loss and, for the SSIM runs, SSIM loss.

**Include picture here once available:** random/best/worst notebook examples from the L1+SSIM Band 1, Band 6, and Band 31 runs.

**Include picture here once available:** comparison plot of raw L1 versus raw L1+SSIM versus raw L2 for RMSE, MAE, contrast retention, and visual examples.

### Current interpretation

The current evidence suggests that the staged tokenizer approach is sensible, but the first-generation tokenizers are not equally good for all bands. Band 1 already gives reasonable texture reconstruction, while Bands 6 and 31 are more strongly smoothed. This may reflect a combination of:

- different physical meaning of the bands,
- lower contrast of important structures in Band 6/Band 31,
- dominance of broad smooth fields in the loss,
- the spatial coarseness of the 8 x 8 bottleneck,
- possible need for detail-aware losses such as SSIM or gradient loss.

If SSIM does not substantially improve Bands 6 and 31, the next likely architectural test is to reduce the compression severity by moving from:

```
8 x 8 x 256
```

to something like:

```
16 x 16 x 128
```

This would preserve more spatial detail while still producing a compact latent representation.

### Next plan

The immediate next steps are:

1. Finish the L1+SSIM and L2 tokenizer runs.
2. Compare raw L1, raw L1+SSIM, and raw L2 for each band.
3. Focus especially on whether Band 6 and Band 31 recover more fine structure.
4. If Band 6/Band 31 remain too smooth, run a smaller test with a 16 x 16 latent grid.
5. Begin extracting spin lattices from the best available tokenizers.
6. Train the first spin-lattice ViT using frozen tokenizers and invariance objectives rather than pixel reconstruction.
7. Evaluate whether the ViT produces stable representations under rotations, crops, and channel dropout.
8. Use the resulting spin-lattice representations for PCA, nearest-neighbour graph construction, and clustering.

The important conceptual shift is that reconstruction quality is now treated as the tokenizer validation step, not the final objective. The final scientific object is the spin-lattice representation and whether it supports stable cloud-state clustering.

