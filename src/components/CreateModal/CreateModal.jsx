import React from 'react'
import s from './CreateModal.module.css'
import {AiOutlineClose} from "react-icons/all";

const CreateModal = ({open, setOpen}) => {


    return(
        <div className={"wrapper"}>

            {
                open && (
                    <div className={s.overlay}>
                        <div className={s.modal}>
                            <div className={s.header}>
                                <span className={s.title}>Создать задачу</span>
                                <AiOutlineClose onClick={() => setOpen(false)} size={25} color={'#8D23F6'} className={s.closeBtn}/>
                            </div>
                            <div className={s.contentModal}>
                                <ul>
                                    <li>
                                        <input type="text" placeholder='Заголовок' className={s.modalItem} />
                                    </li>
                                    <li >
                                        <select className={s.modalItem}>
                                            <option disabled selected>Тип напоминания:</option>
                                            <option>Почта</option>
                                            <option>Телефон</option>
                                            <option>СМС</option>
                                        </select>
                                    </li>
                                    <li >
                                        <select className={s.modalItem}>
                                            <option disabled selected>Способ оповещания:</option>
                                            <option>Почта</option>
                                            <option>Телефон</option>
                                            <option>СМС</option>
                                        </select>
                                    </li>
                                    <li >
                                        <input type="number" placeholder='Очки за выполнение' className={s.modalItem}/>
                                    </li>
                                    <li >
                                        <div>
                                            <span>Начало:</span>
                                            <input type="date" className={s.inputModal}/>
                                            <span>Конец:</span>
                                            <input type="date" className={s.inputModal}/>
                                        </div>
                                    </li>
                                    <li >
                                        <input type="file"/>
                                    </li>
                                    <li>
                                        <textarea className={s.modalItem} placeholder='Добавьте описание задачи'/>
                                    </li>

                                </ul>
                            </div>
                            <button className={s.btn}>Создать</button>
                        </div>
                    </div>
                )
            }


        </div>

    );
}

export default CreateModal;