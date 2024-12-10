import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const products = [
    {
      id: 1,
      name: "KeyStaxx Artisan Keyboard 1",
      type: "Mechanical",
      material: "Aluminum",
      switches: "Cherry MX Red",
      keyCaps: "PBT Keycaps",
      connection: "USB-C",
      manual: "To set up your KeyStaxx Artisan Keyboard 1, connect it via USB-C. For software installation, visit the KeyStaxx website for drivers and customization options.",
    },
    {
      id: 2,
      name: "KeyStaxx Mechanical Keyboard 2",
      type: "Mechanical",
      material: "Plastic",
      switches: "Gateron Blue",
      keyCaps: "ABS Keycaps",
      connection: "Wired USB",
      manual: "Connect your KeyStaxx Mechanical Keyboard 2 using the wired USB connector. For advanced features, download the setup guide from our support page.",
    },
    // Add the remaining products...
  ];

  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  // State for storing the reviews
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState(""); // State for the new review input

  const handleReviewChange = (event) => {
    setNewReview(event.target.value); // Update the input field value
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (newReview.trim()) {
      setReviews([...reviews, newReview.trim()]); // Add the new review to the reviews array
      setNewReview(""); // Clear the input field after submission
    }
  };

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <h3>Specifications:</h3>
      <ul>
        <li><strong>Type:</strong> {product.type}</li>
        <li><strong>Material:</strong> {product.material}</li>
        <li><strong>Switches:</strong> {product.switches}</li>
        <li><strong>Key Caps:</strong> {product.keyCaps}</li>
        <li><strong>Connection:</strong> {product.connection}</li>
      </ul>
      <h4>Manual:</h4>
      <p>{product.manual}</p>

      {/* Review Form */}
      <div>
        <h4>Write a Review:</h4>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            value={newReview}
            onChange={handleReviewChange}
            placeholder="Write your review here..."
            rows="4"
            cols="50"
          />
          <br />
          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* Display Reviews */}
      <div>
        <h4>Reviews:</h4>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet. Be the first to write one!</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;