import React, { useState, useEffect } from 'react';
import './App.css';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');

    useEffect(() => {
        const storedReviews = localStorage.getItem('reviews');
        if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
        }
    });

    const handleReviewSubmit = () => {
        const newReviewWithDate = {
        text: newReview,
        date: new Date().toLocaleString(),
        };
        setReviews([...reviews, newReviewWithDate]);
        localStorage.setItem('reviews', JSON.stringify([...reviews, newReviewWithDate]));
        setNewReview('');
    };

    return (
        <div className="container">
        <h2>Game Reviews</h2>
        <div className="review-form">
            <input type="text" placeholder="Add a new review" value={newReview} onChange={(e) => setNewReview(e.target.value)}/>
            <button onClick={handleReviewSubmit}>Add Review</button>
        </div>
        
        <ul className="review-list">
            {reviews.map((review, index) => (
            <li className="review-item" key={index}>
                {review.text} - {review.date}
            </li>
            ))}
        </ul>
        </div>
    );
}