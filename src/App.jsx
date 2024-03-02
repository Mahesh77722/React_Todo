import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialValue = [{ TodoName: "Eat", TodoDate: "21/02/2024" }];
  let [todoItems, setTodoItems] = useState([]);

  const HandleTodoItem = (ItemName, ItemDate) => {
    // console.log("New Item");
    if (
      ItemName != undefined &&
      ItemName != "" &&
      ItemDate != undefined &&
      ItemDate != ""
    ) {
      setTodoItems([...todoItems, { TodoName: ItemName, TodoDate: ItemDate }]);
    }
  };

  const HandleTodoDelete = (TodoItemName) => {
    const NewTodo = todoItems.filter(
      (todoItem) => todoItem.TodoName !== TodoItemName
    );
    setTodoItems(NewTodo);
  };

  return (
    <div className="todo-container">
      <AppName />
      <AddTodo AddItem={HandleTodoItem} />

      {todoItems.length === 0 ? (
        <div className="container text-center"> Enjoy your day! 👍</div>
      ) : (
        todoItems.map((Item, index) => (
          <TodoItems
            key={index}
            TodoName={Item.TodoName}
            TodoDate={Item.TodoDate}
            TodoDelete={HandleTodoDelete}
          />
        ))
      )}
    </div>
  );
}

export default App;
