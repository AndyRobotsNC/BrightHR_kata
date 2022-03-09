import { useEffect, useState } from "react";
import FileInFolder from "./FileInFolder";

const SingleItem = ({ item }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {}, [clicked]);

  const handleClick = () => {
    setClicked((currState) => !currState);
  };

  return (
    <>
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
    </>
  );
};

export default SingleItem;
