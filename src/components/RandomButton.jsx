import React, {useState} from 'react';
import './RandomButton.css';
import { SearchResults } from './SearchResults';

export const RandomButton = () => {
    const [mealNames, setMealNames] = useState([]);
    const [cuisine, setCuisine] = useState([]);
    const [imageURLS, setImageURLS] = useState([]);

    const searchRandom = () => {
        var query = 'https://www.themealdb.com/api/json/v1/1/random.php'
        fetch(query)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((json) => {
            var data = json.meals || [];
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
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    };
    
    return (
        <div>
            <button id="random-button" onClick={searchRandom}>
                Press for random dish
            </button>
            <SearchResults mealNames={mealNames} cuisines={cuisine} imageURLS={imageURLS} />
        </div>
    )
}
