import Movie from "./Movie";

const MovieList = ({ list }) => {
  return (
    <div className="movie_list">
      {list.map((movie) => (
        <Movie
          title={movie.title}
          description={movie.description}
          rating={movie.rating}
          posterUrl={movie.posterUrl}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieList;
