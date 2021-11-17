import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import Layout from "../../components/Layout";
import axios from "axios";

const CreateNews = () => {
    const userId = JSON.parse(localStorage.getItem("user"))

    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/v1/news", {...values, user: userId._id})
            .then(() => {
                toast.success("Ваш пост успешно добавлен!")
                setValues({title: '', description: ''})
            })
            .catch((e) => {
                toast.error(e.response.data.message)
                setValues({title: '', description: ''})
            })
    }
    return (
        <Layout>
            <ToastContainer/>
            <div className="flex mx-auto items-center justify-center shadow-lg mt-24 mx-8 mb-4 max-w-lg">
                <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Title</h2>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <input
                                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full  py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                name="title"
                                type='text'
                                required
                                value={values.title}
                                onChange={handleChange}
                                placeholder='Type Your title'/>
                        </div>
                        <div className="w-full md:w-full px-3 mb-2 my-10 ">
                            <input
                                className=" h-24 bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full  py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                name="description"
                                type='text'
                                required
                                value={values.description}
                                onChange={handleChange}
                                placeholder='Type Your description'/>
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
            </div>
        </Layout>
    );
};

export default CreateNews;