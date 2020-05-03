# valid palindrome leetcode #125

## unguided attempt:

filter string array to only consider alphanumerical chars;

## intro

very common. New pattern: pointer method aka pointer traversal.

## problem:

### definition:

given a string, determine whether it is a palindrome.

### input, output, edge cases and assumptions:

input: string
output: bool
edge cases: special characters
assumptions: we remove to compare. treat upper and lowercase letters as the same.

### naive solutions (obvious, but not efficient)

- inverviews might expect to solve quickly with naive solution or aknowledge that it exists.
- a reason that this question might be so popular is that a big part of solving algorithms is comparing different solutions.

#### pseudo-code:

compare forward and reversed arrays.

- convert string to array
- call reverse method
- compare both

```js
const isPalindrome = (s) => s.split('').reverse().join('') === s;
```

time complexity: n time for each: O(3n) -> O(n)
space: the compiler is storing the reversed string for comparing. Implicit O(n) space.

let's remove unwanted special characters. this is often called cleaning the data or sanitization.

```js
const sanitizedString = s.replace(/[^\w]/gi, '').toLowerCase();
```

- g: is for all matches
- i: is case insensitive
- "/ /": is the regex identifier
- []: char group
- ^: start of string
- \w: alphanumerical matcher
  (my words)

nobody expects you to memorize it. In an interview it is ok to ask if you can google it or ask them to lookup some syntax for you

ok.

### The Pointer method

but is there a better way?
is hash table a good fit?

- no advantages in space. extra space.
- does not garantee order.

### main idea

iterate through the array from both ends, checking if each element matches. If at any point it don't match, it is not a palindrome. if reaches the middle, it is a palindrome.

### pseudo code:

- create a left and right pointers using index.
- while pointers have not match:
  - check if chars are the same;
  - move pointers towards center.

### solution:

```js
export const sanitizeString = (s) =>
  s.normalize('NFD').replace(/[^\w]/gi, '').toLowerCase();

export const isPalindrome = (s = '') => {
  const san = sanitizeString(s);
  let start = 0;
  let end = san.length - 1;
  for (start; start < end; start += 1, end -= 1) {
    if (san[start] !== san[end]) return false;
  }
  return true;
};
```
#### time complexity
.normalize, .toLowerCase() itarates the string. O(2n)
.replace uses a regex. after a bit o research, looks like it is generally quadratic.

my eyes should jump for the loop:
this loop is screening only half of the array which is O(n * 1/2) => O(n)

#### space complexity
the main advantage of this method comes from space optimization.
in this note, reassing s instead of creating san would be better.
we're only use two extra pointers with is O(2) or constant space

#### main takeaway
The main takeaway is the pointer method. We'll be moving pointers.