// import React from 'react'
// import Fooditem from './Fooditem';

// const FoodList = ({food,setFoodId}) => {
//   return (
//     <div>
//          {food.map((f)=>(
//          <Fooditem  key={f.id}  setFoodId={setFoodId} f={f}></Fooditem>
//         ) )}
      
//     </div>
//   )
// }

// export default FoodList;

import React from 'react';
import Fooditem from './Fooditem';
import './FoodList.css';

const FoodList = ({ food, setFoodId }) => {
  return (
    <div className='food-list'>
      {food.map((f) => (
        <Fooditem key={f.id} setFoodId={setFoodId} f={f} />
      ))}
    </div>
  );
};

export default FoodList;
