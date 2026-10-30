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

# Binary Search

- possible to take greater advantage of ordered list if clever in comparison
	- a **binary search** we start by examining middle term
		- eliminates half worst case, best case we are exact
		- repeat this process in each half we know that could contain value

![[IMG_1691.png]]

```python
def binary_search(a_list, item):
	first = 0
	last = len(a_list) - 1
	
	while first <= last:
		midpoint = (first + last) // 2
		if a_list[midpoint] == item:
			return True
		elif item < a_list[midpoint]:
			last = midpoint - 1
		else:
			first = midpoint + 1
			
	return False
```

- this algorithm is an example of a *divide and conquer* strategy
	- divide problem into smaller pieces, solve smaller pieces in a way and then reassemble
	- this clearly relates to a recursive method so we could translate to [[Recursion|recursive]]

```python
def binary_search_sec(a_list, item):
	if len(a_list) == 0:
		return False
	midpoint = len(a_list) // 2
	if a_list[midpoint] == item:
		return True
	elif item < a_list[midpoint]:
		return binary_search_rec(a_list[:midpoint], item)
	else:
		return binary_search_rec(a_list[midpoint + 1:], item)
```

## Analysis of Binary Search

- each comparison removes half remaining items from consideration

| **Comparisons** | **Approximate Number of Items Left** |
| —— | —— |
| 1 | $\frac{n}{2}{}$ |
| 2 | $\frac{n}{4}{}$ |
| 3 | $\frac{n}{8}{}$ |
| $\dots{}$ | $\dots{}$ |
| i | $\frac{n}{2^{i}}{}$ |

- solving for summing over $i{}$ gives $O(\log n){}$
- notice that `binary_search_rec(a_list[:midpoint], item)` uses slicing operator
	- in python slicing is actually $O(k){}$
	- not strictly logarithmic

# Related

- [[Search]]
- [[Recursion]]
- [[libraries]]
- [[Lists]]