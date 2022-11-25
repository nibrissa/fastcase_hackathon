import React from "react";
import s from "../Navbar/Navbar.module.css";
import {useParams} from "react-router-dom";
import axios from "axios";
import authHeader from "../../services/auth-header";
import {API_URL} from "../../services/user.service";


function get_task(task_id) {
    return axios.get(API_URL + 'task/' + task_id, {headers: authHeader()});
}

const SingleTask = () => {
    const {id} = useParams()
    const task = get_task(id)

    console.log(task)

    return (
        <div className={s.tasksWrapper}>

            <div className={s.btnWrapper}>
                <button>Создать задачу</button>
            </div>
            <div className={s.btnWrapper}>
                <button>{id}</button>
            </div>
        </div>

    );


}

export default SingleTask;