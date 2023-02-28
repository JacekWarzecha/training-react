// try {
//   console.log(JSON.parse('{"property: 5}'));
// } catch (error) {
//   console.log("nie działa Ci to :");
// }

function App() {
  fetch("products.json")
    .then((response) => response.json())
    .then((products) => console.log(products));

  return <div>coś </div>;
}

export default App;
