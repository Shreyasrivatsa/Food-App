import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const LayoutWrapper = ({ food, setFood, foodId, setFoodId }) => {
  const navigate = useNavigate();

  const handlePrev = () => {
    const prevId = parseInt(foodId) - 1;
    if (prevId > 0) {
      setFoodId(prevId.toString());
      navigate(`/recipe/${prevId}`);
    } 
  };

  const handleNext = () => {
    const nextId = parseInt(foodId) + 1;
    setFoodId(nextId.toString());
    navigate(`/recipe/${nextId}`);
  };

  return (
    <Layout
      food={food}
      setFood={setFood}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  );
};

export default LayoutWrapper;
