import { useState, useEffect } from "react";
// import { useLocalStorageState } from "./useLocalStorageState";

// const useDocumentTitle = (counter) => {
//   useEffect(() => {
//     document.title = `Licznik: ${counter}`;
//   }, [counter]);
// };

// const useHook = () => {
//   const updateDimensions = () => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };

//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     window.addEventListener("resize", updateDimensions);

//     return () => {
//       window.removeEventListener("resize", updateDimensions);
//     };
//   }, []);

//   return dimensions;
// };

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>{counter}</p>
    </div>
  );
}

export default App;
