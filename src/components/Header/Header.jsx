import React from 'react'
import s from './Header.module.css'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {CgProfile} from "react-icons/all";
import CreateModal from "../CreateModal/CreateModal";


const Header = () => {

    const [open, setOpen] = React.useState(false);

    return(

        <div className={s.wrapper}>
            <div className={s.content}>
                <ul className={s.headerList}>
                    <li className={s.headerItem}>
                        <div className={s.btnCon}>
                            <button className={s.btn}> <IoMdNotificationsOutline size={42} color={'#8D23F6'}/> </button>
                        </div>
                    </li>
                    <li className={s.headerItem}>
                        <div className={s.btnCon}>
                            <button className={s.btn}> <CgProfile size={42} color={'#8D23F6'}/> </button>
                        </div>
                    </li>
                    <li className={s.headerItem}>
                        <div className={s.btnCon}>
                            <button onClick={() => setOpen(true)} className={s.btnCreate}> Создать задачу </button>
                            {open && <CreateModal open={open} setOpen={setOpen}/>}
                        </div>
                    </li>
                </ul>

            </div>
        </div>

    );

}

export default Header;