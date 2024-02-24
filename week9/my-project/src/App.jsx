import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const { todos, loading } = useTodos(10);
  const [val, setVal] = useState("");

  // useEffect(() => {
  //   axios.get("https://www.djcdjvdvb.com/ds?val=" + val).then((res) => {
  //     console.log(res.data);
  //   });
  // }, [val]);

  const debounceValue = useDebounce(val, 5000);
  return (
    <>
      {console.log(debounceValue)}
      {/* {loading ? "Loading" : todos.map((todo) => <Track todo={todo} />)} */}
      <input
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      ></input>
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

function useTodos(N) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const value = setInterval(() => {
      setLoading(true);
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, N * 1000);
    return () => {
      clearInterval(value);
    };
  }, [N]);

  return { todos, loading };
}

function useOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
    return () => {
      window.removeEventListener("online");
      window.removeEventListener("offline");
    };
  });
}

function useDebounce(val, timer) {
  const [debounceValue, setDebounceValue] = useState(val);
  useEffect(() => {
    let valll = setTimeout(() => {
      setDebounceValue(val);
    }, timer);
    // return () => {
    //   clearInterval(valll);
    // };
  }, [val]);
  return debounceValue;
}

export default App;
