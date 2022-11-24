import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/api/public/';

class UserService {
    getOpenDocs() {
        return axios.get('http://localhost:8081/rest-api-docs');
    }

    getUserProfile() {
        return axios.get(API_URL + 'profile', { headers: authHeader() });
    }

}

export default new UserService();