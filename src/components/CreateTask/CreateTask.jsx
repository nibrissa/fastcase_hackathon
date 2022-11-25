import s from './CreateTask.module.css'
import React from 'react';
import {AiOutlineClose} from "react-icons/all";

const CreateTask = () => {
    return(

        <div className={s.wrapper}>
            <div className={s.content}>
                    <div className={s.header}>
                        <span className={s.title}>Создать задачу</span>
                    </div>
                        <input type="text" placeholder='Заголовок' className={s.Input} />
                            <select className={s.Input}>
                                <option disabled selected>Способ оповещания:</option>
                                <option>Почта</option>
                                <option>Телефон</option>
                                <option>СМС</option>
                            </select>

                        <input type="number" placeholder='Очки за выполнение' className={s.Input}/>
                        <input className={s.File} type="file"/>

                        <div className={s.Data}>
                            <div>
                                <span>Конец:</span>
                                <input type="date" className={s.inputModal}/>
                            </div>

                        </div>

                        <textarea className={s.Input} placeholder='Добавьте описание задачи'/>
                    <div className={s.addUser}>
                        <p>Назначить исполнителя:</p>
                        <input type='text' className={s.Input}/>
                        <button className={s.btnStyle}>Добавить</button>
                    </div>

                <div className={s.triggerBtn}>
                    <button className={s.btnStyle}>Открыть модалку с триггерами</button>
                </div>
                    <textarea placeholder='Добавьте комментарий' className={s.Input}/>

                <div className={s.btnSection}>
                    <button className={s.btnStyle}>Создать</button>
                </div>
        </div>
        </div>

    );
}

export default CreateTask;