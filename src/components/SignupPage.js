import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';


const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]); // Reset errors
        setSuccessMessage(''); // Reset success message

        try {
            await axios.post('http://localhost:3000/register', {
                username,
                password,
            });
            // If successful, show success message and redirect after 2 seconds
            setSuccessMessage('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                // Generic error if response doesn't fit expected structure
                setErrors([{ msg: "An unexpected error occurred." }]);
            }
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {successMessage && <div className="successMessage">{successMessage}</div>}
            {errors.map((error, index) => (
                <div key={index} className="errorMessage">
                    {error.msg}
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;
