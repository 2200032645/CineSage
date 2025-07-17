import React from "react";

const Bar = () => {
  const movies = [
    { title: "Movie at time of release", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "After one year", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "After two years", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "After three years", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "After four years", rating: Math.floor(Math.random() * 10) + 1 },
  ];

  const maxRating = Math.max(...movies.map((movie) => movie.rating));

  // Define an array of colors for the bars
  const colors = ["#FF6F61", "#6B4226", "#62BEC1", "#FFD700", "#D1A4A5"];

  return (
    <div className="bar-container">
      <h2>Movie Bar Graph according to the viewers in every year</h2>
      <div className="bar-graph vertical">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bar"
            style={{
              width: `${(movie.rating / maxRating) * 250}px`,
              backgroundColor: colors[index % colors.length], // Assign a color based on the index
            }}
          >
            <span className="bar-title">{movie.title}</span>
            <span className="bar-rating">{movie.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;




/*import React from "react";

const Bar = () => {
  const movies = [
    { title: "Movie at time of release", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "Movie after one years", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "Movie after two years", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "Movie after three years", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "Movie after four years", rating: Math.floor(Math.random() * 10) + 1 },
  ];

  const maxRating = Math.max(...movies.map((movie) => movie.rating));

  // Define an array of colors for the bars
  const colors = ["red", "blue", "green", "orange", "purple"];

  return (
    <div>
      <h2>Movie Bar Graph according to the viewers in every year</h2>
      <div className="bar-graph">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${(movie.rating / maxRating) * 200}px`,
              backgroundColor: colors[index % colors.length], // Assign a color based on the index
            }}
          >
            {movie.title} ({movie.rating})
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;*/

/*import React from "react";

const Bar = () => {
  // Generate random movie data
  const movies = [
    { title: "Movie A", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "Movie B", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "Movie C", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "Movie D", rating: Math.floor(Math.random() * 10) + 1 },
    { title: "Movie E", rating: Math.floor(Math.random() * 10) + 1 },
  ];

  // Calculate the maximum rating for scaling the bars
  const maxRating = Math.max(...movies.map((movie) => movie.rating));

  return (
    <div>
      <h2>Random Movie Bar Graph</h2>
      <div className="bar-graph">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${(movie.rating / maxRating) * 200}px`,
            }}
          >
            {movie.title} ({movie.rating})
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
*/