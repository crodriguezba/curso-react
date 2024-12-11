// TaskItem.jsx
import React from "react";

const TaskItem = ({ task, onDelete }) => {
    return (
        <div className='task-item'>
            <span data-id={task.id}>{task.text}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
