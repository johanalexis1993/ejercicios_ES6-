const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]
let movieCategories = []
for (movie of movies) {
  for (categoria of movie.categories) {
    if (!movieCategories.includes(movie.categories)) {
      if (!movieCategories.includes(categoria)) {
        movieCategories.push(categoria)
      }
    }
  }
}
console.log(movieCategories)
