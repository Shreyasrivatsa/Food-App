import React, { useEffect } from 'react'
import { useState } from 'react';
import './search.css';

const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_key="d844807f1adf40e889c66a928f297b54"


const Search = ({food,setFood}) => {
    const [query,setQuery]=useState("pizza");
   
    useEffect(()=>{
        async function fetchFood(){
            //https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=d844807f1adf40e889c66a928f297b54
          const res= await fetch(`${URL}?query=${query}&apiKey=${API_key}`);
          const data= await res.json();
          console.log(data.results);
          setFood(data.results);
        }
        fetchFood();
    },[query])

  return (
    <div className='searchcontainer'>
        <input className='input' onChange={(e)=>setQuery(e.target.value)} value={query} type="text" />
      
    </div>
  )
}

export default Search;
