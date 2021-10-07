import React from 'react';
import classnames from 'classnames'

function TodoItem({ todoItem, onToggle }) {
  
  const toggleChange = () => {
    onToggle()
  }

  return (
    <li className={classnames('todo-item ui-state-default',{completed:!todoItem.active})}>
      <div className='checkbox'>
        <label>
          <input
            className='active'
            type='checkbox'
            checked={todoItem.active}
            onChange={toggleChange}
          />
          &nbsp;
          {todoItem.value}
        </label>
      </div>
    </li>
  );
}

export default TodoItem;
