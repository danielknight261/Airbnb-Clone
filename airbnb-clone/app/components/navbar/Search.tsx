'use client'
import {BiSearch} from 'react-icons/bi'

// This component renders a search bar with text and icons
const Search = () => {
  return (
    // The search bar is contained within a div with various styles
    <div
      className="
    border-[1px]
    w-full
    md:w-auto
    py-2
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
    ">
      {/* The search bar has three main sections */}
      <div className="flex flex-row items-center justify-between">
        {/* The first section displays the text 'Search Anywhere' */}
        <div className="text-sm font-semibold px-6">
          Search Anywhere
        </div>
        {/* The second section displays the text 'Any Week', and is hidden on small screens */}
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any Week
        </div>
        {/* The third section allows users to add guests and includes a search icon */}
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          {/* The search icon is contained within a div with a colored background */}
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
