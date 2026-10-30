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
# Hashing

- attempt to build a data structure that can be searched in $O(1){}$ time
	- referred to as **hashing**
	- must know more about where the items might be
	- if we know where it would be then one search finds if it's there
- a **hash table** is collection of items which are stored in a way to make it easier to find later
	- positions of hash tables called *slots* can hold an item and is named by integer value starting with 0
	- initially hash table is empty

![[IMG_1692.png]]

- mapping between item and slot it belongs in hash table is **hash function**
- hash function takes an item in collection and returns value in range of slots $0{}$ and $m-1{}$
- consider a set of integers $54,26,93,17,77,31{}$
	- consider a hash function being *remainder method* where we divide by table size and return remainder


|  **Item**   |  **Hash Value**   |
| --- | --- |
|  54   |   10  |
| 26 | 4 |
| 93 | 5 |
| 17 | 6 |
| 77 | 0 |
| 31 | 9 |
- once hash values are imputed we can insert each item into hash table at designated position

![[IMG_1693.png]]

- we see $6{}$ of the $11{}$ slots are occupied - **load factor** of $\lambda{} = \frac{\text{number of items}}{\text{table size}}{}$ so $\lambda{} = 6 / 11{}$
- now if we want to search for item we use hash function to compute slot - $O(1){}$

## Hash Functions

- a hash function that maps each item into a unique slot is a **perfect hash function**
- given an arbitrary collection of items there is no systematic way to construct a perfect hash function
	- we do not need hash function to be perfect to gain efficiencies
- one way to make perfect hash function is to increase size of hash table so each possible value can be accommodated
	- this is not feasible for a large number of possible items - wasting enormous amounts of memory
		- consider using nine-digit social security number table for a class of 25 students
- we aim to create hash function that minimises number of collisions, easy to compute and evenly distributes items in hash table
- **folding method** one constructs hash function by dividing item into equal size pieces and adding results together
	- consider phone number 436-555-4601
		- divide into groups of 2 (43, 65, 55, 46, 01) and then add to get 210
		- take modulo of number of slots we want in this case 11
- another hash function construction is **mid-square method**
	- first square item, extract a portion of the resulting digits.
	- consider 44, we would square to get 1936, remove middle digits 93 and then do modulo

## Collision resolution

- when two items hash to same spot we must have a systematic method for placing the second item
	- process is called **collision resolution**
- a method for resolving collisions looks to hash table and finds another open slot
	- this is referred to a **open addressing**
		- systematically visiting a slot at a time we are performing **linear probing**
	- this has a tendency to cause **clustering**
		- if many collisions occur at a hash value a number of surrounding slots become full
		- one solution to this is skipping slots and so avoiding clustering
		- general name for this is **rehashing**
	- variant on linear probing is **quadratic probing**
		- instead of a constant skip value we use a rehash function that increments hash values by 1,3,5,7 and so on
- alternative method is to allow each slot to hold a chain of items - **chaining**
	- allows many items to exist at same location in the hash table which we then [[Searching|search]]

![[IMG_1695.png]]

## Abstract data type implementation

- in a dictionary a key is used to look up associated data value
	- refer to this idea as a **map**
- structure is an unordered collection of associations between a key and a data value
- keys in a map are all unique so there is a one-to-one relationship between key and value
	- `Map()` creates a new empty map
	- `put(key, val)` adds a new key-value pair to the map
		- if key already in map it replaces old value with new value
	- `get(key)` takes a key and returns the matching value stored in map or `None` otherwise
	- `del` deletes the key-value pair from map using statement of form `del map[key]`
	- `size()` returns the number of key-value pairs stored in map
	- `in` return `True` for a statement of form `key in map` if the given key is in the map, `False` otherwise
- we can use a hash table for key look up to approach $O(1){}$ performance
- use two lists to create a `HashTable` class that implements the map abstract data type
	- list called `slots` will hold the key items
	- parallel list called `data` will hold the data values
	- we want hash table to be a prime number for collisions to be maximally efficient

```python
def HashTable:
	def __init__(self):
		self.size = 11
		self.slots = [None] * self.size
		self.data = [None] * self.size
		
	def put(self, key, data):
		hash_value = self.hash_function(key, len(self.slots))
		
		if self.slots[hash_value] is None:
			self.slots[hash_value] = key
			self.data[hash_value] = data
		else:
			if self.slots[hash_value] == key:
				self.data[hash_value] = data #replace
			else:
				next_slot = self.rehash(hash_value, len(self.slots))
				while (
					self.slots[next_slot] is not None
					and self.slots[next_slot] != key
				):
					next_slot = self.rehash(next_slot, len(self.slots))
					
				if self.slots[next_slot] is None:
					self.slots[next_slot] = key
					self.data[next_slot] = data	
				else:
					self.data[next_slot] = data
					
	def hash_function(self, key, size):
		return key % size
		
	def rehash(self, old_hash, size):
		return (old_hash + 1) % size
		
	def get(self, ket):
		start_slot = self.hash_function(key, len(self.slots))
		
		position = start_slot
		while self.slots[position] is not None:
			if self.slots[position] == key:
				return self.data[position]
			else:
				position = self.rehash(position, len(self.slots))
				if position == start_slot:
					return None
					
	def __getitem__(self, key):
		return self.get(key)
		
	def __setitem__(self, key, data):
		self.put(key, data)
```

## Analysis

- said that best case for hashing is $O(1){}$
	- due to collisions the number of comparisons usually not this simple
	- consider load factor $\lambda{}{}$, if $\lambda{}{}$ is small then lower chance of collisions
	- average number of comparisons for successful search is $(1 / 2)\left( 1 + \frac{1}{1-\lambda{}} \right){}$ and unsuccessful search $(1/2)\left( 1 + \left( \frac{1}{1-\lambda{}} \right)^{2} \right){}$

# Related

- [[Searching]]
- [[Object-Oriented Programming]]
- [[Dictionaries]]