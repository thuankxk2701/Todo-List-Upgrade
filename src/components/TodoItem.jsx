import React, { useState } from 'react';

function TodoItem({ todoList, onChange }) {
  const [checkInput, setCheckInput] = useState(!todoList.active);

  const checkClassName =
    'todo-item ui-state-default ' +
    (checkInput === false ? 'pending' : 'completed');
  const checkActive = checkInput === true ? 'checked' : '';
  const handleChange = () => {
    setCheckInput(!checkInput);
    onChange([checkInput, todoList.id]);
  };
  return (
    <li className={checkClassName}>
      <div className='checkbox'>
        <label>
          <input
            className='active'
            type='checkbox'
            checked={checkActive}
            onChange={handleChange}
          />
          &nbsp;
          {todoList.text}
        </label>
      </div>
    </li>
  );
}

export default TodoItem;
