import React, {useState} from 'react'
import s from './TaskSearch.module.css'
import TaskSearchItem from "./TaskSearchItem/TaskSearchItem";
import axios from "axios";
import {API_URL} from "../../services/user.service";
import authHeader from "../../services/auth-header";

function fetch_default() {
    return axios.get(API_URL + 'tasks', {headers: authHeader()});
}




const TaskSearch = () => {
    let {results} = fetch_default()

    function search(event) {
        results = axios.post(API_URL + 'tasks/search', {search_value: event.target.value}, {headers: authHeader()});
    }


    const [isActive, setIsActive] = useState(false);

    if (!results) {
        results = []
    }


    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <input type="text" placeholder='Поиск' className={s.inputSearch} onChange={search}/>

                {/*<div className={s.accordion}>*/}
                {/*    <div className={s.accordionItem}>*/}
                {/*        <div className={s.accordionTitle} onClick={() => setIsActive(!isActive)}>*/}
                {/*            <div>Фильтры</div>*/}
                {/*            <div>{isActive ? '-' : '+'}</div>*/}
                {/*        </div>*/}
                {/*        {isActive && <div className={s.accordionContent}>*/}
                {/*            <select className={s.acInput} defaultValue="Статус задачи:">*/}
                {/*                <option disabled>Статус задачи:</option>*/}
                {/*                <option>Открыта</option>*/}
                {/*                <option>Закрыта</option>*/}
                {/*                <option>Завершена</option>*/}
                {/*            </select>*/}
                {/*            <input type='date' className={s.acInput}/>*/}
                {/*            <input type='text' className={s.acInput} placeholder='Название отдела'/>*/}
                {/*            <div className={s.acItem}>*/}
                {/*                <label htmlFor="openMe">Открытые мной</label>*/}
                {/*                <input id="openMe" type="checkbox"/>*/}
                {/*            </div>*/}
                {/*            <div className={s.acItem}>*/}
                {/*                <label htmlFor="openMe">Выполняемые мной </label>*/}
                {/*                <input id="openMe" type="checkbox"/>*/}
                {/*            </div>*/}
                {/*        </div>}*/}

                {/*    </div>*/}

                {/*</div>*/}
                {/*<TaskSearchItem/>*/}
                {results.map(result => <TaskSearchItem task={result}/>)}
            </div>
        </div>
    );
}

export default TaskSearch;