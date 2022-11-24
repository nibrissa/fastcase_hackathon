import s from "./TaskList.module.css"
import TaskItem from "./TaskItem/TaskItem";
import React from 'react';

const TaskList = (props) => {

    let tasksElements = props.tasksItem.map(t => <TaskItem description={t.description}/>)

    return(
        <div className={s.tasksBlock}>

            <p>Открытые</p>
            {tasksElements}

        </div>
    );
}

export default TaskList;