import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderAdd from './HeaderAdd';
import HeaderSearch from './HeaderSearch';
import ListTodo from './ListTodo';
import Footer from './Footer';
import { toast } from 'react-toastify';

let id = 0;
let updateTimeAddTask = true;
function TodoHome() {
  const [todoLists, setTodoList] = useState([]);
  const [todoListSearch, setTodoListSearch] = useState([]);
  const [checkSearch, setCheckSearch] = useState('');

  const handleUpdateTodoLists = (value) => {
    if (!value.trim()) return;
    if (!updateTimeAddTask)
      setTimeout(() => {
        updateTimeAddTask = !updateTimeAddTask;
      }, 3000);
    if (updateTimeAddTask) {
      setTodoList([
        ...todoLists,
        {
          id: id++,
          text: value,
          active: true,
        },
      ]);
      updateTimeAddTask = false;
      toast.success('Add task success 😀😀😀');
    } else {
      toast.warning('Adding tasks too fast.Try again in a few seconds ✨✨✨');
    }
    return;
  };
  const handleSearchItem = (searchItem) => {
    const value = searchItem.trim();
    if (!value) {
      setTodoListSearch([]);
      setCheckSearch('');
      return;
    }
    // Filter
    setTodoListSearch([]);
    const filterItems = todoLists.filter(
      (item) => item.text.toLowerCase().indexOf(value) !== -1
    );
    setCheckSearch(value);
    if (filterItems.length <= 0) toast.error('Quest not found 💥💥💥');
    setTodoListSearch(filterItems);
  };
  const handleUpdateChange = (value) => {
    const newTodoLists = todoLists.map((item) => {
      if (item.id === value[1])
        return { id: item.id, text: item.text, active: value[0] };
      return item;
    });
    setTodoList(newTodoLists);
  };
  return (
    <Router>
      <div className='container'>
        <div className='row'>
          <div className='todoList'>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <>
                    <HeaderAdd onChange={handleUpdateTodoLists} />
                    <ListTodo
                      todoLists={todoLists}
                      onChange={handleUpdateChange}
                    />
                  </>
                )}
              />
              <Route
                exact
                path='/search'
                render={() => (
                  <>
                    <HeaderSearch onSubmit={handleSearchItem} />
                    <ListTodo
                      todoLists={
                        checkSearch === '' ? todoLists : todoListSearch
                      }
                      onChange={handleUpdateChange}
                    />
                  </>
                )}
              />
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default TodoHome;
