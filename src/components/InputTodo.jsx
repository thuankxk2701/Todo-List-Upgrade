import React, { useState, useEffect } from 'react';

function InputTodo({ value, onChange }) {
  const isControlled = value !== undefined;
  const [text, setText] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    if (isControlled) onChange(value);
  };
  useEffect(() => {
    if (!isControlled) return;
    setText(value);
  }, [isControlled, value]);
  return (
    <input
      type='text'
      value={text}
      placeholder='Add Text'
      onChange={handleChange}
      className='form-control add-todo'
    />
  );
}

export default InputTodo;
