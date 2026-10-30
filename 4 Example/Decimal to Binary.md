---
old: false
Tags:
  - w-ing
Class:
  - Problem Solving
Topics:
  - Data structures
  - stacks
---
up: [[Problem Solving.base]]

# Decimal to Binary

- binary important in computer science as all values in computers are stored in binary - a string of 0s and 1s
- need to convert between binary and decimal freely
	- decimal number $233_{10}{}$ has corresponding binary $11101001_{2}{}$
- need a divide by 2 algorithm that uses a stack to keep track of digits

```python
from pythonds3.basic import Stack


def divide_by_2(decimal_num):
    rem_stack = Stack()

    while decimal_num > 0:
        rem = decimal_num % 2
        rem_stack.push(rem)
        decimal_num = decimal_num // 2

    bin_string = ""
    while not rem_stack.is_empty():
        bin_string = bin_string + str(rem_stack.pop())

    return bin_string

print(divide_by_2(42))
print(divide_by_2(31))
```

## Generic base

- our binary conversion is applicable for a more general base

```python
from pythonds3.basic import Stack


def base_converter(decimal_num, base):
    digits = "0123456789ABCDEF"
    rem_stack = Stack()

    while decimal_num > 0:
        rem = decimal_num % base
        rem_stack.push(rem)
        decimal_num = decimal_num // base

    new_string = ""
    while not rem_stack.is_empty():
        new_string = new_string + digits[rem_stack.pop()]

    return new_string

print(base_converter(25, 2))
print(base_converter(25, 16))
```

# Related
- [[Stacks]]