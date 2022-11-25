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

                                        <input type="text" placeholder='Заголовок' className={s.modalInput} />

                                        <select className={s.modalSelect}>
                                            <option disabled selected>Тип напоминания:</option>
                                            <option>Почта</option>
                                            <option>Телефон</option>
                                            <option>СМС</option>
                                        </select>

                                        <select className={s.modalSelect}>
                                            <option disabled selected>Способ оповещания:</option>
                                            <option>Почта</option>
                                            <option>Телефон</option>
                                            <option>СМС</option>
                                        </select>

                                        <input type="number" placeholder='Очки за выполнение' className={s.modalInput}/>

                                        <div className={s.modalData}>
                                            <div>
                                                <span>Начало:</span>
                                                <input type="date" className={s.inputModal}/>
                                            </div>
                                            <div>
                                                <span>Конец:</span>
                                                <input type="date" className={s.inputModal}/>
                                            </div>

                                        </div>

                                        <input className={s.modalFile} type="file"/>

                                        <textarea className={s.modalInput} placeholder='Добавьте описание задачи'/>


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