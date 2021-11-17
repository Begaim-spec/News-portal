import React, {useEffect, useState} from 'react';
import { Router, Route} from "react-router-dom";
import Admin from "./pages/Admin/index";
import Private from "./pages/Private/index";
import Signin from "./pages/Signup/index";
import Signup from "./pages/Signin/index";
import Home from './pages/Home/index'
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import CreateNews from "./pages/CreateNews";
import Blog from "./pages/Blog";
import UserInfo from "./pages/UserInfo";
import './style.css'
import NewsInfo from "./pages/NewsInfo";
import {history} from "./lib/history";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "./redux/actions/userAction";
import Spinner from "./components/Spinner";

const Routers = () => {
    const dispatch = useDispatch()
    const {isLoadingUserInfo} = useSelector(s => s.user)

    useEffect(() => {
            dispatch(authUser())
    }, [])

    if (isLoadingUserInfo){
        return <Spinner/>
    }

    return (
        <Router history={history}>
            <PrivateRoute path='/private' component={Private}/>
            <PrivateRoute path='/create-news' component={CreateNews}/>
            <Route exact path='/'><Home /></Route>
            <Route path='/user/:id' component={UserInfo}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/news-info/:id' component={NewsInfo}/>
            <Route path='/signin'><Signin/></Route>
            <AdminRoute path='/admin' component={Admin}/>
        </Router>
    );
};

export default Routers;