const Filter = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="filter">
      <input
        type="search"
        name="filterMovies"
        id="filter-movies"
        placeholder="Search movies.."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Filter;
