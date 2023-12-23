function rollDice(numCaras) {
  return Math.floor(Math.random() * numCaras) + 1
}
const resultadoTirada = rollDice(6)
console.log(`Resultado de la tirada: ${resultadoTirada}`)
