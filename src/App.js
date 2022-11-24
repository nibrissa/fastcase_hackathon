import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";
import Statistics from "./components/Statistics/Statistics";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/login/login";

function App(props) {

    return (

        <BrowserRouter>

            <div className={"app-wrapper"}>
                <Navbar/>
                <div className={'app-content'}>

                    <Routes>

                        <Route path='/tasks'
                               element={<Tasks
                                   tasksPage={props.state.tasksPage}/>}/>

                        <Route path='/statistics' element={<Statistics/>}/>

                        <Route path='/login' element={<Login/>}/>

                    </Routes>

                </div>

            </div>

        </BrowserRouter>


    );

}

export default App;
