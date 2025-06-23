import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search shoes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ marginBottom: 20, padding: 8, width: '200px' }}
    />
  );
}

export default SearchBar;
