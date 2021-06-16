import { useInput } from "../hooks/input-hook";
import Rating from "./Rating";

const Addmovie = ({ movies, handleAddMovie, setwrapperClass }) => {
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");
  const {
    value: synopsis,
    bind: bindSynopsis,
    reset: resetSynopsis,
  } = useInput("");
  const {
    value: posterUrl,
    bind: bindPosterUrl,
    reset: resetPosterUrl,
  } = useInput("");
  const { value: rating, bind: bindRating, reset: resetRating } = useInput("");
  const id = movies.length + 1;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(id, title, synopsis, posterUrl, rating);
    // handleAddMovie(id, title, synopsis, posterUrl, rating);
    resetTitle();
    resetSynopsis();
    resetPosterUrl();
    resetRating();
    setwrapperClass("");
  };

  return (
    <form onSubmit={handleSubmit} className="addMovie_form">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter the show title..."
        {...bindTitle}
      />
      <label htmlFor="synopsis">Synopsis</label>
      <textarea
        id="synopsis"
        name="synopsis"
        placeholder="Write the synopsis.."
        {...bindSynopsis}
      />
      <label htmlFor="poster">Poster Url</label>
      <input
        type="text"
        id="posterUrl"
        name="posterUrl"
        placeholder="Insert the poster link..."
        {...bindPosterUrl}
      />
      <label htmlFor="rating">Rating</label>
      <br />
      <Rating {...bindRating} />

      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Addmovie;
