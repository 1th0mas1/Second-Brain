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
---
up: [[Problem Solving.base]]

# Node

- building block for the linked list ([[Lists]]) is the **node**
- nodes must hold two pieces of information
	- node must contain the list item itself - **data field**
	- must hold a reference to the next node

```python
class Node:
	"""A node of a linked list"""
	
	def __init__(self, node_data):
		self._data = node_data
		self._next = None
		
	def get_data(self):
		"""Get node data"""
		return self._data
		
	def set_data(self, node_data):
		"""Set node data"""
		self._data = node_data
		
	data = property(get_data, set_data)
	
	def get_next(self):
		"""Get next node"""
		return self._next
		
	def set_next(self, node_next):
		"""Set next mode"""
		self._next = node_next
		
	next = property(get_next, set_next)
	
	def __str__(self):
		"""String"""
		return str(self._data)
```

- `None` reference value is important
	- denotes the fact there is no next node
	- sometimes referred to as "grounding the node"

```
>>> temp = Node(93)
>>> temp.data
93
```

![[Pasted image 20260821153353.png]]
# Related
- [[Lists]]
- [[Object-Oriented Programming]]
- 