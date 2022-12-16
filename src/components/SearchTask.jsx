import React from 'react';

const SearchTask = ({ search, setSearch }) => (
  <form className='searchForm' onSubmit={(e) => e.preventDefault}>
    <label htmlFor='search'>Search</label>
    <input
      id='search'
      type='text'
      role='searchbox'
      placeholder='Search Task'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </form>
);

export default SearchTask;
