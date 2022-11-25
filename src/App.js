import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";
import Statistics from "./components/Statistics/Statistics";
import {Route, Routes} from 'react-router-dom';
import Login from "./components/login/login";
import AuthService from "./services/auth.service";
import SingleTask from "./components/SingleTask/SingleTask";

function App(props) {
    const user = AuthService.getCurrentUser();
    if (user) {

        return (


            <div className={"app-wrapper"}>
                <Navbar/>
                <div className={'app-content'}>

                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/tasks'
                               element={<Tasks tasksPage={props.state.tasksPage}/>}/>
                        <Route path='/task/:id' element={<SingleTask/>}/>
                        {/*<Route path='/tasks/search' element={<TaskSearch/>}/>*/}
                        <Route path='/statistics' element={<Statistics/>}/>
                        {/*<Route path='/my_profile' element={<MyProfile/>}/>*/}
                        {/*<Route path='/:username/profile' element={<Profile/>}/>*/}
                        {/*<Route path='/friendlist' element={<Friendlist/>}/>*/}

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
