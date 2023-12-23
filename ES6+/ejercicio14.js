/*Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.*/
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
const removeItem = (array, text) => {
  const index = findArrayIndex(array, text)
  index !== -1 ? array.splice(index, 1) : null
  return array
}
console.log(removeItem(mainCharacters, 'Luke'))
