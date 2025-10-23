import './App.css'

function App() {
  const movies = [
    {
      id: 1,
      title: "Telusu Kadha",
      rating: 9,
      location: "Bangalore",
      icon: "🎬"
    },
    {
      id: 2,
      title: "Kantara",
      rating: 10,
      location: "Hyderabad",
      icon: "🔥"
    },
    {
      id: 3,
      title: "OG",
      rating: 8,
      location: "Vizag",
      icon: "💪"
    },
    {
      id: 4,
      title: "K-Ramp",
      rating: 8.5,
      location: "Guntur",
      icon: "💪"
    },
    {
      id: 5,
      title: "Mitramandali",
      rating: 7,
      location: "Vijayawada",
      icon: "💪"
    }
  ];

  return (
    <>
      <h1>🎬 Recommended Movies </h1>
      <div className='container'>
        {movies.map(movie => (
          <div className='movie-div'>
            <p className='icon'>{movie.icon}</p>
            <h3 className='margin title'>{movie.title}</h3>
            <p className='margin'>⭐ Rating: {movie.rating}</p>
            <p className='margin'>📍 {movie.location}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default App
