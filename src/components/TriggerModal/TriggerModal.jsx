import React from 'react'
import s from './TriggerModal.module.css'
import {AiOutlineClose} from "react-icons/all";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const TriggerModal = ({open, setOpenM}) => {



    return(
        <div className={"wrapper"}>

            {
                open && (
                    <div className={s.overlay}>
                        <div className={s.modal}>
                            <div className={s.header}>
                                <span className={s.title}>Настроить уведомления</span>
                                <AiOutlineClose onClick={() => setOpenM(false)} size={25} color={'#8D23F6'} className={s.closeBtn}/>
                            </div>
                            <div className={s.contentModal}>

                            <Tabs>
                                <TabList className={s.tabList}>
                                    <Tab className={s.tabListItem}>По времени</Tab>
                                    <Tab className={s.tabListItem}>По другой задаче</Tab>
                                </TabList>
                                <TabPanel>
                                    <select className={s.Input}>
                                        <option disabled selected> Выберите частоту уведомлений:</option>
                                        <option>Раз в час</option>
                                        <option>Раз в сутки</option>
                                        <option>Раз в неделю</option>
                                    </select>

                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        <span>Задача</span>
                                        <input type='text' className={s.Input}/>
                                    </div>

                                    <select className={s.Input}>
                                        <option disabled selected> Действие</option>
                                        <option>Открыта</option>
                                        <option>Закрыта</option>
                                        <option>Завершенна</option>
                                    </select>
                                </TabPanel>

                                <button className={s.btn}>Подтвердить</button>


                            </Tabs>

                            </div>
                        </div>
                    </div>
                )
            }


        </div>

    );
}

export default TriggerModal;