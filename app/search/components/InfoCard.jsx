'use client';
import { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/solid';
import { motion, useAnimation } from 'framer-motion';
import { useReward } from 'react-rewards';

const rewardConfigs = {
  lifetime: 22,
  angle: 194,
  decay: 0.07,
  spread: 360,
  startVelocity: 41,
  elementCount: 23,
  elementSize: 5,
};

const InfoCard = ({ listing }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const controls = useAnimation();
  const { reward, isAnimating } = useReward(
    `reward_${listing.id}`,
    'confetti',
    rewardConfigs,
  );
  let timeoutId;

  useEffect(() => {
    if (isFavorite) {
      controls.start({ scale: [0, 1] });
      timeoutId = setTimeout(() => reward(), 500);
    } else {
      controls.start({ scale: [1, 0] });
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isFavorite, controls]);

  const handleFavoriteUpdate = () => {
    setIsFavorite((prevIsFavorite) => {
      if (!prevIsFavorite) {
        controls.start({ scale: [0, 1] });
        timeoutId = setTimeout(() => reward(), 500);
      } else {
        controls.start({ scale: [1, 0] });
      }
      return !prevIsFavorite;
    });
  };

  return (
    <div className="md:max-w-md mx-auto shadow-md rounded-lg overflow-hidden relative">
      <img
        src={listing.image}
        alt={listing.name}
        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold mb-2">{listing.name}</h3>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-500 mr-1" />
            <span className="text-gray-800">{listing.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{listing.description}</p>
        <button
          onClick={handleFavoriteUpdate}
          className="absolute bottom-4 right-4 p-2 z-30"
        >
          <span id={`reward_${listing.id}`}>
            {isFavorite ? (
              <FilledHeartIcon className="w-5 h-5 text-primary" />
            ) : (
              <HeartIcon className="w-5 h-5 text-primary" />
            )}
          </span>
        </button>
        <motion.div
          animate={controls}
          className="absolute bottom-4 right-4 p-2 z-30"
        >
          <FilledHeartIcon className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
    </div>
  );
};

export default InfoCard;
