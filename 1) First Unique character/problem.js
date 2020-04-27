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
