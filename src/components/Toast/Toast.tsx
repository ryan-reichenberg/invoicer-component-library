import React from 'react'

import './toast.css'
export interface ToastProps {
    shown: boolean;
    type: "info" | "success" | "error" | "warn"
    text: string;
    header: string;
}
export const Toast = (props: ToastProps) => {
    let color = 'blue';
    switch (props.type) {
        case 'error':
            color = 'red';
            break;
        case 'warn':
            color = 'yellow';
            break;
        case 'success':
            color = 'green';
            break;
            
            
    }
    return (
        <div className={`w-80 border-l-4 border-${color}-400 shadow-md rounded p-3 py-4 absolute top-0 right-0 mt-4 mr-4 toast ` + (props.shown ? '' :  'hidden')}>
            <div className='flex'>
                {props.type === 'info' && <Info />}
                {props.type === 'error' && <Error />}
                {props.type === 'warn' && <Warn />}
                {props.type === 'success' && <Success />}
                <div className='flex flex-col text-gray-700'>
                    <h1 className='font-bold text-sm'>{props.header}</h1>
                    <p className='text-xs'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

const Info = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
) 
const Error = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
) 
const Success = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
) 
const Warn = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
) 


