const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const names = users.map((user) => user.name)
console.log(names)
const names2 = users.map((user) =>
  user.name.includes('A') ? 'Anacleto' : user.name
)
console.log(names2)
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
const visitedCities = cities.map((city) =>
  city.isVisited ? city.name + 'Visitado' : city.name
)
console.log(visitedCities)
