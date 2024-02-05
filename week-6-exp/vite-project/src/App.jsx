import "./App.css";
import { useEffect } from "react";
let counter = 4;
function App() {
  useEffect(() => {
    setInterval(() => {
      fetch("www.google.com").then(async function (res) {
        const data = await res.json();
        setTodos(data);
      });
    }, 10000);
  }, []);

  // const [text, setText] = useState("bye");
  // function addTodo() {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: counter++,
  //       title: Math.random(),
  //       description: Math.random(),
  //     },
  //   ]);
  // }
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "abc",
  //     description: "123",
  //   },
  //   {
  //     id: 2,
  //     title: "abc",
  //     description: "123",
  //   },
  //   {
  //     id: 3,
  //     title: "abc",
  //     description: "123",
  //   },
  // ]);
  return (
    // <>
    //   <button
    //     onClick={() => {
    //       if (text == "bye") setText(Math.random());
    //       else setText("bye");
    //     }}
    //   >
    //     Click
    //   </button>
    //   <Header title='hello'></Header>
    //   <Header title='hello'></Header>
    //   <Header title='hello'></Header>
    //   <Header title={text}></Header>
    // </>
    <>
      {/* <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        );
      })} */}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}
//React.memo -> not rendering if the props are not changed
// const Header = React.memo(function Header({ title }) {
//   return <div>{title}</div>;
// });

export default App;
