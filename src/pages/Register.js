// src/pages/Register.js
import React, { useState } from 'react';
import { Form, Input, Spin, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../resources/auth.css';

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    // Basic client-side check for matching passwords
    if (values.password !== values.cpassword) {
      return message.error("Passwords do not match");
    }
    
    setLoading(true);
    try {
      // Using backend endpoint /api/register (adjust if needed)
      await axios.post("/api/register", {
        username: values.username,
        password: values.password,
      });
      message.success("Registration successful!");
      
      // Redirect to login page after successful registration
      setTimeout(() => {
        navigate("/login");
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
          <Spin size="large" tip="Registering..." />
        </div>
      )}
      <div className="auth-form-container" data-aos="fade-up" data-aos-duration="1500">
        <Form layout="vertical" className="auth-form" onFinish={onFinish}>
          <h2 className="form-title">Create Your Account</h2>
          <hr />
          <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Username is required' }]}>
            <Input placeholder="Choose a username" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Password is required' }]}>
            <Input.Password placeholder="Create a password" />
          </Form.Item>
          <Form.Item name="cpassword" label="Confirm Password" rules={[{ required: true, message: 'Please confirm your password' }]}>
            <Input.Password placeholder="Re-enter your password" />
          </Form.Item>
          <button className="btn-register mt-2 mb-3">Register</button>
          <Link to="/login">Already registered? Login here</Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
