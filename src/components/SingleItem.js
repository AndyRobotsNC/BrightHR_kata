import { useEffect, useState } from "react";
import FileInFolder from "./FileInFolder";

const SingleItem = ({ item }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {}, [clicked]);

  // gives ability to toggle the folder open and closed
  const handleClick = () => {
    setClicked((currState) => !currState);
  };
  // if the item is a folder then render folder with the ability to toggle clicking it open and closed
  return (
    <div data-testid="rendered-item">
      {item.type === "folder" ? (
        <>
          <div onClick={handleClick} data-testid="folder-1" className="folder">
            <h3>{item.name}</h3>
            <h4>Type: {item.type}</h4>
          </div>
          {clicked &&
            item.files.map((file) => {
              return <FileInFolder file={file} />;
            })}
        </>
      ) : (
        <div className="single-item">
          <h3 data-testid="item-1">{item.name}</h3>
          <h4>Type: {item.type}</h4>
          <h4>Added: {item.added}</h4>
        </div>
      )}
    </div>
  );
};

export default SingleItem;
