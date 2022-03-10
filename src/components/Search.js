import { useState } from "react";

const Search = ({ setSearchResult }) => {
  const [searchBox, setSearchBox] = useState("");

  // function executed once submit has been pressed on search
  const handleSubmit = (event) => {
    setSearchResult(searchBox);
    setSearchBox("");
    event.preventDefault();
  };
  // updates the value of the search box whenever it changes
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchBox(value);
  };
  // search form
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
