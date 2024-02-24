import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItems from "./components/AddItems";
import WelcomeMsg from "./components/WelcomeMsg";
import { useState } from "react";

function App() {
  const [TodoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // const newItem = [
    //   ...TodoItems,
    //   {
    //     name: itemName,
    //     date: itemDueDate,
    //   },
    // ];
    // setTodoItems(newItem);

    setTodoItems((currentItems) => [
      ...currentItems,
      {
        name: itemName,
        date: itemDueDate,
      },
    ]);
  };

  const handleDel = (name) => {
    const newTodoList = TodoItems.filter((item) => item.name !== name);
    setTodoItems(newTodoList);
  };
  return (
    <center>
      <center className="todoContainer">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMsg items={TodoItems}></WelcomeMsg>
        <AddItems items={TodoItems} onDelClick={handleDel}></AddItems>
      </center>
    </center>
  );
}

export default App;
