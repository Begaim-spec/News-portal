import React from 'react';
import axios from "axios";
import { GoogleLogin } from 'react-google-login';


const Google = () => {
    const responseGoogle = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/v1/google-login',
            data: {idToken: response.tokenId}
        })
            .then(response => {
               console.log('GOOGLE_SIGNIN_SUCCESS', response)
            })
            .catch(error => {
                console.log('GOOGLE_SIGNIN_ERROR', error.response);
            });
    };

    return (
        <div className='pb-3'>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (

                )}
            />

        </div>
    );
};

export default Google;