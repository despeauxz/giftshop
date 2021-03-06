import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';


/**
 * Represents the App Component
 * @returns {component} App
 */
const App = () => 
    <Fragment>
        <ToastContainer />
        <Routes />
    </Fragment>
;

export default App;