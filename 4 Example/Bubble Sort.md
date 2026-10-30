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

# Bubble Sort

- **bubble sort** makes multiple passes through a list
- adjacent items are exchanged when out of order
- each pass through the list places next largest value in proper place

![[IMG_1696.png]]

- after this we know the largest number is in correct place
	- now $n-1{}$ values and hence $n-2{}$ pairs
	- for swapping in most languages we use a temporary variable

```python
temp = a_list[i]
a_list[i] = a_list[j]
a_list[j] = temp
```

- python allows shortcut `a, b = b, a` to swap

```python
def bubble_sort(a_list):
	for i in range(len(a_list) - 1, 0, -1):
		for j in range(i):
			if a_list[j] > a_list[j + 1]:
				temp = a_list[j]
				a_list[j] = a_list[j + 1]
				a_list[j + 1] = temp
```

- this is of order $\sum_{i=1}^{n}(n-i){} = (1 / 2) n^{2}+(1 / 2)n -n$ so $O(n^{2}){}$
	- best case the list is already ordered and no exchanges
	- worst case the list exchanges every time
- exchanging items to not final location is known as “wasted” exchange
- bubble is known as most inefficient sorting
- bubble sort can be modified to end early if list has become shorter
	- known as **short bubble**

```python
def bubble_sort_short(a_list):
	for i in range(len(a_list) - 1, 0, -1):
		exchange = False
		for j in range(i):
			if a_list[j] > a_list[j + 1]:
				exchanges = True
				a_list[j], a_list[j + 1] = a_list[j + 1], a_list[j]
			if not exchanges:
				break
```


# Related

- [[Sorting]]