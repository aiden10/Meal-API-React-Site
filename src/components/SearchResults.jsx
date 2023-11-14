import React from "react";

export const SearchResults = ({ mealNames, cuisines, imageURLS }) => {
  let results = null;
  
  if (mealNames) {
    results = (
      <div id="results-container">
        {mealNames.map((mealName, index) => (
          <div key={index} className="cell">
            <h2>{mealName}</h2>
            <h3>Cuisine: {cuisines[index]}</h3>
            <img src={imageURLS[index]} alt={mealName} width="400" height="400" />
          </div>
        ))}
      </div>
    );
  }

  return results;
};

/*
<div> 
    {mealNames.map((mealName, index) => ( doing something to each individual mealName, index for accessing the info of each meal
        <div> storing each meal's data in an individual div
            <p>Name: {mealName}</p> each div has the name
            <p>Cuisine: {cuisines[index]}</p> kind of cuisine 
            <img src={imageURLS[index]} alt={mealName} /> an image of the dish
        </div>
    ))}
</div>
*/