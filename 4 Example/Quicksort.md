---
old: false
Tags:
  - w-ing
Index:
Class:
  - Problem Solving
Topics:
  - Searching and Sorting
---
up: [[Problem Solving.base]]

# Quicksort

- **Quicksort** uses divide and conquer to gain advantages of merge sort without additional storage
	- possible that list may not be divided in half
- quicksort selects a value called *pivot value*
	- its role is to assist in splitting the list
	- for now just pick first item in list
	- point where pivot value belongs in final list is *split point*
	- finds the split point and at the same time moves other items to the appropriate side

![[Pasted image 20260904120257.png]]

- *partitioning* works as follows
	- two position markers - `left_mark` and `right_mark` at beginning and end of remaining list
	- begin by incrementing `left_mark` until we locate value greater than pivot
	- then decrement `right_mark` until we find a value less than pivot value
		- these two must be out of place and hence swap
		- repeat the process
	- when `right_mark` is less than `left_mark` we stop
	- position of `right_mark` is hence the split point
- `quick_sort` invokes a recursive function called `quick_sort_helper`

```python
def quick_sort(a_list):
	quick_sort_helper(a_list, 0, len(a_list) - 1)
	
def quick_sort_helper(a_list, first, last):
	if first < last:
		split = partition(a_list, first, last)
		quick_sort_helper(a_list, first, split - 1)
		quick_sort_helper(a_list, split + 1, last)
		
def partition(a_list, first, last):
	pivot_val = a_list[first]
	left_mark = first + 1
	right_mark = last
	done = False
	
	while not done:
		while left_mark <= right_mark and a_list[left_mark] <= pivot_val:
			left_mark = left_mark + 1
		while left_mark <= right_mark and a_list[right_mark] >= pivot_val:
			right_mark = right_mark - 1
		if right_mark < left_mark:
			done = True
		else:
			a_list[left_mark], a_list[right_mark] = (
		        a_list[right_mark],
		        a_list[left_mark],
		    )
	a_list[first], a_list[right_mark] = a_list[right_mark], a_list[first]
	
	return right_mark
```

## Analysis

- if partitions always occur at midpoint there will be $\log n{}$ divisions
	- each value checked against split point hence $n\log n{}$
- in worst case scenario split points aren't in the middle and can skew heavily in one direction - becomes $n^{2}{}$ again
	- [[Merge Sort]] uses lots of memory so even though guarenteed $n\log n{}$ it might not be best option
	- utilise methods of choosing pivot value to avoid this
	- **median of three** we consider first, middle and last point and pick the median of three as the pivot value 

# Related
- [[Sorting]]