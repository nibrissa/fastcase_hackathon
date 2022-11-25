import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";
import Statistics from "./components/Statistics/Statistics";
import {Route, Routes} from 'react-router-dom';
import Login from "./components/login/login";
import AuthService from "./services/auth.service";
import SingleUser from "./components/SingleUser/SingleUser";
import Friendlist from "./components/Friendlist/Friendlist";
import Registration from "./components/registration/registration";
import Header from "./components/Header/Header";
import TaskSearch from "./components/TaskSearch/TaskSearch";
import Logout from "./components/logout/Logout";
import CreateTask from "./components/CreateTask/CreateTask";


function App(props) {
    const user = AuthService.getCurrentUser();
    if (!user) {

        return (


            <div className={"app-wrapper"}>
                <Navbar/>

                <div className={'app-content'}>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Tasks/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/create' element={<CreateTask/>}/>
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='/logout' element={<Logout/>}/>
                        <Route path='/tasks' element={<Tasks/>}/>
                        <Route path='/tasks/search' element={<TaskSearch/>}/>
                        <Route path='/statistics' element={<Statistics/>}/>
                        <Route path='/my_profile' element={<SingleUser/>}/>
                        {/*<Route path='/:username/profile' element={<Profile/>}/>*/}
                        <Route path='/friendlist' element={<Friendlist/>}/>
                        {/*<Route path='/modal' element={<CreateModal/>}/>*/}

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
