---
old: false
Tags:
  - w-ing
Class:
  - Problem Solving
Topics:
  - Recursion
---
up: [[Problem Solving.base]]

# Sum of a list of numbers

- suppose we want to sum over a list of numbers
	- simplest way is a simple loop

```python
def list_sum(num_list):
	the_sum = 0
	for i in num_list:
		the_sum = the_sum + i
	return the_sum
```

- consider we didn't have `while` or `for` loops
	- consider the problem as $((((1+3)+5)+7)+9){}$
- we say sum of list is the first element of list plus sum of the rest of list

```python
def list_sum(num_list):
	if len(num_list) == 1:
		return num_list[0]
	else:
		return num_list[0] + list_sum(num_list[1:])
```

- represent this graphically

![[Pasted image 20260821192811.png|273]]

- once broken down to the smallest number where its trivial we then go backwards

![[Pasted image 20260821192900.png|297]]
# Related

- [[Recursion]]