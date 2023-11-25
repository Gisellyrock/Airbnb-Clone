'use client';
import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/solid';

const InfoCard = ({ listing }) => {
  return (
    <div>
      <img src={listing.image} alt={listing.name} />
      <div className="p-4">
        <div>
          <h3>{listing.name}</h3>
          <div>
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <span>{listing.rating}</span>
          </div>
        </div>
        <p>{listing.description}</p>
        <button>
          <HeartIcon />
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
