import React from 'react';
import ReactDOM from 'react-dom';
import Routers from "./Routers";
import './assets/styles/main.css'
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {store} from "./redux";


ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
       <Routers/>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


