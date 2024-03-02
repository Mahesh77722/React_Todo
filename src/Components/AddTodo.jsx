import { useState } from "react";
import { MdAdd } from "react-icons/md";

function AddTodo({ AddItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const HandleTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const HandleTodoDate = (e) => {
    setTodoDate(e.target.value);
  };

  const HandleTodoBtnClick = () => {
    AddItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5 mb-2">
          <input
            type="text"
            name=""
            className="w-100 form-control"
            id="txtTodo"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={HandleTodoName}
          />
        </div>

        <div className="col-4 mb-2">
          <input
            type="date"
            id="TodoDate"
            className="w-100 form-control"
            value={todoDate}
            onChange={HandleTodoDate}
          />
        </div>

        <div className="col-3 mb-2">
          <button
            className=" w-100 btn btn-success"
            onClick={HandleTodoBtnClick}
          >
            <MdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
