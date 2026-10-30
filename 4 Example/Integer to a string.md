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

# Integer to a string

- overall algorithm recommended
	1. reduce the original number to a series of single-digit numbers
	2. convert the single digit-number to a string using a lookup
	3. concatenate the single-digit strings together to form the final result

![[Pasted image 20260821194454.png|387]]

```python
def to_str(n, base):
	convert_string = "0123456789ABCDEF"
	if n < base:
		return convert_string[n]
	else:
		return to_str(n // base, base) + convert_string[n % base]
```

- this works for any base between 2 and 16

## Stack recursion

- modify our algorithm to push the strings onto a stack instead of making recursive calls

```python
def to_str(n, base):
    r_stack = Stack()
    convert_string = "0123456789ABCDEF"
    while n > 0:
        if n < base:
            r_stack.push(convert_string[n])
        else:
            r_stack.push(convert_string[n % base])
        n = n // base
    res = ""
    while not r_stack.is_empty():
        res = res + str(r_stack.pop())
    return res
```

- each time we make a call to `to_str` we push a character on the stack
- a **stack frame** is allocated to handle the local variables of the function

![[Pasted image 20260822164856.png]]

## Palindrome checker

- consider palindrome checker again

```python
def remove_white(s):
    return ''.join(e for e in s if e.isalnum())

def is_pal(s):
    if len(s) <= 1 or s[0] == s[-1] and is_pal(s[1:-1]):
        return True
    else:
        return False
```

# Related