import React from 'react'
import s from './TriggerModal.module.css'
import {AiOutlineClose} from "react-icons/all";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import AuthService from "../../services/auth.service";

const TriggerModal = ({open, setOpenM, add_parent_trigger}) => {

    let trigger = {
        trigger_type: "BY_TIMER",
        target_task_id: 0,
        author_id: AuthService.getCurrentUser().id,
        timer: "1h"
    }

    function resolve_trigger() {
        add_parent_trigger(trigger)
        setOpenM(false)
    }

    return (
        <div className={"wrapper"}>

            {
                open && (
                    <div className={s.overlay}>
                        <div className={s.modal}>
                            <div className={s.header}>
                                <span className={s.title}>Настроить уведомления</span>
                                <AiOutlineClose onClick={() => setOpenM(false)} size={25} color={'#8D23F6'}
                                                className={s.closeBtn}/>
                            </div>
                            <div className={s.contentModal}>

                                <Tabs>
                                    <TabList className={s.tabList}>
                                        <Tab className={s.tabListItem} onClick={() => trigger.trigger_type = "BY_TIMER"}>По
                                            времени</Tab>
                                        <Tab className={s.tabListItem} onClick={() => trigger.trigger_type = "TASK_OPENED"}>По
                                            другой задаче</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <select className={s.Input}
                                                onChange={e => trigger.timer = e.target.value}>
                                            <option value="1h" selected>Раз в час</option>
                                            <option value="1d">Раз в сутки</option>
                                            <option value="1w">Раз в неделю</option>
                                        </select>

                                    </TabPanel>
                                    <TabPanel>
                                        <div>
                                            <span>Задача</span>
                                            <input type='text' className={s.Input}
                                                   onChange={(e) => trigger.target_task_id = e.target.value}/>
                                        </div>

                                        <select className={s.Input}
                                                onChange={e => trigger.trigger_type = e.target.value}>
                                            <option value="TASK_OPENED" selected>Переоткрыта</option>
                                            <option value="TASK_CLOSED">Закрыта</option>
                                            <option value="TASK_COMPLETED">Завершена</option>
                                        </select>
                                    </TabPanel>

                                    <button className={s.btn} onClick={resolve_trigger}>Подтвердить</button>

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