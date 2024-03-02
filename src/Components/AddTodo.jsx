import { useRef } from "react";
import { MdAdd } from "react-icons/md";

function AddTodo({ AddItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const NameRef = useRef();
  const DateRef = useRef();

  // const HandleTodoName = (e) => {
  //   setTodoName(e.target.value);
  // };

  // const HandleTodoDate = (e) => {
  //   setTodoDate(e.target.value);
  // };

  const HandleTodoBtnClick = (event) => {
    const Name = NameRef.current.value;
    const Date = DateRef.current.value;
    AddItem(Name, Date);
    NameRef.current.value = "";
    DateRef.current.value = "";
    event.preventDefault();
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={HandleTodoBtnClick}>
        <div className="col-5 mb-2">
          <input
            type="text"
            ref={NameRef}
            className="w-100 form-control"
            id="txtTodo"
            placeholder="Enter Todo here"
          />
        </div>

        <div className="col-4 mb-2">
          <input
            type="date"
            id="TodoDate"
            ref={DateRef}
            className="w-100 form-control"
          />
        </div>

        <div className="col-3 mb-2">
          <button type="submit" className=" w-100 btn btn-success">
            <MdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
