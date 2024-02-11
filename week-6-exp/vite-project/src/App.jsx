import "./App.css";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
// let counter = 4;
//if props are changed then component doesn't renders
// function App() {
//   const [id, setId] = useState(1);
//   //use async effect library
//   useEffect(() => {
//     // setInterval(() => {
//     // axios.get("abc").then((response) => {
//     //   console.log(response.data);
//     //   setTodos(response.data);
//     // })
//     // axios.get(`abc/${id}`).then((response) => {
//     //   console.log(response.data);
//     //   setTodos(response.data);
//     // });
//     // }, 10000);
//   }, []);

//   // componentDidMount

//   // const [text, setText] = useState("bye");
//   // function addTodo() {
//   //   setTodos([
//   //     ...todos,
//   //     {
//   //       id: counter++,
//   //       title: Math.random(),
//   //       description: Math.random(),
//   //     },
//   //   ]);
//   // }
//   // const [todos, setTodos] = useState([
//   //   {
//   //     id: 1,
//   //     title: "abc",
//   //     description: "123",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "abc",
//   //     description: "123",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "abc",
//   //     description: "123",
//   //   },
//   // ]);
//   return (
//     // <>
//     //   <button
//     //     onClick={() => {
//     //       if (text == "bye") setText(Math.random());
//     //       else setText("bye");
//     //     }}
//     //   >
//     //     Click
//     //   </button>
//     //   <Header title='hello'></Header>
//     //   <Header title='hello'></Header>
//     //   <Header title='hello'></Header>
//     //   <Header title={text}></Header>
//     // </>
//     <>
//       {/* <button onClick={addTodo}>Add todo</button>
//       {todos.map((todo) => {
//         return (
//           <Todo
//             key={todo.id}
//             title={todo.title}
//             description={todo.description}
//           />
//         );
//       })} */}
//     </>
//   );
// }

// function App() {
//   const [id, setId] = useState(1);
//   return (
//     <div>
//       <button onClick={() => setId(1)}>1</button>
//       <button onClick={() => setId(2)}>2</button>
//       <button onClick={() => setId(3)}>3</button>
//       <button onClick={() => setId(4)}>4</button>
//       <Todos id={id} />
//     </div>
//   );
// }
// function Todos({ id }) {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     const response = axios
//       .get("https://sum-server.100xdevs.com/todos?id=" + id)
//       .then((res) => res.data.todos);
//     response.then((res) => {
//       setTodos(res);
//     });
//   }, [id]);
//   return (
//     <div>
//       {todos &&
//         todos.map((todo) => {
//           return <Todo key={todo.id} todo={todo} />;
//         })}
//     </div>
//   );
// }

// function Todo({ todo }) {
//   const { title, description } = todo;
//   return (
//     <div>
//       <div>{title}</div>
//       <div>{description}</div>
//     </div>
//   );
// }
// function Todo({ title, description }) {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setId();
//         }}
//       >
//         Click
//       </button>
//       <div>{title}</div>
//       <div>{description}</div>
//     </div>
//   );
// }
//React.memo -> not rendering if the props are not changed
// const Header = React.memo(function Header({ title }) {
//   return <div>{title}</div>;
// });

function App() {
  // const [num, setNum] = useState(0);

  // let count = useMemo(() => {
  //   let count = 0;
  //   for (let i = 0; i <= num; i++) {
  //     count += i;
  //   }
  //   return count;
  // }, [num]);
  const p = () => {
    console.log("hello");
  };
  const p2 = () => {
    console.log("hello");
  };
  return (
    <div>
      {/* <input
        type='text'
        onChange={(e) => {
          setNum(e.target.value);
        }}
      /> */}
      <Child p={p2}></Child>
    </div>
  );
}

function Child({ p }) {
  console.log("render");
  return <button onClick={p}>Hello</button>;
}
export default App;
