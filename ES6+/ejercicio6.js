const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const inputElement = document.getElementById('toFilter')
const streamerListElement = document.getElementById('streamerList')
inputElement.addEventListener('input', filterStreamers)
function filterStreamers() {
  const searchTerm = inputElement.value.toLowerCase()
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(searchTerm)
  )
  streamerListElement.innerHTML = ''
  filteredStreamers.forEach((streamer) => {
    const li = document.createElement('li')
    li.textContent = streamer.name
    streamerListElement.appendChild(li)
  })
}
