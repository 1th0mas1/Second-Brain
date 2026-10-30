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

# Selection Sort

- **selection sort** improves on bubble sort by making only one exchange every pass through the list
- a selection sort looks for largest value making a pass, then places in proper location
	- after first path the number it must pass over decreases by 1

![[IMG_1697.png]]

```python
def selection_sort(a_list):
	for i in range(len(a_list)):
		mx_idx = 0
		for j in range(len(a_list) - i):
			if a_list[j] > a_list[mx_idx]:
				mx_idx = j
			if mx_idx != len(a_list) - i - 1:
				new_end = len(a_list) - i - 1
				a_list[mx_idx], a_list[new_end] = a_list[new_end], a_list[mx_idx]
```

- while this is also $O(n^{2}){}$ less exchanges made than [[Bubble Sort]] so more efficient
# Related

- [[Sorting]]