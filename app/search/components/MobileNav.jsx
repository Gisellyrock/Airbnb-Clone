import { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import CollapseCard from './CollapseCard';
import DestinationInput from './mobile/Destinationinput';

const MobileMenu = [
  { label: 'Where?', content: <DestinationInput /> },
  { label: 'When?' },
  { label: 'Who?' },
];

const MobileNav = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleCurrentUpdate = (tabIndex) => setCurrentTab(tabIndex);

  return (
    <div className="m-2">
      <label
        for="my_modal_7"
        className="w-full flex flex-row test-left rounded-full px-4 py-2 items-center gap-4 border drop-shadow-md bg-white"
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        <div>
          <h2 className="font-semibold text-md">Anywhere</h2>
          <div className="flex text-gray-500 flex-row">
            <span className="mr-2">Any week</span>
            <span className="mr-2">.</span>
            <span className="mr-2">Add Guests</span>
          </div>
        </div>
      </label>
      {/* { MODAL} */}
      <input type="checkbox" id="my_modal_7" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box">
          <label
            className="absolute right-0 top-0 mt-4 mr-4 btn-close"
            for="my_modal_7"
          >
            <XMarkIcon className="w-5 h-5 text-gray-400" />
          </label>
          <div className="mt-6">
            {MobileMenu.map((item, index) => (
              <CollapseCard
                title={item.label}
                updateTab={handleCurrentUpdate}
                isCurrent={currentTab == index}
                key={index}
                index={index}
              >
                <p>{item.content}</p>
              </CollapseCard>
            ))}
          </div>
          <div className="modal-footer">
            <div className="modal-footer-content flex p-4 justify-between items-center">
              <div className="underline">Clear All</div>
              <button className="bg-primary px-4 py-2 rounded-md text-white mr-2 flex justify-center items-center">
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
