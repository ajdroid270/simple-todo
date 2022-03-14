import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./Todo/Item";

const shoppinglist = [
  { title: "ambica", bought: true },
  { title: "apple", bought: false },
  { title: "trijay", bought: true },
  { title: "ajay", bought: false },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* {names.map(function (personname, i) {
            return <MyName name={personname} age={ages[i]} />;
          })} */}
          {shoppinglist.map(function (shoppingItem) {
            return <TodoItem item={shoppingItem} />;
          })}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
