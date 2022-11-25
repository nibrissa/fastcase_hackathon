import s from './CreateTask.module.css'
import React from 'react';
import axios from "axios";
import {API_URL} from "../../services/user.service";
import authHeader from "../../services/auth-header";
import AuthService from "../../services/auth.service";


const CreateTask = () => {

    let task = {
        name: "",
        description: "",
        media_contents: "",
        assignee_ids: [],
        points: 0,
        est_time: "",
        subscribed_ids: [
            AuthService.getCurrentUser().id
        ],
        triggers: [
            {
                trigger_type: "",
                needed_action: "",
                parent_task_id: 0,
                author_id: AuthService.getCurrentUser().id,
                timer: ""
            }
        ]
    };

    function create_task() {
        console.log(task)
        // return axios.post(API_URL + 'create/task', task, {headers: authHeader()});
    }

    return (

        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.header}>
                    <span className={s.title}>Создать задачу</span>
                </div>
                <input type="text" placeholder='Заголовок' className={s.Input}
                       onChange={(e) => task.name = e.target.value}/>

                <input type="number" placeholder='Очки за выполнение' className={s.Input}
                       onChange={(e) => task.points = e.target.value}/>

                <input type="text" placeholder='Время выполнения' className={s.Input}
                       onChange={(e) => task.est_time = e.target.value}/>

                <textarea className={s.Input} placeholder='Добавьте описание задачи'
                          onChange={(e) => task.description = e.target.value}/>
                <div className={s.addUser}>
                    <p>Назначить исполнителя:</p>
                    <input type='text' className={s.Input}/>
                    <button className={s.btnStyle}>Добавить</button>
                </div>

                <div className={s.triggerBtn}>
                    <button className={s.btnStyle}>Открыть модалку с триггерами</button>
                </div>

                <div className={s.btnSection}>
                    <button className={s.btnStyle} onClick={create_task}>Создать</button>
                </div>
            </div>
        </div>

    );
}

export default CreateTask;