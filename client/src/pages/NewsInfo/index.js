import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom";
import Spinner from "../../components/Spinner";
import {ToastContainer, toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {addComment, getPost} from "../../redux/actions/postAction";

const NewsInfo = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {post, isLoading} = useSelector(s => s.post)
    const {user} = useSelector(s => s.user)
    const [value, setValue] = useState({comment: ''})

    const handleChange = (e) => {
        setValue({comment: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addComment(value, id, user._id))
    }

    useEffect(() => {
        dispatch(getPost(id))
        setValue('')
    }, [])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <Layout>
            <ToastContainer/>
            <main className="relative container mx-auto bg-white px-4">
                <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
                    <img className="absolute inset-0 object-cover object-top w-full h-full filter blur"
                         src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                         alt=""/>
                </div>
                <div className="mt-[-10%] w-1/2 mx-auto">
                    <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
                        <img className="w-full h-full absolute inset-0 object-cover"
                             src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                             alt=""/>
                    </div>
                </div>

                <article className="max-w-prose mx-auto py-8">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <h2 className="mt-2 text-sm text-gray-500">Author: {user.name}</h2>
                    <p className="mt-6">{post.description}</p>
                    <h2 className="mt-2 text-sm text-gray-500"> Комментарии: {post.comments.map(elem =>
                    <>
                        <div>{user.name} : {elem.comment}</div>
                    </>
                    ) }
                        Date: {post.createdAt}</h2>
                </article>
                <form onSubmit={handleSubmit} className='flex mx-auto'>
                    <div className='mx-auto  mt-5'>
                        <div className="w-full md:w-full px-3 mb-1 my-1  ">
                            <h2>Добавить комментарий</h2>
                            <textarea
                                className=" h-18 bg-gray-100 rounded border border-gray-400 leading-normal resize-none px-50  py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                name="comment"
                                required
                                value={value.comment}
                                onChange={handleChange}/>
                        </div>
                        <div className="w-full md:w-full flex items-start md:w-full px-3">
                            <div className="-mr-1">
                                <button type='submit'
                                        className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"

                                        value='Post Comment'> Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </Layout>
    );
};

export default NewsInfo;