import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

const MobileMenu = [{ label: 'Where?' }, { label: 'When?' }, { label: 'Who?' }];

const MobileNav = () => {
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
          <h3 class="text-lg font-bold">Hello!</h3>
          <p class="py-4">This modal works with a hidden checkbox!</p>
          <label
            className="absolute right-0 top-0 mt-4 mr-4 btn-close"
            for="my_modal_7"
          >
            <XMarkIcon className="w-5 h-5 text-gray-400" />
          </label>
          <div className="mt-6">
            {MobileMenu.map((item, index) => (
              <p key={index}>{item.label}</p>
            ))}
          </div>
          <div className="modal-footer">
            <div className="modal-footer-content">
              <div>Clear All</div>
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
