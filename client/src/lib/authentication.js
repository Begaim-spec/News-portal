import Cookies from "js-cookie";
import axios from "axios";

// export const authentication = (data) => {
//     localStorage.setItem("user", JSON.stringify(data.user))
// }

export const isAuth = () => {
    const user = JSON.parse(localStorage.getItem("user"))
   const token =  Cookies.get('token')
    return !!(token && user);

}

export const clearUser = () => {
   Cookies.remove('token')
    localStorage.removeItem('user')
}

export const startUp = () => {

}