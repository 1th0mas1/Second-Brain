---
old: false
Tags:
  - w-ing
Index:
Class:
  - Problem Solving
Topics:
  - Recursion
---
up: [[Problem Solving.base]]

# Dynamic Programming

- **Dynamic programming** is a strategy for optimization problems
	- example is making change using the fewest coins
		- one method is **greedy method** where we use maximum coin and then get gradually smaller
		- greedy method works in us but image in addition to 1, 5, 10 and 25 there was a 21, to find optimal for 63 (3x21) greedy would fail
	- use a [[Recursion]] solution

- base case is the value equals the value of one of our coins - 1 coin solution
- we want minimum of coin plus the number of of coins needed to make change for the original amount minus this coin

$$
\text{num\_coins} = min \begin{cases}
1+\text{num\_coins}(\text{original amount}-1)\\1+\text{num\_coins}(\text{original amount}-5)\\1+\text{num\_coins}(\text{original amount}-10) \\ 1+ \text{num\_coins}(\text{original amount}-25)
\end{cases}
$$

- this can be converted to a recursive problem

```python
def make_change_1(coin_denoms, change):
	if change in coin_denoms:
		return 1
	min_coins = float(“inf”)
	for i in [c for c in coin_denoms if c <= change]:
		num_coins = 1 + make_change_1(
			coin_denoms, change - i
		)
		min_coins = min(num_coins, min_coins)
	return min_coins
```

 - this is extremely inefficient though - takes 67716925 calls to solve the 4 coins, 63 cents problem
 -  consider graph where each node is a different call of `make_change_1`
![[IMG_1688.png]]

- a clear issue is that there are many repeat calculations - wastes time and effort
- simple solution is to store results when we find them, then check table to see if result has already been found

```python
def make_change_2(coin_value_list, change, known_results):
	min_coins = change
	if change in coin_value_list:
		known_results[change] = 1
		return 1
	elif known_results[change] > 0:
		return known_results[change]
	else:
		for i in [c for c in coin_value_list if c <= change]:
			num_coins = 1 + make_change_2(coin_value_list, change - i, known_results)
			if num_coins < min_coins:
				min_coins = num_coins
			known_results[change] = min_coins
	return min_coins
```

- these changes take down to only 221 calls!
- this in fact isn’t dynamic programming but instead a method called *memoization* or more commonly *caching*

- true dynamic programming solution will make change for one cent and systematically work ways up to the amount of change we require
	- guarantees that at each step of the algorithm we know the minimum number of coins to make change for smaller amount

```python
def make_change_3(coin_value_list, change, min_coins):
	for cents in range(change + 1):
		coin_count = cents
		for j in [c for c in coin_value_list if c <= cents]:
			if min_coins[cents - j] + 1 < coin_count:
				coin_count = min_coins[cents - j] + 1
		min_coins[cents] = coin_count
	return min_coins[change]
```

- note this isn’t recursive function
	- a recursive solution is not automatically the most efficient
# Related

- [[Recursion]]