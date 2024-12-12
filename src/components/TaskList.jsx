import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./task/TaskForm";

const TaskList = ({ tasks }) => {
    const [localTasks, setLocalTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState("");

    // Add a task
    const addTask = () => {
        if (newTaskText.trim() === "") return; // Prevent empty tasks
        const newTask = {
            id: Date.now(),
            text: newTaskText,
        };
        setLocalTasks([...localTasks, newTask]);
        setNewTaskText(""); // Reset input
    };

    // Delete a task
    const deleteTask = (taskId) => {
        setLocalTasks(localTasks.filter(task => task.id !== taskId));
    };

    return (
        <div className='task-list'>
            <h2>Task List</h2>
            
            <div>
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask}>Add</button>
                {/* <TaskForm onAddTask={addTask} /> */}
                
            </div>

            {
                localTasks.map(task => (
                    <TaskItem key={task.id} task={task} onDelete={deleteTask} />
                ))
            }

        </div>
    );
};

export default TaskList;
