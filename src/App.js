import "./App.css";
import Header from "./components/Header";
import FilesAndFolders from "./components/data/files.json";

function App() {
  console.log(FilesAndFolders);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
