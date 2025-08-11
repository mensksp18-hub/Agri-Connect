
import React from 'react';
import { Link } from 'react-router-dom';
import { Producer } from '../types';
import { StarRating } from './StarRating';

interface ProducerCardProps {
  producer: Producer;
}

export const ProducerCard: React.FC<ProducerCardProps> = ({ producer }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center p-6 hover:shadow-xl transition-shadow duration-300">
      <Link to={`/producer/${producer.id}`}>
        <img className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-benin-yellow" src={producer.profileImage} alt={producer.name} />
      </Link>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
        <Link to={`/producer/${producer.id}`}>{producer.name}</Link>
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{producer.location}</p>
      <div className="flex justify-center my-2">
        <StarRating rating={producer.rating} />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        Spécialités: {producer.specialties.join(', ')}
      </p>
      <Link
        to={`/producer/${producer.id}`}
        className="mt-4 inline-block bg-transparent border border-benin-green text-benin-green py-2 px-4 rounded-md hover:bg-benin-green hover:text-white transition-colors"
      >
        Voir le profil
      </Link>
    </div>
  );
};
