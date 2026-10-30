---
old: false
Tags:
  - w-ing
Class:
  - Problem Solving
Topics:
  - Data structures
  - stacks
---
up: [[Problem Solving.base]]

# Infix, Prefix, and Postfix

- expression $A+B \cdot{} C+D{}$ is potentially ambiguous
	- fully parameterise expression to remove ambiguity $((A+(B\cdot{}C))+D){}$ to show multiplication happens first
	- called **infix** expressions
- we can move operators to left side of operands - $A+B\cdot{}C{}$ could be written as $+A\cdot{}BC{}$ as **prefix**
	- shows $\cdot{}{}$ appears immediate before so takes precedence
- we can move operators to right side of operands - $ABC\cdot{}+{}$

|**Infix**|**Prefix**|**Postfix**|
|-----|-----|-----|
|$A+B{}$|$+AB{}$|$AB+{}$|
|$A+B\cdot{}C{}$|$+A\cdot{}BC{}$|$ABC\cdot{}+{}$|
|$(A+B)\cdot{}C{}$|$\cdot{}+ ABC{}$|$AB+C\cdot{}{}$|
|$A+B\cdot{}C+D{}$|$++A\cdot{}BCD{}$|$ABC\cdot{}+D+{}$|
|$(A+B)\cdot{}(C+D){}$|$\cdot{}+AB+CD{}$|$AB+CD+\cdot{}{}$|
|$A\cdot{}B+C\cdot{}D{}$|$+\cdot{}AB\cdot{}CD{}$|$AB\cdot{}CD\cdot{}+{}$|
|$A+B+C+D{}$|$+++ABCD{}$|$AB+C+D+{}$|

## Conversion algorithm

conversion algorithm to postfix

1. create an empty stack called `op_stack` for keeping operators. Create an empty list for output
2. convert the input infix string to a list by using the string method `split`
3. scan the token list from left to right
	- if token is operand, append it to end of output list
	- if token is left parenthesis, push it on the `op_stack`
	- if token is right parenthesis, pop the `op_stack` until corresponding left parenthesis is removed - append each operator to the end of the output list
	- if token is an operator, $\cdot{}{}$, $/{}$, $+{}$, or $-{}$, push it on `op_stack` , first remove any operators in `op_stack` that has higher or equal precedence and append them to output list
4. when input expression is completely processed, check the `op_stack` , any operators still on the stack can be removed and appended to end of output list

```python
from pythonds3.basic import Stack

def infix_to_postfix(infix_expr):
    prec = {}
    prec["*"] = 3
    prec["/"] = 3
    prec["+"] = 2
    prec["-"] = 2
    prec["("] = 1
    op_stack = Stack()
    postfix_list = []
    token_list = infix_expr.split()

    for token in token_list:
        if token in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" or token in "0123456789":
            postfix_list.append(token)
        elif token == "(":
            op_stack.push(token)
        elif token == ")":
            top_token = op_stack.pop()
            while top_token != "(":
                postfix_list.append(top_token)
                top_token = op_stack.pop()
        else:
            while (not op_stack.is_empty()) and (prec[op_stack.peek()] >= prec[token]):
                postfix_list.append(op_stack.pop())
            op_stack.push(token)

    while not op_stack.is_empty():
        postfix_list.append(op_stack.pop())

    return " ".join(postfix_list)

print(infix_to_postfix("A * B + C * D"))
print(infix_to_postfix("( A + B ) * C - ( D - E ) * ( F + G )"))
```




# Related
- [[Lists]]