import React, {useState} from "react"

function ToDoList() {

    const [tasks, setTasks] = useState(["eat breakfast", "go to work", "go for a run"]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event){

        setNewTasks(event.target.value)

    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTasks("");
        }

    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){

        if (index > 0) {
            console.log(index);
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1], updatedTask[index]];
            setTasks(updatedTask);
        }

    }

    function moveTaskDown(index){
        if (index < tasks.length -1 ) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = 
            [updatedTask[index+1], updatedTask[index]];
            setTasks(updatedTask);
        }
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
                            Move Down
                        </button>
                    </li>
                )}
            </ol>

        </div>
    )

}

export default ToDoList