import React, {useState} from 'react'
import searchIcon from "../search-icon.png";
import "./searchBar.css";
import { SearchResults } from './SearchResults';

export const SearchBar = () => { 
    const [input, setInput] = useState("");
    const [mealNames, setMealNames] = useState([]);
    const [cuisine, setCuisine] = useState([]);
    const [imageURLS, setImageURLS] = useState([]);

    const fetchData = () => {
        var query = 'https://www.themealdb.com/api/json/v1/1/search.php?s='.concat(input)
        fetch(query)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((json) => {
            var data = json.meals || []; // if json.meals is empty then data is simply an empty array
            const names = [];
            const cuisines = [];
            const urls = [];

            for (let i = 0; i < data.length; i++){
                names.push(data[i].strMeal)
                cuisines.push(data[i].strArea)
                urls.push(data[i].strMealThumb)
            }
            setMealNames(names);
            setCuisine(cuisines);
            setImageURLS(urls);

            console.log(mealNames);
            console.log(cuisine);
            console.log(imageURLS);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    };

    const search = (value) => {
        fetchData(value)
    }
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            search()
        }
    }

    return (
        <div className='input-wrapper'>
            <img src={searchIcon} id="search-bar-icon" alt="lens" onClick={search}></img>
            <input placeholder="search for a dish..." 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            />

            <SearchResults mealNames={mealNames} cuisines={cuisine} imageURLS={imageURLS} />

        </div>
    )
}
