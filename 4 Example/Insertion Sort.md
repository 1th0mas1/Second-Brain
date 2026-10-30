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

# Insertion Sort

- **insertion sort** is still $O(n^{2}){}$ works in a slightly different way
- maintains a sorted sublist in lower positions of list

![[IMG_1698.png]]

- there are again $n-1{}$ passes to sort $n{}$ items
- maximum number of comparisons if again $O(n^{2}){}$
	- in best case only one comparison needs to be done each pass
- a shift operation requires approximately a third of processing work of exchange since only one assignment performed

```python
def insertion_sort(a_list):
	for i in range(1, len(a_list)):
		cur_val = a_list[i]
		cur_pos = i
		
		while cur_pos > 0 and a_list[cur_pos - 1] > cur_val:
			a_list[cur_pos] = a_list[cur_pos - 1]
			cur_pos = cur_pos - 1
		a_list[cur_pos] = cur_val
```

# Related

- [[Sorting]]