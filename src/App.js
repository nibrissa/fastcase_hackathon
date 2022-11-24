import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";
import Statistics from "./components/Statistics/Statistics";
import {Route, Routes} from 'react-router-dom';
import Login from "./components/login/login";
import AuthService from "./services/auth.service";

function App(props) {
    const user = AuthService.getCurrentUser();
    if (user) {

        return (


            <div className={"app-wrapper"}>
                <Navbar/>
                <div className={'app-content'}>

                    <Routes>

                        <Route path='/tasks'
                               element={<Tasks tasksPage={props.state.tasksPage}/>}/>

                        <Route path='/statistics' element={<Statistics/>}/>

                        <Route path='/login' element={<Login/>}/>

                    </Routes>

                </div>

            </div>


        );
    } else {
        return (


            <div className={"app-wrapper"}>

                <div className={'app-content'}>
                    <Login/>
                </div>

            </div>


        );
    }

}

export default App;
