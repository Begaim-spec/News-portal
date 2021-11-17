import axios from "axios";
import Cookies from "js-cookie";
import axiosV1 from '../../services/api'
import {useHistory} from "react-router-dom";
import {history} from "../../lib/history";

export const signIn = (data) => {
        return (dispatch) => {
                axios.post('http://localhost:8000/api/v1/signin', data)
                    .then(({data}) => {
                        Cookies.set('token', data.token, {expires: 1})
                        dispatch({type: 'USER_SIGNIN', payload: data.user})
                        history.push('/')
                    })
        }
}

export const logout = () => {
        Cookies.remove('token')
        return {type: 'USER_LOGOUT'}
}

export const authUser = () => {
    return (dispatch) => {
        axiosV1.get('http://localhost:8000/api/v1/authenticate')
            .then(({data}) => {
                dispatch({type: 'USER_AUTHENTICATE', payload: data.user})
                Cookies.add('token', data.token)
            })
            .catch(() => {
                dispatch({type: 'USER_AUTHENTICATE_FAILED'})
            })
    }
}