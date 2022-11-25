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
                                <TabList>
                                    <Tab>По времени</Tab>
                                    <Tab>По другой задаче</Tab>
                                </TabList>
                                <TabPanel>
                                    <p>здесь по времени</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>здесь по задаче</p>
                                </TabPanel>


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