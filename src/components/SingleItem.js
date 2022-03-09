const SingleItem = ({ item }) => {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div onClick={handleClick} className="single-item">
      <h3 data-testid="item-1">{item.name}</h3>
      <h4>Type: {item.type}</h4>
      <h4>Added: {item.added}</h4>
    </div>
  );
};

export default SingleItem;
