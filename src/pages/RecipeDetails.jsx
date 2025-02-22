import { useParams } from "react-router-dom";
import "../styles/Recipe.css";

const recipes = [
  {
    id: "1",
    title: "Spaghetti Bolognese",
    ingredients: [
      "200g spaghetti",
      "100g minced beef",
      "1/2 cup tomato sauce",
      "1 clove garlic",
      "Salt & pepper to taste"
    ],
    steps: [
      "Boil spaghetti until tender.",
      "Sauté minced beef and garlic.",
      "Add tomato sauce and seasonings.",
      "Mix spaghetti with sauce and serve hot."
    ],
    image: "/images/s2.jpg",
  },
  {
    id: "2",
    title: "Chocolate Cake",
    ingredients: [
      "1 cup flour",
      "1/2 cup cocoa powder",
      "1 cup sugar",
      "2 eggs",
      "1/2 cup milk"
    ],
    steps: [
      "Mix flour, cocoa powder, and sugar.",
      "Add eggs and milk; whisk until smooth.",
      "Pour into a baking tray and bake at 180°C for 30 minutes.",
      "Let cool before serving."
    ],
    image: "/images/c2.jpg",
  },
  {
    id: "3",
    title: "Grilled Chicken Salad",
    ingredients: [
      "200g grilled chicken breast",
      "1 cup lettuce",
      "1/2 cup cherry tomatoes",
      "1/4 cup sliced cucumber",
      "2 tbsp olive oil",
      "Salt & pepper to taste"
    ],
    steps: [
      "Grill the chicken breast until cooked through.",
      "Chop lettuce, cherry tomatoes, and cucumber.",
      "Slice grilled chicken into strips.",
      "Toss all ingredients together with olive oil, salt, and pepper.",
      "Serve fresh."
    ],
    image: "/images/g2.jpg",
  },
  {
    id: "4",
    title: "Fluffy Pancakes",
    ingredients: [
      "1 cup all-purpose flour",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "1/2 tsp baking soda",
      "1 cup buttermilk",
      "1 egg",
      "2 tbsp melted butter"
    ],
    steps: [
      "Whisk together flour, sugar, baking powder, and baking soda.",
      "In another bowl, mix buttermilk, egg, and melted butter.",
      "Combine wet and dry ingredients; mix until just combined.",
      "Heat a pan and pour batter to form pancakes.",
      "Cook until bubbles appear, then flip and cook until golden brown.",
      "Serve with syrup and butter."
    ],
    image: "/images/p3.jpg",
  },
];

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <h1>Recipe not found! 😢</h1>;
  }

  return (
    <div className="recipe-details-container">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-section">
        <h2>🛒 Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-section">
        <h2>📜 Steps</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetails;
