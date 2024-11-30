import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
       // Prevent form from reloading the page
        try {
            e.preventDefault(); 
            const response = await axios.post(backendUrl+`/api/user/admin`, { email, password });
            if(response.data.success){
                setToken(response.data.token)
            }else{
                    toast.error(response.data.message)
            }
        }catch(error){
                console.log(error);
                toast.error(error.message)
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center w-full">
            <div className="bg-white shadow-sm rounded-lg px-8 py-8 max-w-md">
                <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="rounded-md w-full border border-gray-300 px-3 py-2 outline-none"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-full border border-gray-300 py-2 px-3 rounded-md outline-none"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        className="w-full border border-black py-2 px-4 bg-black text-white rounded-md hover:bg-white hover:text-black transition duration-200"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
