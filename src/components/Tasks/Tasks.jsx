import s from './Tasks.module.css';
import React from 'react';
import axios from "axios";
import {API_URL} from "../../services/user.service";
import authHeader from "../../services/auth-header";
import {AiOutlineClose} from "react-icons/ai";
import {MdDone, MdModeEditOutline} from "react-icons/all";
import ViewModal from "../ViewModal/ViewModal";


function load_tasks() {
    return axios.get(API_URL + 'tasks', {headers: authHeader()});
}


const Tasks = () => {
    let {tasks} = load_tasks()
    if (!tasks) {
        tasks = [
            {id: 1, name: 'Название задачи 1'},
            {id: 2, name: 'Название задачи 2'},
            {id: 3, name: 'Название задачи 3'}
        ]
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
                    <div className={s.boardTitle}><h2>Мои задачи</h2></div>

                    {/*{board.items.map(item =>*/}
                    {tasks.map(item =>
                        <div className={s.item} key={item.id} onClick={() => setOpenM(true)}>
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

                        </div>
                    )}
                    {open && <ViewModal open={open} setOpenM={setOpenM}/>}
                </div>
                {/*)}*/}
            </div>
            {open && <ViewModal open={open} setOpenM={setOpenM}/>}
        </div>
    );
}

export default Tasks;







