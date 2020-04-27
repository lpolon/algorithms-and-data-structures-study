# Find first Unique Character - Leetcode #387

- most common data structure of interview problems: the hash table.
input: string
output index of first unique char as an integer.
no unique: -1

- ok. We need one counter for each character and therefore we need a data structure to do it.

# hash table:
- store key:value - keep things organize
- constant lookup time - retrieve and store things quickly.
- an object to represent the string.

for instance:

```javascript
const string = 'leonardo'
const obj = {
  l: 1,
  e: 1,
  o: 2,
  n: 1,
  a: 1,
  r: 1,
  d: 1,
}
```

however, it must remember which one was the first one.

```javascript
const string = 'leonardo';
const obj = {
  l: {
    counter: 1,
    index: 0,
  },
  e: {
    counter: 1,
    index: 1,
  }
  // and so on...
  // OR:
  const objArr = [
    [l, 1],
    [e, 1],
    [o, 2]
  ]
}
```
## pseudocode plan:
- update the char count and store it
- if it's unique (value == 1) return index
- none are unique? return -1