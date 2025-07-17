import React, { useState } from "react";

const StarReviews = () => {
  const [rating, setRating] = useState(0);

  const generateRandomRating = () => {
    const randomRating = Math.floor(Math.random() * 5) + 1;
    setRating(randomRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 4; i++) { // Use 5 stars
      stars.push(
        <span
          key={i}
          className={i <= rating ? "star filled" : "star"}
          role="img"
          aria-label="star"
        >
          ⭐
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <h2>Reviews</h2>
      
      <div className="rating">
        {renderStars()}
      </div>
    </div>
  );
};

export default StarReviews;

/*import React, { useState } from "react";

const StarReviews = () => {
  const [rating, setRating] = useState(0);

  const generateRandomRating = () => {
    const randomRating = Math.floor(Math.random() * 5) + 1;
    setRating(randomRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 4.5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "star filled" : "star"}
          role="img"
          aria-label="star"
        >
          ⭐
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <h2>Star Reviews Generator</h2>
      <div>
        <button onClick={generateRandomRating}>Review</button>
      </div>
      <div className="rating">
        {renderStars()}
      </div>
    </div>
  );
};

export default StarReviews;
*/