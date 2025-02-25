import React, {useState} from "react"

function ToDoList() {

    const [tasks, setTasks] = useState(["eat breakfast", "go to work", "go for a run"]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event){

        setNewTasks(event.target.value)

    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
        <div className="to-do-list">

            <h1 className="title">To Do List</h1>
            <input 
                type="text" 
                placeholder="Enter a task..." 
                value={newTask}
                onChange={handleInputChange}>

            </input>
            <button 
                className="button"
                onClick={addTask}
                    >Add Task
            </button>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button 
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button 
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            Move Up
                        </button>
                        <button 
                            className="move-button"
                            onClick={() => moveTaskDown (index)}>
                            Delete
                        </button>
                    </li>
                )}
            </ol>

        </div>
    )

}

export default ToDoList