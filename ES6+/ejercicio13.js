const findArrayIndex = (array, text) => {
  return array.indexOf(text)
}
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
console.log(findArrayIndex(mainCharacters, 'Chewbacca'))
