---
old: false
Tags:
  - w-ing
  - w-ten
Index:
Class:
  - Problem Solving
Topics:
  - class 
  - logic gates
  - circuits
  - OOP
---
up: [[Problem Solving.base]]

# Object-Oriented Programming

- python is object-oriented programming language
	- naturally use 'classes' to show examples of data and control structures
- we can create new classes that model data that is needed to solve the problem
- use abstract data types to provide the logical description of what data object looks like (its state) and what it can do (its methods)

- building a classa class a programmer can take aadvantage of the abstraction process

## A `Fraction` Class

- common implementation is abstract data type `Fraction`
- a fraction such as $3/5{}$ consists of two parts
	- top value known as numerator and can be any integer
	- bottom value known as denominator and can be any integer greater than 0
- we need to be able to behave like any numeric value and add, subtract, multiply, and divide fractions

- first method all classes should provide is constructor
	- defines how data objects are created
	- we must provide numerator and denominator in this case
	- in python the constructor is always called `__init__`

```python
class Fraction
"""Class Fraction"""
	def __init__(self, top, bottom):
	"""Contructor definition"""
		self.num = top
		self.den = bottom
```

- `self` is a special parameter which is used as a reference back to the object itself
	- must always be the first formal parameter
	- never be given an actual parameter value upon invocation
- notation `self.num`in constructor defines `Fraction` object with internal data object `num` as part of its state
	- values of two formal parameters are initially assigned to the state
- to create instance of `Fraction` class must invoke constructor via

```python
my_fraction = Fraction(3,5)
```

![[image 1.png|415]]


- require implementation of the behaviour of this abstract data type
	- for example `print` doesn't know what to do with `Fraction` only `string`
- one option is to define method `show`that allows `Fraction` object to print itself as string

```python
def show(self):
	print(f"{self.num}/{self.den}")
```

```
>>> my_fraction = Fraction(3,5)
>>> my_fraction.show()
3/5
>>> print(my_fraction)
<__main__.Fraction object at 0x40bce9ac>
```

- it may be better to use a standard method called `__str__` which converts object to string

```python
def __str__(self):
	return f"{self.num}/{self.den}"
```

```
>>> my_fraction = Fraction(3,5)
>>> print(my_fraction)
3/5
```

- for addition we must add a function that overrides the addition method if given
$$
\frac{a}{b}+\frac{c}{d} = \frac{ad+c b}{bd}
$$
- we can use this method to redefine addition

```python
def __add__(self, other_fraction):
	new_num = self.num * other_fraction.den + self.den * other_fraction.num
	new_den = self.den * other_fraction.den
	
	return Fraction(new_num, new_den)
```

- note that this form of addition doesn't guarantee fraction in simplest form
- we must find lowest common denominator

```python
def gcd(m,n):
	while m % n != 0:
		m, n = n, m % n:
	return n

def __add__(self, other_fraction):
	new_num = self.num * other_fraction.den + self.den * other_fraction.num
	new_den = self.den * other_fraction.den
	common = gcd(new_num, new_den)
	return Fraction(new_num // common, new_den // common)
```
 
- our fraction object now has useful methods

![[image-1 1.png]]

- we need to be able to compare fractions to other fractions
	- `Fraction`  objects `f1` and `f2` that are the same should have `f1==f2` as `True`
	- under current implementation two different objects with same num and den are not equal -**shallow equality**
- create **deep equality** by overriding `__eq__`

```python
def __eq__(self, other_fraction):
	first_num = self.num * other_fraction.den
	second_num = other_fraction.num * self.den
	
	return first_num == second_num
```

## Logic Gates and Circuits

- **inheritance** is the ability of a class to be related to another class
	- python child classes can inherit characteristic data and behaviour from parent
	- referred to as **subclasses** and **superclasses**
	- referred to as an **Is-a relationship**
- there are examples of built-in hierarchy from non/sequential structure

![[image-2 1.png]]

- hierarchical classification allows OOP to use previous code and extend to meet new needs
- test by constructing a **simulation** an application to simulate digital circuits
	- building blocks will be the logic gate
	- gates have single output line where output depends on input lines

![[image-3 1.png]]

