---
old: false
Tags:
  - w-ing
Index: 4
Class:
  - CS50P
Topics:
  - libraries
  - random walk
  - statistics
  - packages
  - APIs
---
up: [[CS50P.base]]

# libraries

- libraries are bits of code written by you or others that can be used in the program
- python allows you to share functions or features with others as 'modules'
- if you copy and paste code from old product the changes are you can create a module that you could bring into your new project

## Random

- `random` is a library that comes with Python that you could import into your own project
- you use word `import` in your program

```python
import random

coin =  random.choice(["heads", "tails"])
print(coin)
```

- we can improve our code with `from` allowing us to be specific about what we'd like to import
	- prior to this our `import` line was bringing in the entire contents of ``random

```python
from random import choice

coin = choice(["heads", "tails"])
print(coin)
```

- introduce the function `random.shuffle(x)`that generates random number between `a` and `b`

```python
import random

number = random.randint(1,10)
print(number)
```

- introduce the function `random.shuffle(x)`which shuffles a list into random order and print using [[Loops]]

```python
import random

cards = ["jack", "queen", "king"]
random.shuffle(cards)
for card in cards:
	print(card)
```

## Statistics

- python comes with built in `statistics` libraries
- `mean` is a function of this library that is quite useful

```python
import statistics

print(statistics.mean([100, 90]))
```

## Command-Line Arguments

- `sys` is a module that allows us to take arguments at the command line
- `argv` is a list within the `sys` module that records what the user typed on command line

```python
import sys

print("hello, my name is", sys.argv[1])
```

- if we type into terminal `python name.py David` you will see `hello, my name is David`
	- `sys.argv[0]` is `name.py` 
- we must cover our backs if no input is given ([[Exceptions]])

```python
import sys

try:
	print("hello, my name is", sys.argv[1])
except IndexError:
	print("Too few arguments")
```

- what if we have too many arguments? again we can add to this

```python
import sys

if len(sys.argv) < 2:
	print("Too few arguments")
elif len(sys.argv) > 2:
	print("Too many arguments")

print("hello, my name is", sys.argv[1])
```

## `slice` 

- this is a command that allows us to take a `list` and tell the interpreter to consider the start of the `list` and the end of the `list`([[Loops]])

```python
import sys

if len(sys.argv) < 2:
	sys.exit("Too few arguments")
	
for arg in sys.argv[1:]:
	print("hello, my name is",  arg)
```

## Packages

- python is powerful due to third-party libraries that add functionality
	- call these third party libraries 'packages'
-  PyPI is a repo or directory of all available third party packages available
- `cowsay` lets a cow talk to the user
- python package manager `pip` allows you to install packages quickly
- install `cowsay` with `pip install cowsay

```python
import cowsay
import sys

if len(sys.argv) == 2:
	cowsay.cow("hello, " + sys.argv[1])
```

## APIs

- APIs (application programming interfaces) allow you to connect to code of others
- `requests` allows your program to behave as a web browser world

```python
import requests
import sys
import json

if len(sys.argv) != 2:
	sys.exit()
	
response = requests.get("https://itunes.apple.com/search?entity=song$limit=1&term=" + sys.argv[1])
print(json.dumps(response.json(), indent=2))
```

## Making Your Own Libraries

- notice how much we have said "hello" so far
	- create a package that allows us to say "hello" and "goodbye" within `code.py`

```python
def hello(name):
	print(f"hello, {name}")
	
def goodbye(name):
	print(f"hello, {name}")
```

- this could then be implemented with

```python
import sys

from sayings import goodbye

if len(sys.argv) ==2:
	goodbye(sys.argv[1])
```

# Related
- [[Loops]]
-  [[Exceptions]]
- 