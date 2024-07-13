import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [Formdata, setFormdata] = useState({
        email: '',
        password: ''
    });

    const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if the checkbox is checked before submitting
        if (!isChecked) {
            alert("Please check the checkbox to proceed.");
            return;
        }

        try {
            const response = await axios.post("https://login-back-sfqu.onrender.com/login", Formdata);
            console.log(response);
            if (response.status === 200) {
                const { token, user } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user)); 
                alert("Login successfully");
                navigate('/home'); 
            }
        } catch (err) {
            console.log("Error in login", err.message);
            alert("Invalid email or password"); // Basic error handling
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...Formdata, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked); // Update checkbox state
    };

    return (
        <div className=''>
            <div className="container-fluid allpage">
                <div className="col-md-8 col-sm-12 h-auto">
                    <div className='loginpopup'>
                        <div className="row">
                            <div className="col-md-6 bg-image-login">
                                <div className='p-4 mt-5'>
                                    <h1 className='text-secondary fw-bold mt-5'>Hello Everyone</h1>
                                    <p className='fw-bold mt-5'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati culpa, excepturi suscipit id necessitatibus
                                        minus incidunt quo cupiditate doloribus mollitia maiores dicta labore reprehenderit itaque nemo asperiores! Est, beatae.
                                    </p>
                                    <button className='btn btn-warning fw-bold rounded mt-3 loginpagesidebtn'>
                                        Login this Page <span className="p-2"><i className='fa-solid fa-arrow-right'></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='p-4 my-5'>
                                    <h1 className='text-center mt-4'>Login Here</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mt-2">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" onChange={handleChange} value={Formdata.email} className="form-control mt-2" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" onChange={handleChange} value={Formdata.password} className="form-control mt-2" id="password" name="password" placeholder="Enter your Password here" />
                                        </div>
                                        <div className="form-group form-check mt-3">
                                            <input type="checkbox" className="form-check-input" id="check" onChange={handleCheckboxChange} />
                                            <label className="form-check-label" htmlFor="check">Check me out</label>
                                        </div>
                                        <div className='text-center mt-3'>
                                            <button type="submit" className="btn btn-primary px-5" disabled={!isChecked}>Submit</button>
                                        </div>
                                        <div className='text-center mt-2'>
                                            <label>OR</label>
                                        </div>
                                        <div className="form-group mt-2 text-center">
                                            <label>Create a new account <Link to='/register' className='text-decoration-none'>Register Page</Link></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
