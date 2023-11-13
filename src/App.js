import { SearchBar } from "./components/searchBar";
import { SearchResults } from "./components/SearchResults";

function App() {
  return (
    <div className="mealAPI">
      <span id="header">
        <h1>Search for a meal or ingredient</h1>
      </span>

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
