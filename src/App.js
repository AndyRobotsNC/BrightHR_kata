import "./App.css";
import Header from "./components/Header";
import AllFilesAndFolders from "./components/AllFilesAndFolders";
import SortBy from "./components/SortBy";
import { useState, useEffect } from "react";

function App() {
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {}, [sortBy]);

  console.log(sortBy);
  return (
    <div className="App">
      <Header />
      <SortBy setSortBy={setSortBy} />
      <AllFilesAndFolders sortBy={sortBy} />
    </div>
  );
}

export default App;
