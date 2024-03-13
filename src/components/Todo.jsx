import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { delete1, update1 } from "../redux/reducers/todoSlice";

function Todo() {
  const User_Data = useSelector((state) => state.tododata);
  const dispatch = useDispatch();
  const [todoindex, setTodoIndex] = useState("");
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState("");
  const handleClose = () => setShow(false);
  const [showeyevalue, setShoweyeValue] = useState("");
  const [showeye, setShoweye] = useState(false);

  const handleshow = (e) => {
    setShow(true);
    setUpdate(e);
  };
  const remove = (index) => {
    dispatch(delete1(index));
  };
  const usertask_update = () => {
    // dispatch(update1(update, todoindex));
    dispatch(update1({ value: update, index: todoindex }));
    handleClose();
  };

  return (
    <div className="todo_container">
      {User_Data.map((value, index) => {
        return (
          <>
            <div
              className="todo_container mb-2 d-flex justify-content-between align-items-center px-2 col-lg-6 mx-auto mt-3"
              key={index}
              style={{
                background: "#dcdde1",
                borderRadius: "3px",
                height: "45px",
              }}
            >
              <li style={{ listStyle: "none" }}>{value}</li>
              <div className="todo_icon d-flex align-items-center justify-content-between col-lg-2">
                <EditIcon
                  onClick={() => {
                    setTodoIndex(index);
                    handleshow(value);
                  }}
                  style={{ color: "blue", cursor: "pointer" }}
                />
                <VisibilityIcon
                  style={{ color: "green", cursor: "pointer" }}
                  onClick={() => {
                    setShoweye(true);
                    setShoweyeValue(value);
                  }}
                />
                <DeleteIcon
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => remove(index)}
                />
              </div>
            </div>
          </>
        );
      })}
      {/* read modal */}
      <Modal show={showeye}>
        <h1 className="text-center">{showeyevalue}</h1>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShoweye(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Update Modal */}

      <Modal show={show} onHide={handleClose}>
        <h3 className="text-center mt-2">Update Your Task</h3>
        <Modal.Header>
          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
            <input
              name="task"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              className="form-control col-lg-5 mt-2"
            />
          </div>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => usertask_update()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Todo;