- AND gates have two input lines each of which can be either 0(`False`) or 1 (`True`)
	- both of the input lines have 1 then output is 1, otherwise 0
- OR gates have two input lines which can be 0 or 1
	- only not 1 when both input lines are 0
- NOT gates have only a single input line that can be 0 or 1
	- output is the other, ie input 1 gives output 0, input 0 gives output 1
- **truth tables** can represent these results

- logic gates are easily organised into inheritance hierarchy
	- `LogicGate` class is most general: label for the gate and an output line
		- next level of subclasses break into two families: one input line and two input lines
		- ie we say `UnaryGate` Is-a `LogicGate`

![[image-4.png]]

- start by implementing most general - `LogicGate`

```python
class LogicGate:
	def __init__(self, lbl):
		self.label = lbl
		self.output = None
		
	def get_label(self):
		return self.label
		
	def get_output(self):
		self.output = self.perform_gate_logic()
		return self.output
```

- details of `perform_gate_logic()` will be included within each individual gate
	- writing with code that does not exist yet

- look to implement the two subclasses now

```python
class BinaryGate(LogicGate):
	def __init__(self, lbl):
		LogicGate.__init__(self, lbl)
		self.pin_a = None
		self.pin_b = None
		
	def get_pin_a(self):
		return int(input(f"Enter pin A input for gate {self.get_label()}: "))
		
	def get_pin_b(self):
		return int(input(f"Enter pin B input for gate {self.get_label()}: "))
```

```python
class UnaryGate(LogicGate):
	def __init__(self, lbl):
		LogicGate.__init__(se;f, lbl)
		self.pin = None
		
	def get_pin(self):
		return int(input(f"Enter pin input for gate {slef.get_label()}: "))
```

- start by calling parent with `__init__` 
- we could also use a function called `super`
	- more general mechanism `LogicGate.__init__(self, lbl)`->`super().__init__(lbl)`

- now in a position to implement the final classes, for example

```python
class AndGate(BinaryGate):
	def __init__(self, lbl):
		super().__init__(lbl)
		
	def perform_gate_logic(self):
		a = self.get_pin_a()
		b = self.get_pin_b()
		if a == 1 and b ==1:
			return 1
		else:
			return 0
```

- this is then called as such

```
>>> g1 = AndGate("G1")
>>> g1.get_output()
Enter pin A input for gate G1: 1
Enter pin B input for gate G1: 0
0
```

- now components are built we can work towards building circuits
- implement `Connector` class that doesn't reside within gate hierarchy
	- each connector will have two gates (one on each side)
	- this is a **Has-a relationship**
	- `Connector` Has-a `LogicGate` 

![[image-5.png]]

- two gates labelled as:
	- from gate (output of gate is input of connector)
	- to gate (output of connector is input of gate)

```python
class Connector:
	def __init__(self, fgate, tgate):
		self.from_gate = fgate
		self.to_gate = tgate
		
		tgate.set_next_pin(self)
		
	def get_from(self):
		return self.from_gate
		
	def get_to(self):
		return self.to_gate
```

```python
def set_next_pin(self, source):
		if self.pin_a == None:
			self.pin_a = source
		else:
			if self.pin_b == None:
				self.pin_b = source
			else:
				raise RuntimeError("Error: NO EMPTY PINS")
```

- `set_next_pin` selects pin A by default

- now must change the getting pin methods

```python
def get_pin_a(self):
	if self.pin_a == None:
		return input(f"Enter pin A input for gate {self.get_label()}: ")
	else:
		return self.pin_a.get_from().get_output()
```

- we can then convert circuits via

![[image-6.png]]

```
>>> g1 = AndGate("G1")
>>> g2 = AndGate("G2")
>>> g3 = OrGate("G3")
>>> g4 = NotGate("G4")
>>> c1 = Connector(g1, g3)
>>> c2 = Connector(g2, g3)
>>> c3 = Connector(g3, g4)
>>> g4.get_output()
Enter pin A input for gate G1: 0
Enter pin B input for gate G1: 1
Enter pin A input for gate G2: 1
Enter pin B input for gate G2: 1
0
```

# Related


 - [[libraries]]