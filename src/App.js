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
import SockJS from "sockjs-client";
import {over} from "stompjs";


function App(props) {
    const user = AuthService.getCurrentUser();
    let stompClient = null;

    const connect = () => {
        let Sock = new SockJS('http://localhost:8081/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        stompClient.subscribe('/stream_all', onMessageReceived);
        stompClient.subscribe('/user/' + AuthService.getCurrentUser().username + '/direct_trigger', onPersonalNotificationReceived);
        userJoin()
    }

    const userJoin = () => {
        let chatMessage = {
            content: "JOIN"
        };
        stompClient.send("/stream_all", {}, JSON.stringify(chatMessage));
    }

    const onMessageReceived = (payload) => {
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        // switch (payloadData.status) {
        //     case "JOIN":
        //         if (!privateChats.get(payloadData.senderName)) {
        //             privateChats.set(payloadData.senderName, []);
        //             setPrivateChats(new Map(privateChats));
        //         }
        //         break;
        //     case "MESSAGE":
        //         publicChats.push(payloadData);
        //         setPublicChats([...publicChats]);
        //         break;
        // }
    }

    const onPersonalNotificationReceived = (payload) => {
        console.log(payload);
    }

    const onError = (err) => {
        console.log(err);
    }

    const registerUser = () => {
        connect();
    }

    registerUser();

    if (user) {
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
