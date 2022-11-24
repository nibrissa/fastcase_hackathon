import s from './Tasks.module.css';
import React from 'react';
import TaskList from "./TaskList/TaskList";

const Tasks = (props) =>{
    return(

        <TaskList tasksItem={props.tasksPage.tasksItem}/>

    );


}

export default Tasks;