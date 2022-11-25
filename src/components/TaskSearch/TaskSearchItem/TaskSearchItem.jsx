import s from './TaskSearchItem.module.css'
import React from 'react'

const TaskSearchItem = () => {
    return(

        <div className={s.wrapper}>
            <div className={s.content}>
               <p>Название задачи</p>
                <p>Описание задачи</p>
                <p>Временной промежуток</p>
                <p>Баллы</p>
                <p>Тип уведомления</p>
                <p>Способ оповещания</p>
            </div>
        </div>
    );
}

export default TaskSearchItem;