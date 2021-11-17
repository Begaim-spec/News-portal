import React from 'react';
import Layout from "../../components/Layout";

const Home = () => {
    return (
        <Layout>
            <section className="relative pt-8 bg-blueGray-50">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." className="max-w-full rounded-lg shadow-lg"
                             src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"/>
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div
                                className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                                <i className="fas fa-rocket text-xl"></i>
                            </div>
                            <h3 className="text-3xl font-semibold">Welcome to news portal</h3>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span
                                                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                                                className="fas fa-fingerprint"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Sign up and add news
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span
                                                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                                                className="fab fa-html5"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">Share with your opinion</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span
                                                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                                                className="far fa-paper-plane"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">Get access to private pages</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;