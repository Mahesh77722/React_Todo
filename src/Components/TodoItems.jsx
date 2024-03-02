import { MdOutlineDeleteForever } from "react-icons/md";
import styles from "./TodoItems.module.css";

function TodoItems({ TodoName, TodoDate, TodoDelete }) {
  return (
    <div className="container">
      <div className="row  mb-2">
        <div className={`col-5 ` + styles.center}>{TodoName}</div>
        <div className={`col-4 ` + styles.center}>{TodoDate}</div>
        <div className="col-3">
          <button
            className="w-100 btn btn-danger todo-btn"
            onClick={() => TodoDelete(TodoName)}
          >
            <MdOutlineDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
