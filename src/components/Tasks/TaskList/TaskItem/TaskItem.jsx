import s from "./TaskItem.module.css"
import React from 'react';

const TaskItem = (props) => {

    return (
        <div className={s.taskWrapper}>

            <div className={s.description}>
                {props.description}
            </div>

            <div className={s.icons}>

                <ul>
                    <li><img src={require('../../../../img/close.png')}/></li>
                    <li><img src={require('../../../../img/done.png')}/></li>
                    <li><img src={require('../../../../img/edit.png')}/></li>
                </ul>

            </div>


        </div>
    );
}

export default TaskItem;