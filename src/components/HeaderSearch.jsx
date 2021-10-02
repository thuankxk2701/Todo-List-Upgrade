import React, { useState, useRef } from 'react';

function HeaderSearch({ onSubmit }) {
  const [searchItem, setSearchItem] = useState('');
  const typingTimeoutRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchItem(value);
    if (!onSubmit) return;
    if (typingTimeoutRef) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      onSubmit(value);
    }, 500);
  };
  const handleTaskSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header>
      <form onSubmit={handleTaskSubmit}>
        <h1>Things To Do</h1>
        <input
          type='text'
          value={searchItem}
          placeholder='Search'
          onChange={handleChange}
          className='form-control add-todo'
        />
      </form>
    </header>
  );
}

export default HeaderSearch;
