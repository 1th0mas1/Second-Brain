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

# Balanced Parentheses

- we require parentheses to have equal number of opening and closing - **balanced parentheses**

```python
from pythonds3.basic import Stack


def par_checker(symbol_string):
    s = Stack()
    for symbol in symbol_string:
        if symbol == "(":
            s.push(symbol)
        else:
            if s.is_empty():
                return False
            else:
                s.pop()

    return s.is_empty()


print(par_checker("((()))"))  # expected True
print(par_checker("((()()))"))  # expected True
print(par_checker("(()"))  # expected False
print(par_checker(")("))  # expected False
```

## General case
- there are multiple types of brackets
	- require bracket types to match

```python
from pythonds3.basic import Stack


def balance_checker(symbol_string):
    s = Stack()
    for symbol in symbol_string:
        if symbol in "([{":
            s.push(symbol)
        else:
            if s.is_empty():
                return False
            else:
                if not matches(s.pop(), symbol):
                    return False

    return s.is_empty()

def matches(sym_left, sym_right):
    all_lefts = "([{"
    all_rights = ")]}"
    return all_lefts.index(sym_left) == all_rights.index(sym_right)


print(balance_checker('{({([][])}())}'))
print(balance_checker('[{()]'))
```

# Related
- [[Stacks]]