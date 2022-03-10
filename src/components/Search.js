import { useState } from "react";

const Search = ({ setSearchResult }) => {
  const [searchBox, setSearchBox] = useState("");

  const handleSubmit = (event) => {
    console.log(searchBox);
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
        <label>file search: </label>
        <input
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
