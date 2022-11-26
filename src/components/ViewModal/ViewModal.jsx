import React from 'react'
import s from './ViewModal.module.css'
import {AiOutlineClose} from "react-icons/all";

const ViewModal = ({open, setOpenM, task}) => {


    return (
        <div className={"wrapper"}>

            {
                open && (
                    <div className={s.overlay}>
                        <div className={s.modal}>
                            <div className={s.header}>
                                <span className={s.title}>Просмотр задачи</span>
                                <AiOutlineClose onClick={() => setOpenM(false)} size={25} color={'#8D23F6'}
                                                className={s.closeBtn}/>
                            </div>
                            <div className={s.contentModal}>

                                <p className={s.modalInput}>{task.name}</p>
                                {/*<p className={s.modalInput}>Тип напоминания:</p>*/}
                                <p className={s.modalInput}>{task.points}</p>
                                {/*<div className={s.modalData}>*/}
                                {/*    <div>*/}
                                {/*        <span>Начало:</span>*/}
                                {/*        <input type="date" className={s.inputModal}/>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <span>Конец:</span>*/}
                                {/*        <input type="date" className={s.inputModal}/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <p className={s.modalInput}>{task.description}</p>

                            </div>
                        </div>
                    </div>
                )
            }


        </div>

    );
}

export default ViewModal;