import s from './Tasks.module.css';
import React from 'react';


const Tasks = (props) => {


    return (

        <div className={s.tasksWrapper}>

            <div className={s.btnWrapper}>
                <button>Создать задачу</button>
            </div>



            <div className={s.tasks}>

            {props.tasksPage.map(board =>

                <div className={s.board}>

                    <div className={s.boardTitle}>{board.name}</div>

                    {board.items.map(item =>
                        <div className={s.item}>
                            <div className={s.itemDesc}>{item.description}</div>
                            <div className={s.itemBtn}>
                                <ul></ul>
                            </div>

                        </div>

                    )}
                </div>
            )}
            </div>
        </div>
        );
}

export default Tasks;







