import s from './Tasks.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../services/user.service";
import authHeader from "../../services/auth-header";
import {AiOutlineClose} from "react-icons/ai";
import {MdDone, MdModeEditOutline} from "react-icons/all";
import ViewModal from "../ViewModal/ViewModal";


function load_tasks() {
    return axios.get(API_URL + 'tasks', {headers: authHeader()});
}


const Tasks = (props) => {
    let {tasks} = load_tasks()
    if (!tasks) {
        tasks = props.tasksPage[0].items
    }
    const [open, setOpenM] = React.useState(false);

    return (

        <div className={s.tasksWrapper}>

            {/*<div className={s.btnWrapper}>*/}
            {/*    <button className={s.button}>Создать задачу</button>*/}
            {/*</div>*/}

            <div className={s.tasks}>
                {/*{props.tasksPage.map(board =>*/}

                <div className={s.board}>

                    {/*<div className={s.boardTitle}>{board.name}</div>*/}
                    <div className={s.boardTitle}> <h2>Мои задачи</h2></div>

                    {/*{board.items.map(item =>*/}
                    {tasks.map(item =>
                        <div className={s.item} onClick={() => setOpenM(true)}>
                            <div className={s.itemDesc}>{item.id}</div>
                            <div className={s.itemDesc}>{item.name}</div>
                            <div className={s.itemBtn}>
                                <button className={s.iconsBtn}><AiOutlineClose size={25} color={'#8D23F6'}/></button>
                                <button className={s.iconsBtn}><MdDone size={25} color={'#8D23F6'}/></button>
                                <button className={s.iconsBtn}><MdModeEditOutline size={25} color={'#8D23F6'}/></button>

                                {/*<ul>
                                    <li>
                                        <NavLink to={"/task/" + item.id}>
                                            view
                                        </NavLink>
                                    </li>
                                </ul>*/}
                            </div>
                            {open && <ViewModal open={open} setOpenM={setOpenM}/>}
                        </div>
                    )}
                </div>
                {/*)}*/}
            </div>
        </div>
    );
}

export default Tasks;







