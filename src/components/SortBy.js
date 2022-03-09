const SortBy = ({ setSortBy }) => {
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <label for="sort-by">Sort By: </label>
      <select name="sort-by" id="sort-by" onChange={handleChange}>
        <option vaule="default">default</option>
        <option value="name">name</option>
        <option value="size">size</option>
        <option value="date">date</option>
      </select>
    </div>
  );
};

export default SortBy;
