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

# Searching

- **searching** is the algorithmic process of finding a particular item in a collection of items
- a search typically returns `True` or `False` when queried if present
- in python we use `in` operator

## Sequential Search

- when data is in a collection such as list we say they have a linear / sequential relationship
- each data item stored in a position relative to others
	- in python relative positions are the index values
- if we start at first item in list and move from item to item following sequential order until we find item or run out of items

![[IMG_1690.png]]

```python
def sequential_search(a_list, item):
	pos = 0
	
	while pos < len(a_list):
		if a_list[pos] == item:
			return True
		pos = pos + 1
		
	return False
```

### Analysis of Sequential Search

- makes sense to count number of steps as a quantity to compare
	- assumption that the list is not ordered
- if item not in list then we have to compare against each value

| **Case** | **Best Case** | **Worst Case** | **Average Case** |
| —— | —— | —— | —— |
| item is present | $1{}$ | $n{}$ | $\frac{n}{2}{}$ |
| item is not present | $n{}$ | $n{}$ | $n{}$ |

- consider an organised list
	- we may discover the item not in the list half way

| **Case** | **Best Case** | **Worst Case** | **Average Case** |
| —— | —— | —— | —— |
| item is present | $1{}$ | $n{}$ | $\frac{n}{2}{}$ |
| item is not present | $1{}$ | $n{}$ | $\frac{n}{2}{}$ |


# Related