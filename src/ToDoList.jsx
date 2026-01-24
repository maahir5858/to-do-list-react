import { useState } from 'react';

export default function ToDoList() {

    const [tasks, setTasks] = useState(["study react", "walk the dog", "exercise daily"]);
    const [nextTask, setNextTask] = useState('');

    function handleInputChange(event) {
        setNextTask(event.target.value);
    }

    function addTask() {
        if (nextTask.trim() !== "") {
            setTasks([
                ...tasks,
                nextTask
            ]);
            setNextTask('');
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => {
            return (i!==index)
        }));
    }

    function moveTaskUp(index) {
        if (index>0) {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='to-do-list'>
            <h1>TO DO LIST</h1>
            <input 
                type="text"
                placeholder="Enter the task...!"
                onChange={handleInputChange}
                value={nextTask}
            />
            <button 
                className='add-button' 
                onClick={addTask}
            >
                Add Task
            </button>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span>{task}</span>
                        <button
                            className='delete-button' 
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className='move-up-button' 
                            onClick={() => moveTaskUp(index)}
                        >
                            👆
                        </button>
                        <button
                            className='move-down-button' 
                            onClick={() => moveTaskDown(index)}
                        >
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}