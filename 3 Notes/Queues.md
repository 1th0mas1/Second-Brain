---
old: false
Tags:
  - w-ing
Index:
Class:
  - Problem Solving
Topics:
  - Data structures
  - queues
---
up: [[Problem Solving.base]]

# Queues

- a **queue** is an ordered collection of items
	- addition happens at one end - the *rear*
	- removal of existing items occurs at other end - the *front*
	- this ordering principle known as **first in, first out** or **FIFO**

![[Pasted image 20260820165956.png]]
## Abstract data type

- queues are given the following operations
	- `Queue()` creates a new queue that is empty - no parameter
	- `enqueue(item)` adds a new item to the rear of the queue - needs an item and returns nothing
	- `dequeue()` removes the front item from the queue - needs no parameter and returns the item - queue is modified
	- `is_empty()` tests to see if queue is empty - no parameter needed and returns boolean value
	- `size()` returns the number of items in the queue - needs no parameters and returns an integer

## Implementing a Queue in python

- must decide which end to be used as rear and which as front
	- we will let rear position be index 0
		- `insert` function used for `enqueue` with $O(n){}$
		- `pop` operation used for `dequeue` with $O(1){}$

```python
class Queue:
	"""Queue implementation as a list"""
	
	def __init__(self):
		"""Create new queue"""
		self._items = []
		
	def is_empty(self):
		"""Check is the queue is empty"""
		return not bool(self._items)
		
	def enqueue(self, item):
		"""Add an item to the queue"""
		self._items.insert(0, item)
		
	def dequeue(self):
		"""Remove an item from the queue"""
		return self._items.pop()
		
	def size(self):
		"""Get the number of items in the queue"""
		return len(self._items)
```


# Related
- [[Object-Oriented Programming]]