// import "./App.css";
// // import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// // const Dashboard = React.lazy(() => import("./components/Dashboard"));
// // const Landing = React.lazy(() => import("./components/Landing"));

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Count count={count} />
//     </div>
//   );
// }

// function Count({ count, setCount }) {
//   return (
//     <div>
//       {count}
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   );
// }

// function Buttons() {
//   return (
//     <div>
//       <button onClick={() => {}}>Increment</button>
//       <button onClick={() => {}}>Decrement</button>
//     </div>
//   );
// }

// // function App() {
// //   // suspense API
// //   return (
// //     <div>
// //       <BrowserRouter>
// //         <AppBar />
// //         <Routes>
// //           <Route
// //             path='/'
// //             element={
// //               <Suspense fallback={"....loading"}>
// //                 <Landing />
// //               </Suspense>
// //             }
// //           />
// //           <Route
// //             path='/dashboard'
// //             element={
// //               <Suspense fallback={"....loading"}>
// //                 <Dashboard />
// //               </Suspense>
// //             }
// //           />
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // function AppBar() {
// //   const navigate = useNavigate();
// //   return (
// //     <div>
// //       <button
// //         onClick={() => {
// //           // window.location.href = "/";
// //           navigate("/");
// //         }}
// //       >
// //         Landing
// //       </button>
// //       <button
// //         onClick={() => {
// //           // window.location.href = "/dashboard";
// //           navigate("/dashboard");
// //         }}
// //       >
// //         Dashboard
// //       </button>
// //     </div>
// //   );
// // }

// export default App;

// // useNavigate must be used in the context of router
// //Dashboard becomes async on lazy so need a fallback for rendering something
import { useContext, useState } from "react";
import { CountContext } from "./context/CountContext";

// reducer, useReducer
// wrap anyone who wants to us the context then wrap
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
