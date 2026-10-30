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

# Tower of Hanoi

- *Tower of Hanoi* was invented by Edouard Lucas
	- legend that tells of a Hindu temple where the puzzle was resented to young priests
		- priests receive three poles and a stack of 64 gold disks, each disk a little smaller than one beneath
		- transfer all 64 disks from one of three poles to another with two constraints
			- only move one disk at a time
			- never place a larger disk on top of a smaller one

```python
def move_tower(height, from_pole, to_pole, with_pole):
    if height >= 1:
        move_tower(height - 1, from_pole, with_pole, to_pole)
        move_disk(from_pole, to_pole)
        move_tower(height - 1, with_pole, to_pole, from_pole)


def move_disk(from_p, to_p):
    print("moving disk from", from_p, "to", to_p)
```

- two recursive steps
	- move all but the bottom disk on initial tower to intermediate pole
	- move bottom disk to its final resting place 

# Related