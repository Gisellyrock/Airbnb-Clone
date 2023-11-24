import { useState } from 'react';

const SearchBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="flex flex-row self-center rounded-full border p-2 mt-8 w-3/4">
      <button onClick={() => setIsSearchFocused(true)}>
        <p className="font-bold">Where</p>
        {isSearchFocused ? (
          <input
            type="text"
            placeholder="Search destinations"
            className="text-slate-800 bg-transparent border-none outline-none"
          />
        ) : (
          <p className="text-slate-600">Search destinations</p>
        )}
      </button>
      <div className="dropdown dropdwn-end px-4 border-r">
        <label tabIndex={1}>
          <p className="font-bold">Dates</p>
          <p className="text-slate-600">Select Ranged</p>
        </label>
        <div
          tabIndex={1}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <p>Range Selecter</p>
        </div>
      </div>
      <div className="dropdown dropdown-end px-4">
        <label tabIndex={2}>
          <p className="font-bold">Who</p>
          <p className="font-bold">Add Guests</p>
        </label>
        <div
          tabIndex={2}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <p>Counter</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
