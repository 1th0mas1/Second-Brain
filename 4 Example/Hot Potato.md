---
old: false
Tags:
  - w-ing
Class:
  - Problem Solving
Topics:
  - Data structures
  - queues
---
up: [[Problem Solving.base]]

# Hot Potato

- consider children's hot potato game
	- children line up in a circle and pass item to neighbour to neighbour as fast as possible

![[Pasted image 20260820170233.png]]

- we implement general **simulation** of hot potato
	- program inputs a list of names and a constant
	- return the name of the last person remaining after repetitive counting by `num`

![[Pasted image 20260820170341.png]]

```python
def hot_potato(name_list, num):
    sim_queue = Queue()
    
    for name in name_list:
        sim_queue.enqueue(name)
        
    while sim_queue.size() > 1:
        for i in range(num):
            sim_queue.enqueue(sim_queue.dequeue())
            
        sim_queue.dequeue()
        
    return sim_queue.dequeue()
```


# Related

- [[Queues]]