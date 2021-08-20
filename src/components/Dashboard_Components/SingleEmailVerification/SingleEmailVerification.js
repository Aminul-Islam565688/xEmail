import React from 'react';
import './SingleEmailVerification.scss';


const SingleEmailVerification = () => {
    return (
        <div className='single-email-verification-main'>
            <h1>Single Email verification</h1>
            <div className='single-email-search'>
                <p>Enter your email id below and check the results!</p>
                <div>
                    <input type="text" placeholder='Enter Email...' />
                    <button>Verify</button>
                </div>
            </div>
        </div>
    );
};

export default SingleEmailVerification;