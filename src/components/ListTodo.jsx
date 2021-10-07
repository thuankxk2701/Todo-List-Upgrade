import React from 'react';
import TodoItem from './TodoItem';
function ListTodo({ todoLists, onToggle }) {
  
  return (
    <ul className='list-unstyled'>
      {todoLists.map((item,index) => (
        <TodoItem key={index} todoItem={item} onToggle={onToggle.bind(null,index)} />
      ))}
    </ul>
  );
}

export default ListTodo;
