

import React from 'react';
import './Fooditem.css';
import { useNavigate } from 'react-router-dom';

const Fooditem = ({ f, setFoodId }) => {
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    setFoodId(f.id); // Optional: If you still want to track the ID globally
    navigate(`/recipe/${f.id}`);
  };

  return (
    <div className="fooditem">
  <div className="fooditem-inner">
    <img className="img" src={f.image} alt="" />
    <div className="itemcontent">
      <p className="itemname">{f.title}</p>
    </div>
    <div className="btncontainer">
      <button onClick={handleViewRecipe} className="button">View Recipe</button>
    </div>
  </div>
</div>

  );
};

export default Fooditem;
