import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
// import { words } from '../lib/data';

const Searchbar = () => {
  const [input, setInput] = useState([]);
  const [activeSearch, setActiveSearch] = useState([]);

  const fetchData = (value) => {
    fetch("http://localhost:5173/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };

  const handlechange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <form className='max-w-screen-md mx-auto -translate-y-100 '>
      <div className='relative ml-10 sm:mb-2 '>
        <input
          type='search'
          placeholder='Type Here'
          className='w-50% p-2 sm:p-2 rounded-full bg-slate-800'
          onChange={(e) => handlechange(e.target.value)}
        />

        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-2 sm:p-2 bg-white rounded-full'>
          <AiOutlineSearch />
        </button>
      </div>
      {activeSearch.length > 0 && (
        <div className='absolute top-20 p-2 sm:p-2 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
          {activeSearch.map((s, index) => (
            <span key={index}>{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;