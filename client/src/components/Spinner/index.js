import React from 'react';
import './style.css'

const Spinner = ({loading}) => {
    return (
        <div className='flex mx-auto items-center justify-center my-40'>
            <div className="swapping-squares-spinner" key={loading}>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
        </div>
)
    ;
};

export default Spinner;