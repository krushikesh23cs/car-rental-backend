// src/pages/Login.js
import React, { useState } from 'react';
import { Form, Input, Spin, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../resources/auth.css';

AOS.init();

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Using backend endpoint /api/login (adjust if needed)
      const response = await axios.post("/api/login", values);
      localStorage.setItem("user", JSON.stringify(response.data));
      message.success("Login successful!");

      // Redirect to home after successful login
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      message.error(
        error.response?.data?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {loading && (
        <div className="simple-loader">
          <Spin size="large" tip="Logging in..." />
        </div>
      )}
      <div className="auth-form-container" data-aos="zoom-in" data-aos-duration="1500">
        <Form layout="vertical" className="auth-form" onFinish={onFinish}>
          <h1 className="form-title">Login</h1>
          <hr />
          <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Username is required' }]}>
            <Input placeholder="Enter your username" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Password is required' }]}>
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <button className="btn-register mt-2">Login</button>
          <hr />
          <Link to="/register">Click Here to Register</Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
