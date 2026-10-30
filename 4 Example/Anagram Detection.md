---
old: false
Tags:
  - w-ing
Class:
Topics:
---
up: [[Problem Solving.base]]

# Anagram Detection

## Example 1 - Checking off

- *check off* if a character matches another character

```python
def anagram_solution_1(s1, s2):
    still_ok = True
    if len(s1) != len(s2):
        still_ok = False

    a_list = list(s2)
    pos_1 = 0

    while pos_1 < len(s1) and still_ok:
        pos_2 = 0
        found = False
        while pos_2 < len(a_list) and not found:
            if s1[pos_1] == a_list[pos_2]:
                found = True
            else:
                pos_2 = pos_2 + 1
        if not found:
            still_ok = False
        pos_1 = pos_1 + 1

    return still_ok


print(anagram_solution_1("apple", "pleap"))  # expected: True
print(anagram_solution_1("abcd", "dcba"))  # expected: True
print(anagram_solution_1("abcd", "dcda"))  # expected: False
```

- embedded for loops give $O(n^{2}){}$ ([[Big O Notation]])

## Example 2 - Anagram sort and compare

- another solution is sorting the lists of characters
	- if they match they are anagrams

```python
def anagram_solution_2(s1, s2):
    a_list_1 = list(s1)
    a_list_2 = list(s2)

    a_list_1.sort()
    a_list_2.sort()

    pos = 0
    matches = True

    while pos < len(s1) and matches:
        if a_list_1[pos] == a_list_2[pos]:
            pos = pos + 1
        else:
            matches = False

    return matches


print(anagram_solution_2("apple", "pleap"))  # expected: True
print(anagram_solution_2("abcd", "dcba"))  # expected: True
print(anagram_solution_2("abcd", "dcda"))  # expected: False
```

- disguises as $O(n){}$
	- sorting function is typically either $O(n){}$ or $O(n\log n){}$

## Example 3 - anagram by brute force

- **brute force** solution would be exhausting all possible strings and comparing each
- this would be $O(n!){}$ (massive)
	- not an efficient method

## Example 4 - anagram by count and compare

- take advantage of the anagrams having the same number of a's, b's, etc
- first count number of times each character occurs

```python
def anagram_solution_4(s1, s2):
    c1 = [0] * 26
    c2 = [0] * 26

    for i in range(len(s1)):
        pos = ord(s1[i]) - ord("a")
        c1[pos] = c1[pos] + 1

    for i in range(len(s2)):
        pos = ord(s2[i]) - ord("a")
        c2[pos] = c2[pos] + 1

    j = 0
    still_ok = True
    while j < 26 and still_ok:
        if c1[j] == c2[j]:
            j = j + 1
        else:
            still_ok = False

    return still_ok


print(anagram_solution_4("apple", "pleap"))  # expected: True
print(anagram_solution_4("abcd", "dcba"))  # expected: True
print(anagram_solution_4("abcd", "dcda"))  # expected: False
```

- `ord` converts to UniCode 
	- subtracting `ord("a")` takes it from 1-26 to 0-25
- none of these are nested
	- $T(n) = 2n+26{}$ so $O(n){}$


# Related

- [[Big O Notation]]