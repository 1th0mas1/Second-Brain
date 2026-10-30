---
old: false
Tags:
  - w-ing
  - w-ten
Index:
Class:
  - Problem Solving
Topics:
  - algorithm analysis
  - lists
  - Data structures
---
up: [[Problem Solving.base]]

# Lists

- a **list** is a collection of items where each item holds relative position in respect to the others
- refer to as *unordered list*

## Lists big O notation

- lists were optimised for the most common uses
- common operations include *indexing* and *assigning* - they are $O(1){}$
- there are two methods for growing a list
	- `append` method is $O(1){}$ - adds an elements to end
	- concatenate method is $O(k){}$ - where $k{}$ is size of list being concatenated (list being added to other list)

- python implemented lists such that a pop moves elements forwards - front loaded
	- a `pop` called at the end is $O(1){}$
	- a `pop` called in the middle of list is $O(n){}$ as all elements after have to move forward a spot

| **Operation**      | **Big O Efficiency** |
| ------------------ | -------------------- |
| index `[]`      | $O(1){}$             |
| index assignment | $O(1){}$             |
| `append`            | $O(1){}$             |
| `pop()`             | $O(1){}$             |
|       `pop(i)  `    | $O(n){}$             |
| `insert(i, item)` | $O(n){}$ |
| `del` operator | $O(n){}$ |
| `iteration` | $O(n){}$ |
| contains (`in`) | $O(n){}$ |
|get slice `[x:y] `    | $O(k){}$|
|`del` slice | $O(n){}$|
|`set` slice | $O(n+k){}$|
|`reverse` | $O(n){}$|
|`concatenate` | $O(k){}$ |
| `sort` | $O(n \log n){}$|
|`multiply` | $O(nk){}$ |
## Abstract data type

- consider a language where list wasn't inbuilt
	- need to create a class similar to before
		- `List()` creates a new list that is empty - no parameters and returns an empty list
		- `add(item)` adds a new item to the list - needs the item and returns nothing (assume item not already in list)
		- `remove(item)` removes the item from the list - it needs the item and modifies the list - raise error if not present in list
		- `search(item)` searches for the item in the list - needs the item and returns a Boolean value
		- `is_empty()` tests to see if list is empty - needs no parameters and returns a Boolean value
		- `size()` returns the number of items in the list - it needs no parameters and returns an integer
		- `append(item)` adds a new item to the end of the list making it the last item in collection - needs item and returns nothing - assume the item is not already in the list
		- `index(item)` returns the position of item in the list - it needs the item and returns the index - assume the item is in the list
		- `insert(pos, item)` adds a new item to the list at position `pos` - needs the item and returns nothing - assume the item is not already in the list and there are enough existing items to have the position
		- `pop()` removes and returns the last item in the list - needs nothing and returns an item - assume the list has at least one item
		- `pop(pos)` remove and returns the item at position `pos` - it needs the position and returns the item - assume the item is in the list

## Implementing an Unordered List

- to implement unordered list we construct **linked list**
- note we must maintain relative positioning of items
	- no requirement that we maintain that position in contiguous memory

![[Pasted image 20260821151220.png]]

- we must explicitly specify position of first item
- once we know first item it can tell position of next and so on
# Related

- [[Big O Notation]]