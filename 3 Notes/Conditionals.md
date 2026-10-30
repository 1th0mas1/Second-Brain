---
old: false
Tags:
  - w-ing
  - w-ten
Index: 1
Class:
  - CS50P
Topics:
  - conditionals
  - match
  - modulo
---
up: [[CS50P.base]]

# Conditionals

# Modulo

in mathematics, parity refers to if the number is either even or odd

modulo `%` operator in programming allows us to see if two numbers divide evenly or divide and have remainder

for example `4 % 2` would result in zero as it evenly divides, yet `3 % 2` does not divide evenly and would result in a number other than zero

```python
x = int(input("What's x? "))

if x % 2 == 0:
	print("Even")
else:
	print("Odd")
```


# Match

`match` statements can be used to conditionally run code that matches certain values

consider

```python
name = input("What's your name? ")

if name == "Harry" or name == "Hermione" or name == "Ron":
	print("Gryffindor")
elif name == "Draco":
	print("Slytherin")
else:
	print("Who?")
```

alternatively we can use `match` statements to map names to houses, consider the following code:

```python
name = input("What's your name? ")

match name:
	case "Harry" | "Hermione" | "Ron":
		print("Gryffindor")
	case "Draco":
		print("Slytherin")
	case _:
		print("Who?")
```



# Related