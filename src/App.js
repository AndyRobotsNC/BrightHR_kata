import "./App.css";
import Header from "./components/Header";
import AllFilesAndFolders from "./components/AllFilesAndFolders";
import SortBy from "./components/SortBy";
import Search from "./components/Search";
import { useState, useEffect } from "react";

function App() {
  const [sortBy, setSortBy] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {}, [sortBy, searchResult]);

  return (
    <div className="App">
      <Header />
      <SortBy setSortBy={setSortBy} />
      <Search setSearchResult={setSearchResult} />
      <AllFilesAndFolders
        sortBy={sortBy}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
    </div>
  );
}

export default App;
