import { FaTimes } from 'react-icons/fa';

function Task({ task, onDelete }) {
    return (
        <div className='task' style={{position: 'relative'}}> 
                <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer', position: 'absolute', right: '5px', top: '2px'}}/>
            <h1>
                {task.text}
            </h1>
            <p>{task.day}</p>

        </div>
    )
}

export default Task;