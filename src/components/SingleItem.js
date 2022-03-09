const SingleItem = ({ item }) => {
  return (
    <div className="single-item">
      <h3 data-testid="item-1">Name: {item.name}</h3>
      <h4>Type: {item.type}</h4>
      <h4>Added: {item.added}</h4>
    </div>
  );
};

export default SingleItem;
