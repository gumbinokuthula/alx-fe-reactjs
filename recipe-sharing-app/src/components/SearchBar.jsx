import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        fontSize: '16px',
        width: '100%',
        marginBottom: '20px',
        borderRadius: '8px',
        border: '1px solid #ccc'
      }}
    />
  );
};

export default SearchBar;
