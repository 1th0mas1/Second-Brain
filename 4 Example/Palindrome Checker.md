---
old: false
Tags:
  - w-ing
  - w-ten
Class:
  - Problem Solving
Topics:
  - Data structures
  - deque
---
up: [[Problem Solving.base]]

# Palindrome Checker

- a **palindrome** is a string that reads the same forward and backwards
	- eg *radar*, *toot*, and *madam*
- construct an algorithm that checks for palindromes
- we will store entire string as deque
	- process characters from each side and should match

```python
from pythonds3.basic import Deque

def pal_checker(a_string):
	char_deque = Deque()
	
	for ch in a_string:
		char_deque.add_rear(ch)
		
	while char_deque.size() > 1:
		first = char_deque.remove_front()
		last = char_deque.remove_rear()
		if first != last:
			return False
			
	return True
```

# Related
- [[Deques]]