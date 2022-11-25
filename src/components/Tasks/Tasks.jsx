import s from './Tasks.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../services/user.service";
import authHeader from "../../services/auth-header";


function load_tasks() {
    return axios.get(API_URL + 'tasks', {headers: authHeader()});
}


const Tasks = (props) => {
    let {tasks} = load_tasks()
    if (!tasks) {
        tasks = props.tasksPage[0].items
    }

    return (

        <div className={s.tasksWrapper}>

            <div className={s.btnWrapper}>
                <button>Создать задачу</button>
            </div>


            <div className={s.tasks}>

                {/*{props.tasksPage.map(board =>*/}

                <div className={s.board}>

                    {/*<div className={s.boardTitle}>{board.name}</div>*/}
                    <div className={s.boardTitle}>Назначенные мне</div>

                    {/*{board.items.map(item =>*/}
                    {tasks.map(item =>
                        <div className={s.item}>
                            <div className={s.itemDesc}>{item.id}</div>
                            <div className={s.itemDesc}>{item.name}</div>
                            <div className={s.itemBtn}>
                                {/*<ul>
                                    <li>
                                        <NavLink to={"/task/" + item.id}>
                                            view
                                        </NavLink>
                                    </li>
                                </ul>*/}
                            </div>

                        </div>
                    )}
                </div>
                {/*)}*/}
            </div>
        </div>
    );
}

export default Tasks;







