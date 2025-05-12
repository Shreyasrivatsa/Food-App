// import React from "react";
// import { Outlet } from "react-router-dom";
// import Nav from "./Nav";
// import Search from "./Search";

// const Layout = ({ food, setFood, handlePrev, handleNext }) => {
//   return (
//     <>
//       <Nav />
//       <div className="main-content" style={{ paddingTop: "100px" }}>
//         <Search food={food} setFood={setFood} />
//         <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
//           <button onClick={handlePrev}>Previous</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default Layout;



import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";

const Layout = ({ food, setFood, handlePrev, handleNext }) => {
  return (
    <>
      <Nav />
      <div className="main-content" style={{ paddingTop: "100px", paddingBottom: "150px" }}>
        <Search food={food} setFood={setFood} />
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Outlet />
        </div>
      </div>

      {/* Position the buttons at the extreme left and right of the screen */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",  // Place buttons at the bottom
          left: "0",  // Align the container to the left edge
          width: "100%",  // Make the container take full width
          display: "flex",
          justifyContent: "space-between",  // Space the buttons to the left and right
          padding: "0 20px",  // Add some padding to the left and right edges of the screen
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            padding: "10px",  // Make button bigger
            fontSize: "20px",  // Larger font for the arrow
            backgroundColor: "#333",  // Dark shade
            color: "#fff",  // White text
            border: "none",
            borderRadius: "4px",  // Slightly rounded corners for rectangle
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            width: "50px",  // Fixed width for square shape
            height: "50px",  // Fixed height for square shape
            display: "flex",
            alignItems: "center",
            justifyContent: "center",  // Center the arrow inside the button
          }}
        >
          &#8592;  {/* Left arrow symbol */}
        </button>

        <button
          onClick={handleNext}
          style={{
            padding: "10px",  // Make button bigger
            fontSize: "20px",  // Larger font for the arrow
            backgroundColor: "#333",  // Dark shade
            color: "#fff",  // White text
            border: "none",
            borderRadius: "4px",  // Slightly rounded corners for rectangle
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            width: "50px",  // Fixed width for square shape
            height: "50px",  // Fixed height for square shape
            display: "flex",
            alignItems: "center",
            justifyContent: "center",  // Center the arrow inside the button
          }}
        >
          &#8594;  {/* Right arrow symbol */}
        </button>
      </div>

      {/* Add a margin to the next component below the button */}
      <div style={{ marginBottom: "100px" }}></div>  {/* You can adjust the value as needed */}
    </>
  );
};

export default Layout;
