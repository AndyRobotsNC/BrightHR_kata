import jsonData from "./data/files.json";
import SingleItem from "./SingleItem";

const AllFilesAndFolders = () => {
  return (
    <div className="container">
      {jsonData.map((item) => {
        return <SingleItem item={item} />;
      })}
    </div>
  );
};

export default AllFilesAndFolders;
