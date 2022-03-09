import jsonData from "./data/files.json";
import SingleItem from "./SingleItem";

const AllFilesAndFolders = ({ sortBy }) => {
  let nameSortedArr = [];
  let sizeSortedArr = [];

  switch (sortBy) {
    case "name":
      nameSortedArr = [...jsonData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;
    case "size":
      const singleFileArr = jsonData.filter((file) => {
        return !("files" in file);
      });
      const foldersArr = jsonData.filter((file) => {
        return "files" in file;
      });
      foldersArr.sort((a, b) => b.files.length - a.files.length);
      sizeSortedArr = foldersArr.concat(singleFileArr);
      break;
    case "date":
      break;
    default:
  }
  console.log(jsonData);
  return (
    <div className="container">
      {sortBy === "name"
        ? nameSortedArr.map((item) => {
            return <SingleItem item={item} />;
          })
        : sortBy === "size"
        ? sizeSortedArr.map((item) => {
            return <SingleItem item={item} />;
          })
        : sortBy === "date"
        ? jsonData.map((item) => {
            return <SingleItem item={item} />;
          })
        : jsonData.map((item) => {
            return <SingleItem item={item} />;
          })}
    </div>
  );
};

export default AllFilesAndFolders;
