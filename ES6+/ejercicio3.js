const pointsList = [32, 54, 21, 64, 75, 43]
const nums = [...pointsList]
console.log(nums)
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toys = { ...toy }
console.log(toys)
const numsList = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]
const newArray = [...numsList, ...pointsLis2]
console.log(newArray)
const toy2 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const updatedToy = { ...toy2, ...toyUpdate }
console.log(updatedToy)
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const newColors = [...colors]
newColors.splice(1, 1)
console.log(newColors)
