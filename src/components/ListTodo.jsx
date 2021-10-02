import React from 'react';
import TodoItem from './TodoItem';
function ListTodo({ todoLists, onChange }) {
  const handleChange = (value) => {
    onChange(value);
  };
  return (
    <ul className='list-unstyled'>
      {todoLists.map((item) => (
        <TodoItem key={item.id} todoList={item} onChange={handleChange} />
      ))}
    </ul>
  );
}

export default ListTodo;
