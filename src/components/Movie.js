import Rating from "./Rating";

const Movie = (props) => {
  const { title, description, posterUrl, rating } = props;

  return (
    <div className="movie_card">
      <img src={posterUrl} alt={title} className="poster" />
      <div className="movie_details">
        <h3>{title}</h3>
      </div>
      <div className="synopsis">
        <h3>Synopsis :</h3>
        <p>{description}</p>
        <h3>Rating :</h3>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default Movie;
