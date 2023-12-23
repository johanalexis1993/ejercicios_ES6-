const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
function swap(arr, index1, index2) {
  index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length
    ? arr
    : null
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
  return arr
}
console.log(swap(fantasticFour, 1, 3))
