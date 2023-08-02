import "./styles.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSuccess, fetchDataFailure } from "./redux/actionTypes";
import axios from "axios"; // Assuming you have Axios installed

export default function App() {
  const todo = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        // Dispatch success action with data
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        // Dispatch failure action with error
        dispatch(fetchDataFailure(error.message));
      });
  }, []);
  console.log(todo);
  return (
    <div className="App">
      {todo?.data?.title}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
