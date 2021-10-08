import React, { useState } from "react";

function Header({ onSubmit, type }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") onSubmit(value);
    type === "ADD" && setValue("");
  };

  const placeholder = type === "ADD" ? "please input your task" : "search for your task";
  return (
    <header>
      <form onSubmit={handleTaskSubmit}>
        <h1>Things To Do</h1>
        <input type="text" value={value} placeholder={placeholder} onChange={handleChange} className="form-control add-todo" />
      </form>
    </header>
  );
}

export default Header;
