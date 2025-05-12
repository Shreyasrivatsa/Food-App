

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Outlet,
} from "react-router-dom";

import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Container from "./Components/Container";
import Innercontainer from "./Components/Innercontainer";
import FoodList from "./Components/FoodList";
import Fooddetails from "./Components/Fooddetails";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Layout from "./Components/Layout";
import LayoutWrapper from "./Components/LayoutWrapper";


// Page to show a single recipe
const RecipePage = () => {
  const { id } = useParams();
  return <Fooddetails foodId={id} />;
};

function App() {
  const [food, setFood] = useState([]);
  const [foodId, setFoodId] = useState("664282");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsSignup={setIsSignup} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<SignUp setIsSignup={setIsSignup} setIsLoggedIn={setIsLoggedIn} />}
        />
        {isLoggedIn ? (
          <Route
            path="/"
            element={
              <LayoutWrapper
                food={food}
                setFood={setFood}
                foodId={foodId}
                setFoodId={setFoodId}
              />
            }
          >
            <Route
              index
              element={
                <Container>
                  <Innercontainer>
                    <FoodList setFoodId={setFoodId} food={food} />
                  </Innercontainer>
                  <Innercontainer>
                    <Fooddetails foodId={foodId} />
                  </Innercontainer>
                </Container>
              }
            />
            <Route path="recipe/:id" element={<RecipePage />} />
          </Route>
        ) : isSignup ? (
          <Route
            path="/"
            element={<SignUp setIsSignup={setIsSignup} setIsLoggedIn={setIsLoggedIn} />}
          />
        ) : (
          <Route
            path="/"
            element={<Login setIsSignup={setIsSignup} setIsLoggedIn={setIsLoggedIn} />}
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
