import s from './Statistics.module.css';
import React from 'react';

const Statistics = () =>{
    return(
        <div className={s.wrapper}>
            <div className={s.content}>

                <table>
                    <thead className={s.thead}>
                    <tr>
                        <th>№</th>
                        <th>ФИО</th>
                        <th>Период</th>
                        <th>Открыто</th>
                        <th>Закрыто</th>
                        <th>Завершенно</th>
                        <th>Баллы</th>
                    </tr>
                    </thead>
                    <tbody className={s.tbody}>
                    <tr>
                        <td>1</td>
                        <td>Иванов И.И.</td>
                        <td>12.03.22-12.04.22</td>
                        <td>2</td>
                        <td>178</td>
                        <td>23</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Иванов И.И.</td>
                        <td>12.03.22-12.04.22</td>
                        <td>2</td>
                        <td>178</td>
                        <td>23</td>
                        <td>15</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>



    );


}

export default Statistics;