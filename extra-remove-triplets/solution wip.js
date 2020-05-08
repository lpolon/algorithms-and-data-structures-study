function solution(S) {
  let counter = 1
  let prevChar
  const stringArr = S.split('')
  const hashtable = stringArr.reduce((ht, char, i, arr) => {
    if (i === 0) return ht
    prevChar = arr[i - 1] //?
    if (char === prevChar) {
      counter += 1
    } else if (counter < 3) {
      counter = 1
      return ht
    } else {
      ht[i - 1] = {
        char: prevChar,
        count: counter,
      }
      counter = 1
      return ht
    }
    return ht
  }, {})
  if (counter >= 3)
    hashtable[S.length - 1] = {
      char: S[S.length - 1],
      count: counter,
    }
  console.log(hashtable)
// TODO: fix index in keyname
  stringArr.map((e, i) => {
    if (i in hashtable) {
      console.log(i)
    }
  })
  return S.length
}

solution('eedaaadaaaaxxxtxxxjhuuu') //?
