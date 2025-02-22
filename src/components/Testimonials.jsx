import React from "react";
import "../styles/testimonials.css"; 

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    review: "The chocolate cake recipe was absolutely delicious! My family loved it. ",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Smith",
    review: "Loved the spaghetti bolognese! So easy to follow and tasted amazing.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Lee",
    review: "The pancake recipe made my morning special. Thank you! ",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="review">"{testimonial.review}"</p>
            <p className="user">- {testimonial.name}</p>
            <p className="rating">⭐ {testimonial.rating}/5</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
