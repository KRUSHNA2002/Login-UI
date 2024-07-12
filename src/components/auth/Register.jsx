import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
        checked: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.username || !formData.email || !formData.mobile || !formData.password) {
            alert("Please fill all fields");
            return;
        }

        // Checkbox validation
        if (!formData.checked) {
            alert("Please check the box to proceed");
            return;
        }

        try {
            const response = await axios.post("https://login-back-xqxf.onrender.com//register", formData);
            console.log(response);
            alert("User added successfully");
            setFormData({
                username: '',
                email: '',
                mobile: '',
                password: '',
                checked: false
            });
        } catch (error) {
            console.log("Failed to send data to backend", error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <div className="container-fluid allpage">
            <div className="col-md-8 col-sm-12 h-auto">
                <div className='registerpopup'>
                    <div className="row">
                        <div className="col-md-6 bg-image">
                            <div className='p-4 mt-5'>
                                <h1 className='text-secondary fw-bold mt-5'>Hello Everyone</h1>
                                <p className='fw-bold mt-5'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati culpa, excepturi suscipit id necessitatibus
                                    minus incidunt quo cupiditate doloribus mollitia maiores dicta labore reprehenderit itaque nemo asperiores! Est, beatae.
                                </p>
                                <button className='btn btn-warning fw-bold rounded mt-3 pagesidebtn'>
                                    Sign up Page <span className="p-2"><i className='fa-solid fa-arrow-right'></i></span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='p-4'>
                                <h1 className='text-center'>Register Here</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mt-2">
                                        <label htmlFor="username">Username</label>
                                        <input 
                                            type="text" 
                                            onChange={handleChange} 
                                            className="form-control mt-2" 
                                            id="username" 
                                            name="username" 
                                            placeholder="Enter your username" 
                                            value={formData.username} 
                                        />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email address</label>
                                        <input 
                                            type="email" 
                                            onChange={handleChange} 
                                            className="form-control mt-2" 
                                            id="email" 
                                            name='email' 
                                            placeholder="Enter your email" 
                                            value={formData.email} 
                                        />
                                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="mobile">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            onChange={handleChange} 
                                            className="form-control mt-2" 
                                            id="mobile" 
                                            name='mobile' 
                                            placeholder="Enter your mobile here" 
                                            value={formData.mobile} 
                                        />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="password">Password</label>
                                        <input 
                                            type="password" 
                                            onChange={handleChange} 
                                            className="form-control mt-2" 
                                            id="password" 
                                            name='password' 
                                            placeholder="Enter your Password here" 
                                            value={formData.password} 
                                        />
                                    </div>
                                    <div className="form-group form-check mt-3">
                                        <input 
                                            type="checkbox" 
                                            onChange={handleChange} 
                                            className="form-check-input" 
                                            id="check" 
                                            name='checked' 
                                            checked={formData.checked} 
                                        />
                                        <label className="form-check-label" htmlFor="check">Check me out</label>
                                    </div>
                                    <div className='text-center mt-3'>
                                        <button type="submit" className="btn btn-primary px-5">Submit</button>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <label>OR</label>
                                    </div>
                                    <div className="form-group mt-2 text-center">
                                        <label>Already have an account? <Link to='/' className='text-decoration-none'>Login Page</Link></label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
