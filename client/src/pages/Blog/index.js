import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {Link} from "react-router-dom";
import {isAuth} from "../../lib/authentication";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import Spinner from "../../components/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../redux/actions/blogAction";

const Blog = () => {
            const dispatch = useDispatch()
             const auth = useSelector(s => s.user.auth)

    const {news, isLoading} = useSelector(s => s.blog)

    useEffect(() => {
        dispatch(getNews())
    }, [])



    return (
        <Layout>
            {
                isLoading ? Spinner :
                    <div className='flex justify-between items-center md:container md:mx-auto'>
                        <h1 className="text-4xl font-black my-10">Blog</h1>
                        {
                             <Link to='/create-news'
                                              className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 mt-20 mx-8 py-2 px-3 rounded-lg "
                            >
                                create News
                            </Link>
                        }
                    </div>
            }
            {
                news.map(item =>
                <div className=" mb-20 ">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between"><span className="font-light text-gray-600">Дата: {item.updatedAt}</span>
                </div>
                <div className="mt-2">
                <Link to={`/news-info/${item._id}`} className="text-2xl font-bold text-gray-700 hover:underline">{item.title}</Link>
                <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4"><Link to={`/news-info/${item._id}`}
                className=" border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Read
                more</Link>
                <div><a href="#" className="flex items-center"><img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                <h1 className="font-bold text-gray-700 hover:underline">
                <Link to={`/user/${item.user?._id}`}>{item?.user?.name}</Link>
                </h1>
                </a></div>
                </div>
                </div>
                </div>
                )
            }
            }
        </Layout>
    );
};

export default Blog;