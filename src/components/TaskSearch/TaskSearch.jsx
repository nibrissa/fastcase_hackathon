import React, {useState} from 'react'
import s from './TaskSearch.module.css'
import TaskSearchItem from "./TaskSearchItem/TaskSearchItem";

const TaskSearch = () => {

    const [isActive, setIsActive] = useState(false);
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <input type="text" placeholder='Поиск' className={s.inputSearch}/>

                <div className={s.accordion}>
                    <div className={s.accordionItem}>
                        <div className={s.accordionTitle} onClick={() => setIsActive(!isActive)}>
                            <div>Фильтры</div>
                            <div>{isActive ? '-' : '+'}</div>
                        </div>
                        {isActive && <div className={s.accordionContent}>
                            <select className={s.acItem}>
                                <option disabled selected>Статус задачи:</option>
                                <option>Открыта</option>
                                <option>Закрыта</option>
                                <option>Завершена</option>
                            </select>
                            <input type='date' className={s.acItem}/>
                            <input type='text' className={s.acItem} placeholder='Название отдела'/>
                            <div className={s.acItem}>
                                <label htmlFor="openMe">Открытые мной</label>
                                <input id="openMe" type="checkbox"/>
                            </div>
                            <div className={s.acItem}>
                                <label htmlFor="openMe">Выполняемые мной </label>
                                <input id="openMe" type="checkbox"/>
                            </div>
                        </div>}

                    </div>

                </div>
                <TaskSearchItem/>
                <TaskSearchItem/>
                <TaskSearchItem/>
                <TaskSearchItem/>
            </div>
        </div>
    );
}

export default TaskSearch;