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

# Printing Tasks

- consider sending printing tasks that are carried out on a first-come, first-served basis
- many questions arise with this configuration
	- is the printer capable of handling certain amount of work - otherwise students will be waiting too long

![[Pasted image 20260821121611.png]]

- average day about 10 students are working in the lab at any given hour
- students typically print up to twice in that time, length of tasks range 1-20 pages
	- equal probability of 1-20 pages
- printer is capable of processing 10 pages per minute
- 10 students in lab printing twice gives a 20 per hour printing tasks on average
	- on average there will be one task every 180 seconds

$$
\frac{20\text{ tasks}}{1 \text{hour}}\times \frac{1 \text{hour}}{60\text{ minutes}}\times \frac{1 \text{ minutes}}{60 \text{ seconds}}  = \frac{1\text{ task}}{180\text{ seconds}}
$$

- every second we simulate chance that a print task occurs by generating random number between 1 and 180 inclusive
	- if number is 180 then task is created

## Main steps

1. Create a queue of print tasks, each task will be given a timestamp upon arrival, queue empty to start
2. for each second (`current_second`)
	- does a new print task get created? if so add it to the queue with the `current_second` as the timestamp
	- if the printer is not busy and if a task is waiting
		- remove the next task from the print queue and assign it to the print
		- subtract the timestamp from the `current_second` to compute the waiting time for that task
		- append the waiting time for that task to a list for later processing
		- based on the number of pages in the print task, figure out how much time will be required
	- the printer now does one second of printing if necessary, it also subtracts one second from the time required for that task
	- if the task has been completed, ie time required has reached zero, the printer is no longer busy
3. after simulation complete, compute average waiting time from the list of waiting times generated

## Python implementation

- we must create classes for the three real-world objects: `Printer` , `Task` , and `PrintQueue`

### `Printer` class

- need to track if it has a current task
	- if it does then it is busy and amount of time needed can be computed from number of pages
	- constructor will allow the pages-per-minute setting to be initialized
	- `tick` method decrements the internal timer

```python
class Printer:
	def __init__(self, ppm):
		self.page_rate = ppm
		self.current_task = None
		self.time_remaining = 0
		
	def tick(self):
		if self.current_task is not None:
			self.time_remaining = self.time_remaining - 1
			if self.time_remaining <= 0:
				self.current_task = None
				
	def busy(self):
		return self.current_task is not None
		
	def start_next(self, new_task):
		self.current_task = new_task
		self.time_remaining = new_task.get_pages() * 60 / self.page_rate
```

### `Task` class

- the `Task` class represents a single printing task
- when task is created, a random number generator will provide a length from 1 to 20 pages
- this timestamp will represent the time that the task was created and placed in printer queue
- `wait_time` method can be used to retrieve the amount of time spent in queue

```python
import random

class Task:
	def __init__(self, time):
		self.timestamp = time
		self.pages = random.randrange(1, 21)
		
	def get_stamp(self):
		return self.timestamp
		
	def get_pages(self):
		return self.pages
		
	def wait_time(self, current_time):
		return current_time - self.timestamp
```

### Main simulation

```python
import random
from pythonds3.basic.queue import Queue

def simulation(num_seconds, pages_per_minute):
	lab_printer = Printer(pages_per_minute)
	print_queue = Queue()
	waiting_times = []
	
	for current_second in range(num_seconds):
		if new_print_task():
			task= Task(current_second)
			print_queue.enqueue(task)
			
		if (not lab_printer.busy()) and (not print_queue.is_empty()):
			nexttask = print_queue.dequeue()
			waiting_times.append(nexttask.wait_time(current_second))
			lab_printer.start_next(nexttask)	
			
		lab_printer.tick()
		
	average_wait = sum(waiting_times) / len(waiting_times)
	print(f"Average Wait {average_wait:6.2f} secs" + f"{print_queue.size():3d} tasks remaining. ")
	
def new_print_task()
	num = random.randrange(1, 181)
	return num == 180
	
def i in range(10):
	simulation(3600, 10)
```


# Related

- [[Queues]]