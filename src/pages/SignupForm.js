import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { users } from '../data'; // Import dữ liệu users từ file data.js
import 'bootstrap/dist/css/bootstrap.min.css';

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra xem username đã tồn tại chưa
        const existingUser = users.find(user => user.username === formData.username);
        if (existingUser) {
            toast.error('Username already exists. Please choose another one.');
            return;
        }

        // Kiểm tra xem email đã tồn tại chưa
        const existingEmail = users.find(user => user.email === formData.email);
        if (existingEmail) {
            toast.error('Email already exists. Please use another one.');
            return;
        }

        // Tạo user mới từ thông tin người dùng
        const newUser = {
            id: users.length + 1,
            username: formData.username,
            password: formData.password,
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            phoneNumber: formData.phoneNumber,
        };

        // Thêm user mới vào mảng users
        users.push(newUser);
        toast.success('Signup successful!');
        console.log('New user:', newUser);
    };

    return (
        <div className="container">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                    </div>
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
