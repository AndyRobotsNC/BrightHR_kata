const SortBy = ({ setSortBy }) => {
  // set the state of the sort by whenever it is changed
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  // render the sort by dropdown
  return (
    <div>
      <label htmlFor="sort-by">Sort By: </label>
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
