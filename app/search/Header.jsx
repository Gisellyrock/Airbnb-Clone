'use client';
import { useState, useRef } from 'react';
import SearchBar from './components/SearchBar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useClickAway } from 'react-use';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  useClickAway(ref, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  const headerContainerClasses = clsx(
    'container',
    'mx-auto',
    'flex',
    'justify-between',
    'bg-white',
    'py-8',
    'z-50',
    {
      'h-[7.5rem]': !isExpanded,
      'h-[13rem]': isExpanded,
    },
  );

  const searchContainerClasses = clsx(
    'search-container',
    'flex',
    'flex-row',
    'rounded-full',
    'p-4',
    'justify-center',
    'items-center',
    'border',
    'drop-shadow-md',
    'bg-white',
    'w-auto',
    'self-center',
    {
      'border-b-0': !isExpanded,
      'border-b-8': isExpanded,
    },
  );

  const modalClasses = clsx(
    'absolute',
    'top-0',
    'left-0',
    'w-full',
    'h-full',
    'z-40',
    'bg-black',
    'bg-opacity-50',
    'transition-opacity duration-300 ease-in-out',
    {
      hidden: !isExpanded,
      block: isExpanded,
      'opacity-0': !isExpanded,
      'opacity-100': isExpanded,
    },
  );

  const userIconClasses = clsx('text-slate-600 flex', {
    'items-center': !isExpanded,
    'items-center': isExpanded,
  });

  const searchContainerVariants = {
    initial: {
      opacity: 1,
      height: 'auto',
      y: 0,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      height: 0,
      y: 100,
      scale: 2,
    },
    enter: {
      opacity: 1,
      height: 'auto',
      y: 0,
      scale: 1,
    },
  };

  const tabVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -100,
      scale: 0,
    },
    enter: {
      opacity: 1,
      height: 'auto',
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -100,
      scale: 0,
    },
  };

  return (
    <>
      <header ref={ref} className="flex border-b bg-white z-50 fixed w-full">
        <div className={headerContainerClasses}>
          <div className="text-red-500">
            <Image
              src="/images/airbnb.svg"
              height={50}
              width={172}
              alt="logo"
            />
          </div>
          <div className="flex flex-col grow">
            <motion.div
              className="flex flex-col justify-center"
              variants={tabVariants}
              initial="hidden"
              animate={isExpanded ? 'enter' : 'initial'}
              transition={{ type: 'linear' }}
            >
              <SearchBar toggleExpanded={toggleExpanded} />
            </motion.div>
            <motion.button
              inital="inital"
              animate={isExpanded ? 'hidden' : 'inital'}
              transition={{ type: 'linear' }}
              onClick={toggleExpanded}
              variants={searchContainerVariants}
              className={searchContainerClasses}
            >
              <div className="input flex items-center border-r px-4">
                <p>Anywhere</p>
              </div>
              <div className="input flex items-center border-r px-4">
                <p>Any Date</p>
              </div>
              <div className="input flex items-center border-r px-4">
                <p>Add Guests</p>
              </div>
              <div className="search-btn px-4 rounded-full bg-primary h-10 w-10 relative">
                <MagnifyingGlassIcon className="h-4 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.button>
          </div>
          <div className="text-slate-600 flex items-center">
            <Image src="/images/user.png" height={30} width={30} alt="User" />
          </div>
        </div>
      </header>
      <div className={modalClasses}></div>
    </>
  );
}
