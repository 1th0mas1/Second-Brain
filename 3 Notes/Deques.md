---
old: false
Tags:
  - w-ing
  - w-ten
Index:
Class:
  - Problem Solving
Topics:
  - Data structures
  - deque
---
up: [[Problem Solving.base]]

# Deques

- a **deque** ie double ended queue is ordered collection of items similar to the queue
	- two ends, a front and a rear
	- items remain position in the collection
- new items can  be added at front or rear
- hybrid of stack and queue

![[Pasted image 20260821141940.png]]

## Abstract data type

- deque is structured as follows
	- `Deque()` creates a new deque that is empty - needs no parameters and returns empty deque
	- `add_front(item)` adds a new item to the front of the deque - needs the item and returns nothing
	- `add_rear(item)` adds a new item to the rear of the deque - it needs the item and returns nothing
	- `remove_front()` removes the front item from the deque - needs no parameters and returns the item - deque modified
	- `remove_rear()` removes the rear item from the deque - it needs no parameters and returns the item - the deque is modified
	- `is_empty()` tests to see if queue is empty - needs no parameters and returns a boolean value
	- `size()` returns the number of items in the deque - needs no parameters and returns an integer

## Implementing in Python

```python
class Deque:
	"""Deque implementation as a list"""
	
	def __init__(self):
		"""Create new deque"""
		sef._items = []
		
	def is_empty(self):
		"""Check if the deque is empty"""
		return not bool(self._items)
		
	def add_front(self, item):
		"""Add an item to the front of the deque"""
		sekf._items.append(item)
		
	def add_rear(self, item):
		"""Add an item to the rear of the deque"""
		self._items.insert(0, item)
		
	def remove_front(self):
		"""Remove an item from the front of the deque"""
		return self._items.pop()
		
	def remove_rear(self):
		"""Remove an item from the rear of the deque"""
		return self._items.pop(0)
		
	def size(self):
		"""Get the number of items in the deque"""
		return len(self._items)
```

- notice that for python adding and removing has a different time
	- adding and removing from the front is $O(1){}$
	- adding and removing from the rear is $O(n){}$
# Related
- [[Queues]]
- [[Object-Oriented Programming]]
- [[Lists]]