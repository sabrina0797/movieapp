import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const [userRating, setUserRating] = useState(rating);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={userRating}
              onClick={() => setUserRating(ratingValue)}
            />
            <FaStar
              className="star"
              size={24}
              color={ratingValue <= userRating ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
