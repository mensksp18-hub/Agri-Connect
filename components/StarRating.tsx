
import React from 'react';
import { StarIcon } from './Icons';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <StarIcon
            key={index}
            className={`h-5 w-5 ${
              starValue <= rating ? 'text-benin-yellow' : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        );
      })}
    </div>
  );
};
