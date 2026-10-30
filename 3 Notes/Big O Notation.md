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
  - efficiency
---
up: [[Problem Solving.base]]

# Big O Notation

- we could characterise algorithms efficiency in terms of execution time
	- dependent on hardware being used
	- instead we quantify number of steps in algorithm

- a unit for computation could be the **number of assignment statements**

```python
def sum_of_n(n):
	the_sum = 0
	for i in range(1, n+1):
		the_sum = the_sum + i
	return the_sum
```

- number of assignments in `sum_of_n` is 1 (`the_sum=0`) plus the value of $n{}$ (the number of times we do `the_sum += i`)
	- call $T{}$ the function for this $T(n)=1+n{}$
	- $n{}$ is called **size of the problem**

- most important part is **order of magnitude** function describes part of $T(n){}$ that increases fastest
	- called **Big O notation** written as $O(f(n)){}$
	- as $n{}$ gets larger $1{}$ becomes less significant so $O(n){}$ is running time

- for $T(n)=5n^{2}+27n+1005{}$ as $n{}$ grows large $n^{2} {}$ is dominant term
	- coefficient $5{}$ becomes insignificant
	- running time $O(n^{2}){}$

- sometimes performance depends on exact values of data so need to characterise:
	- **best-case** - particular data set where algorithm performs particularly wee
	- **worst-case** - particular data set where algorithm performs particularly poorly
	- **average-case**

- a number of common order of magnitude functions come up lots in algorithms

![[image-7.png]]

![[image-8.png]]



# Related