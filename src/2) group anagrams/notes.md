also involves hash tables.
leetcode #49

# I/O

input: array of strings
output: array of arrays of strings.

# Edge cases

empty arrays

# Assumptions

complete anagrams only

# pseudo-code:

2 pass.
first pass: One hash table for each word.
i.e.: abac => {a: 2, b: 1, c: 1}
returns an array of hash tables obj.

second pass: group strictEqual hash tables.
Returns an array of arrays with grouped words

how to Compare?
There is no easy way!

Let's change approach:
Only one hash table where each key is an sorted anagram.

# big(0) analysis

```js
export const groupAnagrams01 = (stringArr = []) => {
  if (stringArr.length === 0) return;
  const hashTable = stringArr
    .reduce((ht, word) => { -> // 1 loop. O(n).
      const sortedWord = word
        .split('')
        .sort()
        .join('');
      if (ht[sortedWord]) ht[sortedWord].push(word);
      else ht[sortedWord] = [word];
      return ht;
    }, {});
  return Object.values(hashTable);
};
```

## time complexity:

.sort() operations are expensive!
built-in sort: O(n log n)
loop: O(n)
O(n \* (m log m))
n = length of stringsArr
m = longest word

## space complexity:

n keys in the hash table, or linear space or O(n)
n = length of stringsArr
