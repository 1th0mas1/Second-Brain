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

# Exploring a Maze

- how do you find your way out of a maze?
- create an object `Maze` that will provide the following methods for us to use in writing our search algorithm
	- `__init__` reads in a data file representing a maze, initializes the internal representation of the maze, find the starting position for the turtle
	- `draw_maze` draws the maze in a window on the screen
	- `update_position` updates the internal representation of the maze and changes the position of the turtle in the window
	- `is_exit` checks to see if the current position is an exit from the maze
- `Maze` class overloads index operator `[]` so algorithm can access the status of any particular square
- the `__init__` method takes name of file as only parameter
	- file is text file representing a maze with '+' characters for walls, spaces for open spaces and 'S' for starting position

```python
class Maze:
    def __init__(self, maze_filename):
        with open(maze_filename, "r") as maze_file:
            self.maze_list = [
                [ch for ch in line.rstrip("\n")]
                for line in maze_file.readlines()
            ]
        self.rows_in_maze = len(self.maze_list)
        self.columns_in_maze = len(self.maze_list[0])
        for row_idx, row in enumerate(self.maze_list):
            if START in row:
                self.start_row = row_idx
                self.start_col = row.index(START)
                break
                
        self.x_translate = -self.columns_in_maze / 2
        self.y_translate = self.rows_in_maze / 2
        self.t = turtle.Turtle()
        self.t.shape("turtle")
        self.wn = turtle.Screen()
        self.wn.setworldcoordinates(
            -(self.columns_in_maze - 1) / 2 - 0.5,
            -(self.rows_in_maze - 1) / 2 - 0.5,
            (self.columns_in_maze - 1) / 2 + 0.5,
            (self.rows_in_maze - 1) / 2 + 0.5,
        )
```

- internal representation of maze is list of list
	- each row of `maze_list` is also a list
	- secondary list contains one character per square using characters described before

```python
[  ['+', '+', '+', '+', '+', ..., '+', '+', '+', '+', '+']
   ['+', ' ', ' ', ' ', '+', ..., ' ', '+', ' ', ' ', ' ']
   ['+', ' ', '+', ' ', ' ', ..., ' ', '+', ' ', '+', '+']
   ['+', ' ', '+', ' ', '+', ..., ' ', '+', ' ', '+', '+']
   ['+', '+', '+', ' ', '+', ..., ' ', '+', ' ', ' ', '+']
   ['+', ' ', ' ', ' ', ' ', ..., ' ', ' ', ' ', ' ', '+']
   ['+', '+', '+', '+', '+', ..., '+', '+', '+', ' ', '+']
   ['+', ' ', ' ', ' ', ' ', ..., ' ', ' ', '+', ' ', '+']
   ['+', ' ', '+', '+', '+', ..., '+', ' ', ' ', ' ', '+']
   ['+', ' ', ' ', ' ', ' ', ..., '+', ' ', '+', '+', '+']
   ['+', '+', '+', '+', '+', ..., '+', ' ', '+', '+', '+'] ]
```

- `draw_maze` method uses the internal representation to draw the initial view of maze on the screen

```python
def draw_maze(self):
	self.t.speed(10)
	self.wn.tracer(0)
	for y in range(self.rows_in_maze):
		for x in range(self.columns_in_maze):
			if self.maze_list[y][x] == OBSTACLE:
				self.draw_centered_box(
					x + self.x_translate, -y + self.y_translate, "orange"
				)
	self.t.color("black")
	self.t.fillcolor("blue")
	self.wn.update()
	self.wn.tracer(1)
	
def draw_centered_box(self, x, y, color):
```

- the `update_position` uses same internal representation to see if turtle has run into a wall
- updates internal representation with '.' or '-' indicating the turtle has a visited a particular square of if square is part of dead end
- `update_position` method uses helper methods `move_turtle` and `drop_bread_crumb` 

```python
def update_position(self, row, col, val=None):
	if val:
		self.maze_list[row][col] = val
	self.move_turtle(col, row)
	
	if val == PART_OF_PATH:
		color = "green"
	elif val == OBSTACLE:
		color = "red"
	elif val == TRIED:
		color = "black"
	elif val = DEAD_END:
		color = "red"
	else:
		color = None
		
	if color:
		self.drop_bread_crumb(color)
		
def move_turtle(self, x, y):
	self.t.up()
	self.t.setheading(self.t.towards(x + self.x_translate, -y + self.y_translate))
	self.t.goto(x + self.x_translate, -y + self.y_translate)
	
def drop_bread_crumb(self, color):
	self.t.dot(10, color)
```

- the `is_exit` method uses current position of turtle to test for exit condition
	- occurs when the turtle has navigated to edge of maze
		- row zero or column zero

```python
def is_exit(self, row, col):
	return (
		row ==0
		or row == self.rows_in_maze - 1
		or col == 0
		or col == self.columns_in_maze - 1
	)
	
def __getitem__(self, idx):
	return self.maze_list[idx]
```

- to search the process we follow is
	- call `update_position`
	- checks first three of four base cases
		- has the turtle run into a wall
		- has the turtle circles back to a square already explored
		- has the turtle found an exit
		- if none of these true we continue search recursively
	- four recursive calls to `search_from` but hard to predict how many will be called due to `or` statements
	- if first call to `search_from` returns `True` then none of last three calls needed
		- a step to `(row - 1, column)` is on the path leading out of the maze
	- if not a good path to north then next one tried to south
	- if not a good path to south then try west, finally east
	- if all four recursive paths return `False` then we have dead end

# Related
- [[Recursion]]
- [[Object-Oriented Programming]]