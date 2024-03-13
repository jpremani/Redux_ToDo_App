import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";
import { useDispatch } from "react-redux";
import { add } from "../redux/reducers/todoSlice";

function Home() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  console.log(data);
  const handletask = (e) => {
    setData(e.target.value);
  };
  const addData = () => {
    dispatch(add(data));
    setData("");
  };
  return (
    <div className="todo_home mt-2">
      <h1 className="text-center">Enter Your Task</h1>
      <div className="todo_input d-flex align-items-center justify-content-between col-lg-6 mx-auto">
        <input
          type="text"
          value={data}
          onChange={handletask}
          name="todo_task"
          className="form-control w-75"
        ></input>
        <button
          style={{
            background: "#ee5253",
            border: "none",
            width: "80px",
            height: "40px",
            borderRadius: "6px",
          }}
          onClick={addData}
        >
          <AddIcon style={{ color: "white" }} />
        </button>
      </div>
      <Todo />
    </div>
  );
}

export default Home;
