import { useState } from "react";
import "../styles/AddRecipe.css"; 

function AddRecipe() {
  const [name, setName] = useState("");
  const [dishType, setDishType] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Recipe:", { name, dishType, ingredients, recipe });
  };

  return (
    <div className="add-recipe-container">
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Dish Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dish Type (e.g., Vegetarian, Non-Vegetarian, Dessert)"
          value={dishType}
          onChange={(e) => setDishType(e.target.value)}
        />
        <textarea
          placeholder="Ingredients (Separate with commas)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Recipe Instructions"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
