import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutePath from '../config/RoutePath';
import { users } from '../data'; // Import dữ liệu users từ file data.js

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Tìm user trong data.js dựa trên email và password nhập vào
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      // Nếu tìm thấy user, đăng nhập thành công
      toast.success('Sign in success');
      localStorage.setItem('token', user.token); // Lưu token vào localStorage
      // Redirect to home page
      window.location.href = RoutePath.HOME;
    } else {
      // Nếu không tìm thấy user, đăng nhập thất bại
      toast.error('Sign in failed');
    }
  };

  return (
    <div className="container">
      <h2 className='text-white'>Login</h2>
      <form onSubmit={handleLogin} className='my-5'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Địa chỉ email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">mật khẩu</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary my-3">Đăng nhập</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
