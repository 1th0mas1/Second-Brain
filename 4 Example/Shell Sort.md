---
old: false
Tags:
  - w-ing
Class:
  - Problem Solving
Topics:
  - Searching and Sorting
---
up: [[Problem Solving.base]]

# Shell Sort

- **shell sort** sometimes called *diminishing increment sort* improves on [[Insertion Sort]] by breaking original list into smaller sublists
- create sub lists with increments where each list is then sorted

![[IMG_1724.png]]

- sort all the lists in grey into order

![[IMG_1725.png]]

- increments decrease such that on first pass $\frac{n}{4}{}$, second pass $\frac{n}{2}{}$, etc

```python
def shell_sort(a_list):
	sublist_count = len(a_list) // 2
	while sublist_count > 0:
		for pos_start in range(sublist_count):
			gap_insertion_sort(a_list, pos_start, sublist_count)
		print(“After increments of size”, sublist_count, “the list is”, a_list)
		sublist_cound = sublist_count // 2
		
def gap_insertion_sort(a_list, start, gap):
	for i in range(start + gap, len(a_list), gap):
		cur_val = a_list[i]
		cur_pos = i
		while cur_pos >= gap and a_list[cur_pos - gap] > cur_val:
			a_list[cur_pos] = a_list[cur_pos - gap]
		a_list[cur_pos] = cur_val
```

- naive thought: can’t be better than insertion as last sort is just a normal insertion
	- last insertion actually doesn’t need to do many sorts

# Related

- [[Sorting]]
- [[Insertion Sort]]