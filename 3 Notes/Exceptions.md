---
old: false
Tags:
  - w-ing
  - w-ten
Index: 3
Class: CS50P
Topics:
  - exceptions
  - errors
  - try
---

up: [[CS50P.base]]
# Exceptions

- exceptions are things that go wrong within our code
- exceptions are problems that arise while your program is running

# Runtime Errors

runtime errors refer to those created by unexpected behaviour within your code - for example intended for user to input number and they input character instead

we should be defensive such that our users are entering what we expect

create error handling to ensure the user behaves as intended

## `try`

in python `try` and `except` are ways of testing use input before something goes wrong

```python
try:
	x = int(input("What's x?'))
	print(f"x is {x}")
except ValueError:
	print("x is not an integer")
```
## `else`

we want as little code in our `try` as possible hence we can use `else`

```python
try:
    x = int(input("What's x?"))
except ValueError:
    print("x is not an integer")
else:
    print(f"x is {x}")
```

however we don't want to end the program if a mistake is made, we can fix this with

prompt again!

```python
while True:
    try:
        x = int(input("What's x?"))
    except ValueError:
        print("x is not an integer")
    else:
        break

print(f"x is {x}")
```

## `pass`

we can modify the code such that it does not warn our user, but simply asking the question again

```python
def main():
    x = get_int()
    print(f"x is {x}")


def get_int():
    while True:
        try:
            return int(input("What's x?"))
        except ValueError:
            pass


main()
```

our code will still function but will not repeatedly inform the user of their error



# Related

- [[libraries]]