import React from 'react';
import AuthService from "../../services/auth.service";

function handleLogout() {
    AuthService.logout()
    window.location = '/';
}

const Logout = () => {
    handleLogout()
    return (<div>Logout complete</div>);

}

export default Logout;