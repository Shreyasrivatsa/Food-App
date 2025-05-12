
import React, { useEffect, useState } from 'react';
import './fooddetails.css';
import ItemList from './ItemList';

const Fooddetails = ({ foodId }) => {
  const [foodd, setFoodd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_key = "d844807f1adf40e889c66a928f297b54";

  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${url}?apiKey=${API_key}`);
      const data = await res.json();
      console.log(data);
      setFoodd(data);
      setIsLoading(false);
    }
    fetchfood();
  }, [foodId]);

  return (
    <div>
      <div className='recipeCard'>
        <h3 className='recipeName'>{foodd.title}</h3>
        <img className='receipeImg' src={foodd.image} alt={foodd.title} />

        <div className='infoSection'>
          <span className='infoItem'>⏱️ {foodd.readyInMinutes} Minutes</span>
          <span className='infoItem'> ${(foodd.pricePerServing / 100).toFixed(2)} Per Serving</span>
        </div>

        <h3 className='sectionTitle'>🛒 Ingredients</h3>
        <ItemList foodd={foodd} isLoading={isLoading} />

        <h3 className='sectionTitle'>📖 Instructions</h3>
        <div className='recipeInstruction'>
          <ol>
            {isLoading ? <p>Loading.....</p> :
              foodd.analyzedInstructions[0]?.steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Fooddetails;
