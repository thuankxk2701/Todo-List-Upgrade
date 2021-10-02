import React, { useState } from 'react';
import InputTodo from './InputTodo';
function HeaderAdd({ onChange }) {
  const [updateTextParent, setUpdateTextParent] = useState('');
  const handleChange = (value) => {
    setUpdateTextParent(value);
  };
  const onTaskSubmit = (e) => {
    e.preventDefault();
    onChange(updateTextParent);
    setUpdateTextParent('');
  };
  return (
    <header>
      <form onSubmit={onTaskSubmit}>
        <h1>Things To Do</h1>
        <InputTodo value={updateTextParent} onChange={handleChange} />
      </form>
    </header>
  );
}

export default HeaderAdd;
