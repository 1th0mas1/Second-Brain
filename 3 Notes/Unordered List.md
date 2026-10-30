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
  - lists
---
up: [[Problem Solving.base]]

# Unordered List

- unordered lists built from a collection of [[Node|nodes]] each linked to the next by explicit references
- if we know the first node then we can find list by following links
- the `UnorderedList` class must maintain reference to first node

## Python implementation

```python
class UnorderedList:
	def __init__(self):
		self.head = None
		
	def is_empty(self):
		return self.head == None
		
	def add(self, item):
		temp = Node(item)
		temp.set_next(self.head)
		self.head = temp
		
	def size(self):
		current = self.head
		count = 0
		while current is not None:
			count = count + 1
			current = current.next
			
		return count
		
	def search(self, item):
		current = self.head
		while current is not None:
			if current.data == item:
				return True
			current = current.next
			
		return False
		
	def remove(self, item):
		current = self.head
		previous = None
		
		while current is not None:
			if current.data == item:
				break
			previous = current
			current = current.next
			
		if current is None:
			raise ValueError("{} is not in the list".format(item))
		if previous is None:
			self.head = current.next
		else:
			previous.next = current.next
```

- the `is_empty` method checks if the head of the list is a reference to `None`
- to `add` a new node we need two steps
	- change the `next` reference of the new node to refer to the old first node in the list
	- modify the head of the list to refer to the new node

```
>>> my_list.add(31)
>>> my_list.add(77)
>>> my_list.add(17)
>>> my_list.add(93)
>>> my_list.add(26)
>>> my_list.add(54)
```

![[Pasted image 20260821160050.png]]

- to implement `size` we traverse the linked list and keep count of number of nodes occurred
	- external reference called `current` and is initialized to the head of the list
- `search` also traverses the linked list
	- iterate over the list and check if matches - returns True if match found immediately
- `remove` method requires two steps:
	- traverse the list looking for item we want to remove (`ValueError` if item not in list)
	- if found then remove item - remove the entire link - modify the link in previous node

![[Pasted image 20260821161937.png]]

- we look to implement `append`
- initially we may think of an $O(n){}$ solution

```python
def append(self, item):
	new_node = Node(item)
	
	if self.head is None:
		self.head = new_node
		return
		
	current  = self.head
	while current.next is not None:
		current = current.next
		
	current.next = new_node
```

- however we could make $O(1){}$ by adding a `tail` 

```python
class UnorderedList:
	def __init__(self):
		self.head = None
		self.tail = None
```

```python
def add(self, item):
	temp = Node(item)
	
	if self.head is None:
		self.tail = temp
		
	temp.next = self.head
	self.head = temp
```

```python
def remove(self,  item):
	current = self.head
	previous = None
	
	while current is not None:
		if current.data == item:
			break
			
		previous = current
		current = current.next
		
	if current is None:
		raise ValueError("{} is not in the list".format(item))
		
	if previous is None:
		self.head = current.next
	else:
		previous.next = current.next
		
	if current is self.tail:
		self.tail = previous
```

- thus we get $O(1){}$ append

```python
def append(self, item):
	temp = Node(item)
	
	if self.head is None:
		self.head = temp
		self.tail = temp
		
	else:
		self.tail.next = temp
		
		self.tail = temp
```

# Related

- [[Lists]]
- [[Node]]
- [[Object-Oriented Programming]]