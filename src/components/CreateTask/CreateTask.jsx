import s from './CreateTask.module.css'
import React from 'react';
import axios from "axios";
import {API_URL} from "../../services/user.service";
import authHeader from "../../services/auth-header";
import AuthService from "../../services/auth.service";
import ViewModal from "../ViewModal/ViewModal";
import TriggerModal from "../TriggerModal/TriggerModal";

const task = {
    name: "",
    description: "",
    media_contents: "",
    assignee_ids: [],
    points: 0,
    est_time: "",
    subscribed_ids: [
        AuthService.getCurrentUser() ? AuthService.getCurrentUser().id : 0
    ],
    triggers: []
};

const CreateTask = () => {
    const [open, setOpenM] = React.useState(false);


    const add_trigger = (child_trigger) => {
        task.triggers = [...task.triggers, child_trigger]
    }


    function create_task() {
        return axios.post(API_URL + 'create/task', task, {headers: authHeader()}).then(res => window.location = '/')
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
                    <button className={s.btnStyle} onClick={() => setOpenM(true)}>Открыть модалку с триггерами</button>
                    {open && <TriggerModal open={open} setOpenM={setOpenM} add_parent_trigger={add_trigger}/>}
                </div>
                <div>
                    {task.triggers.map(trigger => <p>Trigger {trigger.trigger_type}</p>)}
                </div>

                <div className={s.btnSection}>
                    <button className={s.btnStyle} onClick={create_task}>Создать</button>
                </div>

            </div>
        </div>

    );
}

export default CreateTask;