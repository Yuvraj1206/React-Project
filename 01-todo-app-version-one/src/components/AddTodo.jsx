import { useRef, useState } from "react";

function AppTodo({ onNewItem }) {
  const NameInput = useRef();
  const DateInput = useRef();

  const AddHandler = () => {
    const todoName = NameInput.current.value;
    const todoDate = DateInput.current.value;
    onNewItem(todoName, todoDate);
    NameInput.current.value = "";
    DateInput.current.value = "";
  };

  return (
    <div className="container">
      <div className="row yuvi-row">
        <div className="col-6">
          <input
            type="text"
            ref={NameInput}
            placeholder="Enter to do here"
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              borderRadius: "6px",
              border: "none",
            }}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={DateInput}
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              borderRadius: "6px",
              border: "none",
            }}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger yuvi-btn"
            style={{ height: "100%" }}
            onClick={AddHandler}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
