const Movie = (props) => {
  const { title, description, posterUrl, rating } = props;

  return (
    <div className="movie_card">
      <img src={posterUrl} alt={title} className="poster" />
      <div className="movie_details">
        <h3>{title}</h3>
        <span
          className="rating"
          style={
            !rating
              ? {}
              : rating > 0 && rating < 50
              ? { backgroundColor: "red" }
              : rating > 50 && rating < 75
              ? { backgroundColor: "orange" }
              : { backgroundColor: "green" }
          }
        >
          {rating ? rating : "N/A"}
        </span>
      </div>
      <div className="synopsis">
        <h3>Synopsis :</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Movie;
