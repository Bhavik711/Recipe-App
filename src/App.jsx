import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";  // ✅ Correct default import

import AddRecipe from "./pages/AddRecipe";
import { Navbar } from "./pages/Navbar";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </>
  );
}

export default App;
