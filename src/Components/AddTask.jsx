import React from "react";
import { useState } from "react";
import '../App.css'

function AddTask({onAddTask}){
    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');

    const handleAdd = () => setShow(true);

    const onAdd = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            onAddTask(input);
            setInput('');
            setShow(false);
        }
        else {
            setShow(false);
        }
    }

    return(
        <div className="add-task-section">
        <div className={`container-addtask${show ? " hide" : ""}`} onClick={handleAdd}>
            <p>+</p>    
        </div>
        <div className={`container-addTaskReveal${show ? "" : " hide"}`}>
            <input placeholder="Enter Task" type="text" value={input} onChange={e => setInput(e.target.value)} />
            <p onClick={onAdd}>Add Task</p>
        </div>
        </div>
    )
}

export default AddTask