import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {clearUser, isAuth} from "../../lib/authentication";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actions/userAction";

const Header = () => {
    const user = useSelector(s => s.user.auth)
    const auth = useSelector(s => s.user.auth)
    const dispatch = useDispatch()
    return (
        <header className="text-gray-100 bg-gray-900 body-font shadow w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link to='/'
                        className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Home</Link>
                    <Link to='/private'
                        className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Private</Link>
                    <Link to='/blog'
                          className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Blog</Link>
                    {user.role === 'admin' && auth &&
                        <Link to='/admin'
                              className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Admin</Link>
                    }
                </nav>
                <Link to='/signup'
                    className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
                </Link>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    {
                        user ?
                            <button
                                  className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg"
                            onClick={() =>  dispatch(logout())}>
                                Logout
                            </button>
                             :
                           <>
                               <Link to='signup'
                                     className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
                                   Signup
                               </Link>
                               <Link to='signin'
                                     className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
                                   Signin
                               </Link>

                           </>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;