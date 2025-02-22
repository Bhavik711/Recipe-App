import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials"; 

function Home() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "Delicious Italian pasta.",
      image: "/images/s2.jpg",
    },
    {
      id: 2,
      title: "Chocolate Cake",
      description: "Rich and moist chocolate cake.",
      image: "/images/c2.jpg",
    },
    {
      id: 3,
      title: "Grilled Chicken Salad",
      description: "A healthy mix of grilled chicken and fresh veggies.",
      image: "/images/g2.jpg",
    },
    {
      id: 4,
      title: "Fluffy Pancakes",
      description: "Soft and buttery pancakes with maple syrup.",
      image: "/images/p3.jpg",
    },
  ];

  return (
    <div className="home-container">
      
      <div className="carousel-container">
        <Slider {...sliderSettings} className="background-slider">
          <div>
            <img src="/images/cook4.jpg" alt="Background 1" className="slider-image" />
          </div>
          <div>
            <img src="/images/cook5.jpg" alt="Background 2" className="slider-image" />
          </div>
          <div>
            <img src="/images/cook3.jpg" alt="Background 3" className="slider-image" />
          </div>
        </Slider>

        
        <div className="carousel-overlay">
          <h1 className="homeTitle">From Kitchen to Community – Share Your Best Recipes</h1>
          <h2 className="title">If you’re ready to change your relationship with food for the better</h2>
        </div>
      </div>

      <section className="recipes-section">
        <h2 className="section-title">Explore Our Recipes</h2>
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe-button">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </section>

     
      <Testimonials />
    </div>
  );
}

export default Home;
