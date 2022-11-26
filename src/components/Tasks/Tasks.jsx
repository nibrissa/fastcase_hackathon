import s from './Tasks.module.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_URL} from "../../services/user.service";
import authHeader from "../../services/auth-header";
import {AiOutlineClose} from "react-icons/ai";
import {MdDone, MdModeEditOutline} from "react-icons/all";
import ViewModal from "../ViewModal/ViewModal";


const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [open, setOpenM] = React.useState(false);
    const [task_id, setTaskId] = useState(0);

    useEffect(() => {
        axios.get(API_URL + 'tasks', {headers: authHeader()})
            .then(
                (result) => {
                    console.log(result)
                    setTasks(result.data)
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    console.log(error);
                }
            )
    }, [])


    return (

        <div className={s.tasksWrapper}>


            <div className={s.tasks}>


                <div className={s.board}>


                    <div className={s.boardTitle}><h2>Мои задачи</h2></div>


                    {tasks.map(item =>
                        <div className={s.item} key={item.id} onClick={() => {
                            setOpenM(true)
                            setTaskId(item)
                        }}>
                            <div className={s.itemDesc}>{item.id}</div>
                            <div className={s.itemDesc}>{item.name}</div>
                            <div className={s.itemBtn}>
                                <button className={s.iconsBtn}><AiOutlineClose size={25} color={'#8D23F6'}/></button>
                                <button className={s.iconsBtn}><MdDone size={25} color={'#8D23F6'}/></button>
                                <button className={s.iconsBtn}><MdModeEditOutline size={25} color={'#8D23F6'}/></button>

                            </div>

                        </div>
                    )}
                </div>
                {open && <ViewModal open={open} setOpenM={setOpenM} task={task_id}/>}
            </div>

        </div>
    );
}

export default Tasks;







