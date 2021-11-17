import React, {useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {
    const [users, setUsers] = useState({
        name: '',
        email: '',
        password: ''
    })
 const handleChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
 }
const handleSubmit = (e) => {
        e.preventDefault()
    axios({
        method: "POST",
        url: "http://localhost:8000/api/v1/signup",
        data: users
    }).then(({data}) => {
        toast.success(JSON.stringify(data))
        setUsers({name: '', email: '', password: ''})
    })
        .catch((e) => {
            toast.error(e.response.data.message)
            setUsers({name: '', email: '', password: ''})
        })
}
    return (
        <Layout>
            <ToastContainer/>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
                        <div
                            className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                        >
                            Signup
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="name"
                            >
                               Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="name"
                                type="text"
                                required
                                placeholder="Name"
                                onChange={handleChange}
                                value={users.name}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                type="email"
                                required
                                placeholder="Email"
                                onChange={handleChange}
                                value={users.email}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                onChange={handleChange}
                                value={users.password}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;