---
old: false
Tags:
  - w-ing
Index:
Class:
  - Problem Solving
Topics:
  - Data structures
  - stacks
---
up: [[Problem Solving.base]]

# Stacks

- sometimes called *push-down stack* is ordered collection of items
	- addition of new items and removal of existing items take place at same end - *top*
	- end opposite of top is *base*
- items stored closer to the base represent those that have been in stack longest
- ordering principle for stack is *last in, first out* or **LIFO**

![[image-9.png]]

- order a stack is removed is exactly reverse of the order they were placed
	- every web browser has back button - go to most recent

## Stack Abstract Data Type

- stack operations are given as follows:
	- `Stack()` creates a new stack that is empty - needs no parameters
	- `push(item)` adds a new item to top of stack - needs the item and returns nothing
	- `pop()` removes the top item from the stack - needs no parameters
	- `peek()` returns the top item from stack but does not remove it
	- `is_empty()` tests to see whether the stack is empty - returns boolean
	- `size()` returns number of items in stack - returns integer

## Python implementation

- must find way to implement the stack in python
	- this is a *data structure*
- recall that the [[Lists|list]] class provides ordered collection mechanism and set of methods

```python
class Stack:
    """Stack implementation as a list"""

    def __init__(self):
        """Create new stack"""
        self._items = []

    def is_empty(self):
        """Check if the stack is empty"""
        return not bool(self._items)

    def push(self, item):
        """Add an item to the stack"""
        self._items.append(item)

    def pop(self):
        """Remove an item from the stack"""
        return self._items.pop()

    def peek(self):
        """Get the value of the top item in the stack"""
        return self._items[-1]

    def size(self):
        """Get the number of items in the stack"""
        return len(self._items)
```

- we could have made a stack where the top is the first element in list
	- for `append()` and `pop()` we would have $O(n){}$ instead of $O(1){}$

# Relate

- [[Big O Notation]]
- [[Lists]]