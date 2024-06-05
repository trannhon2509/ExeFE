import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordRepeat: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
    });

    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMessage('Signup successful!');
                console.log('Signup successful:', data);
                // Đoạn này có thể điều hướng người dùng đến một trang khác sau khi đăng ký thành công.
            })
            .catch(error => {
                setMessage('Signup failed. Please try again.');
                console.error('Error signing up:', error);
            });
    };

    return (
        <div className="container">
            {message && <div className="alert alert-success">{message}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" name="passwordRepeat" value={formData.passwordRepeat} onChange={handleChange} placeholder="Repeat Password" />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
