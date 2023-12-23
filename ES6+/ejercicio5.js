const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const ageOfLegal = ages.filter((age) => age >= 18)
console.log(ageOfLegal)
const evenNumbers = ages.filter((age) => age % 2 === 0)
console.log(evenNumbers)
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const newsGames = streamers.filter((streamer) => streamer.name.includes('u'))
console.log(newsGames)
const newsGames2 = streamers.filter((streamer) =>
  streamer.gameMorePlayed.includes('Legends') && streamer.age > 18
    ? streamer.gameMorePlayed.toUpperCase()
    : streamer.gameMorePlayed
)
console.log(newsGames2)
/*este ultimo ejercicio no pude dar lo que me pidieron y no se conporta como esperaba intente todo pero no fui capaz*/
