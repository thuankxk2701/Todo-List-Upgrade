import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import ListTodo from "./ListTodo";
import Footer from "./Footer";

function TodoHome() {
  const [todoLists, setTodoList] = useState([]);
  const [searchValues, setSearchValues] = useState([]);

  const { pathname } = useLocation();
  const isAdd = pathname === "/";

  const handleSubmit = (value) => {
    if (isAdd) {
      setTodoList([...todoLists, { value, active: true }]);
    } else {
      setSearchValues(
        todoLists.filter((item) => {
          return item.value.toLowerCase().includes(value.toLowerCase());
        })
      );
    }
  };
  const handleToggleItem = (index) => {
    const newITodo = { ...todoLists[index], active: !todoLists[index].active };
    const updateTodoLists = [...todoLists];

    updateTodoLists.splice(index, 1, newITodo);
    setTodoList(updateTodoLists);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="todoList">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Header onSubmit={handleSubmit} type="ADD" />
                  <ListTodo todoLists={todoLists} onToggle={handleToggleItem} />
                </>
              )}
            />
            <Route
              exact
              path="/search"
              render={() => (
                <>
                  <Header onSubmit={handleSubmit} />
                  <ListTodo todoLists={searchValues} onToggle={handleToggleItem} />
                </>
              )}
            />
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default TodoHome;
