also involves hash tables.

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
Only one hash table where each hey is an sorted anagram.