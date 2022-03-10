import jsonData from "./data/files.json";
import SingleItem from "./SingleItem";

const AllFilesAndFolders = ({ sortBy, searchResult }) => {
  //creating the name sorted array
  let nameSortedArr = [...jsonData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  //creating the size sorted array
  const singleFileArr = jsonData.filter((file) => {
    return !("files" in file);
  });
  const foldersArr = jsonData.filter((file) => {
    return "files" in file;
  });
  foldersArr.sort((a, b) => b.files.length - a.files.length);
  let sizeSortedArr = foldersArr.concat(singleFileArr);

  //creating the date sorted array
  let dateArr = jsonData.map((file) => {
    if (file.type !== "folder") {
      file.added = new Date(file.added);
    } else {
      file.files.forEach((item) => {
        item.added = new Date(item.added);
      });
    }
    return file;
  });
  const singleDateFileArr = dateArr.filter((file) => {
    return !("files" in file);
  });
  const dateFoldersArr = dateArr.filter((file) => {
    return "files" in file;
  });
  singleDateFileArr.sort((a, b) => b.added - a.added);
  let dateSortedArr = singleDateFileArr.concat(dateFoldersArr);
  dateSortedArr.forEach((file) => {
    if (file.type !== "folder") {
      file.added = file.added.toString().slice(3, 15);
    } else {
      file.files.forEach((item) => {
        item.added = item.added.toString().slice(3, 15);
      });
    }
  });

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
        ? dateSortedArr.map((item) => {
            return <SingleItem item={item} />;
          })
        : jsonData.map((item) => {
            if (searchResult === "") {
              return <SingleItem item={item} />;
            } else if (item.name === searchResult) {
              return <SingleItem item={item} />;
            }
          })}
    </div>
  );
};

export default AllFilesAndFolders;
