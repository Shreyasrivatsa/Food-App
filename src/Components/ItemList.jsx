

import React from 'react';
import './itemlist.css';
import { FormatFraction } from './utils/FormatFraction'; 

const ItemList = ({ foodd, isLoading }) => {
  return (
    <div className='itemcontainer'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        foodd.extendedIngredients.map((item, index) => (
          <div className='ingredientItem' key={index}>
            {FormatFraction(item.original)} 
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;

