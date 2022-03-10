import { useState } from "react";

const Search = ({ setSearchResult }) => {
  const [searchBox, setSearchBox] = useState("");

  const handleSubmit = (event) => {
    setSearchResult(searchBox);
    setSearchBox("");
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchBox(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-search">file search: </label>
        <input
          id="file-search"
          className="searchBox"
          type="text"
          onChange={handleChange}
          value={searchBox}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
