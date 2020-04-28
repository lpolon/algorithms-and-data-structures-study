export function findFirstUniqueChar(string) {
  const hashtable = string.split('').reduce((obj, char, arrIndex) => {
    if (arrIndex === 0) {
      obj[char] = {
        count: 1,
        index: arrIndex,
      }
      return obj
    }
    if (!obj.hasOwnProperty(char)) {
      obj[char] = {
        count: 1,
        index: arrIndex,
      }
      return obj
    }
    obj[char].count += 1
    return obj
  }, {})

  let charIndex
  Object.entries(hashtable).forEach(([, obj]) => {
    const { count, index } = obj
    if (count === 1) {
      if (typeof charIndex === 'undefined') charIndex = index
      if (index < charIndex) charIndex = index
    }
  })
  if (typeof charIndex === 'undefined') return -1
  return charIndex
}

export function findFirstUniqueCharOption2(string) {
  const hashtable = string.split('').reduce((obj, char, arrIndex) => {
    if (arrIndex === 0) {
      obj[char] = 1
      return obj
    }
    if (!obj.hasOwnProperty(char)) {
      obj[char] = 1
      return obj
    }
    obj[char] += 1
    return obj
  }, {})

  return string.split('').findIndex(char => hashtable[char] === 1)
}

export function aaronsSolution1(s) {
  const hashTable = {}
  for (let char of s) {
    if (hashTable[char]) hashTable[char] += 1
    else hashTable[char] = 1
  }

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i]
    if (hashTable[char] === 1) return i
  }

  return -1
}

// solution 2 without hashtable.
/*
  check if char is unique by comparing .indexOf() with .lastIndexOf();
*/

export const aaronsSolution2 = s => {
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i]
    const firstIndex = s.indexOf(char)
    const lastIndex = s.lastIndexOf(char)

    if (firstIndex === lastIndex) return i
    else continue
  }
  return -1
}
