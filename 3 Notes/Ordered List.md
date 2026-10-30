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

# Ordered List

- consider list of integers that can be written in ascending order
- structure of ordered list is collection of lists where items hold relative position based on underlying characteristic
	- `OrderedList()` creates a new ordered list that is empty - needs no parameter and returns an empty list
	- `add(item)` adds a new item to the list making sure order preserved - needs item and returns nothing - assume item is not already in list
	- `remove(item)` removes the item from the list - needs the item and modifies the list - raise error is item is not present in list
	- `search(item)` searches for the item in the list - needs the item and returns a Boolean value
	- `is_empty()` tests to see if list empty - no parameters needed and returns a boolean value
	- `size()` returns the number of items in the list - it needs no parameters and returns an integer
	- `index(item)` returns the position of an item in the list - needs the item and returns the index - assume the item is in the list
	- `pop()` removes and returns the last item in the list - it needs nothing and returns an item - assume the list has at least one item
	- `pop(pos)` removes and returns the item at position `pos` = it needs the position and returns the item - assume the item is in the list

## Implementing ordered list

- once again an empty list will be denoted by a `head` reference to `None`
- note that `is_empty` and `size` methods can we implemented same as [[Unordered List]]
	- deal with only the number of nodes not the actual item values / order
- `remove` works fine as it just needs to find the item and then link around node
- in unordered list when we search we must traverse until we find or run out of nodes
	- in ordered list if we get past value we're looking for we can stop

- `add` takes a lot of modification
	- in unordered lists it simply adds new node at head
	- we must traverse the list to find where the new node belongs
		- run out of nodes or
		- value of node becomes greater than the item we wish to add

```python
def add(self, item):
	"""Add a new node"""
	current = self.head
	previous = None
	temp = Node(item)
	
	while current is not None and current.data < item:
		previous = current
		current = current.next
		
	if previous is None:
		temp.next = self.head
		self.head = temp
	else:
		temp.next = current
		previous.next = temp
```

## Complexity

- `is_empty` is $O(1){}$ since is required one step to check head reference
- `size` will always require $n{}$ steps since there is no way to know number without traversing to end - $O(n){}$
- adding an item to ordered list, `search`, `add` and `remove` in worst case are $O(n){}$

# Related
- [[Lists]]
- [[Big O Notation]]
- [[Unordered List]]