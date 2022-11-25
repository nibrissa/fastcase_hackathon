import s from './TaskSearchItem.module.css'
import React from 'react'

const TaskSearchItem = (props) => {
    let {task} = props.task
    return (

        <div className={s.wrapper}>
            <div className={s.content}>
                <p>{task.id}</p>
                <p>{task.name}</p>
                <p>{task.author.fio}</p>
                <p>{task.created_at}</p>
                <p>{task.points}</p>
                <p>{task.status}</p>
            </div>
        </div>
    );
}

export default TaskSearchItem;