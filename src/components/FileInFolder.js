const FileInFolder = ({ file }) => {
  //displays file in the folder information
  return (
    <div className="single-folder-item" data-testid="rendered-folder-item">
      <h3>{file.name}</h3>
      <h4>Type: {file.type}</h4>
      <h4>Added: {file.added}</h4>
    </div>
  );
};

export default FileInFolder;
