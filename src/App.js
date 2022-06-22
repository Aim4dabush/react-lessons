import "./App.scss";

//connect component to App.js
import Form from "./Components/Form/Form";
import Hello from "./Components/Hello/Hello";

function App() {
  return (
    // 1. you can return any html element.
    // 2. you can only return one element but it can wrap many elements.
    // 3. "class" word reserved. need to use "className" instead for css.
    <div className="App">
      <Hello />
      <Form />
    </div>
  );
}

export default App;
