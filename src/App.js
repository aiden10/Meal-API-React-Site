import { SearchBar } from "./components/searchBar";
import { RandomButton } from "./components/RandomButton";
import { SearchResults } from "./components/SearchResults";

function App() {
  return (
    <div className="mealAPI">
      <span id="header">
        <h1>Search for a meal or ingredient</h1>
      </span>

      <RandomButton/>

      <div className="search-bar-container">
        <SearchBar/>
      </div>
      <div className="results-container">    
        <SearchResults/>
      </div>
    </div>
  );
}

export default App;
