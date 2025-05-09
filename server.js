// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const connectDB = require('./db');
const userModel = require('./models/userModel');
const Form = require('./models/Form');
const Subscription = require('./models/Subscription');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

// Register
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: 'All fields are required.' });
  try {
    const userExists = await userModel.findOne({ username });
    if (userExists)
      return res.status(400).json({ error: 'User already exists.' });

    const newUser = new userModel({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register. Please try again.' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: 'All fields are required.' });

  try {
    const user = await userModel.findOne({ username });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login. Please try again.' });
  }
});

// Form Submission
app.post('/api/form', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, address, delivery } = req.body;
    if (!fullName || !email || !phoneNumber || !address)
      return res.status(400).json({ error: 'All fields are required.' });

    const newForm = new Form({ fullName, email, phoneNumber, address, delivery });
    await newForm.save();
    res.status(201).json({
      message: 'Form submitted successfully!',
      ownerContact: '+91 9821916687',
      note: 'Call the owner for further assistance.'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit the form. Please try again.' });
  }
});

// Subscription
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email || !/\S+@\S+\.\S+/.test(email))
    return res.status(400).json({ error: 'Invalid email address.' });

  try {
    const newSubscription = new Subscription({ email });
    await newSubscription.save();
    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    if (error.code === 11000)
      return res.status(409).json({ error: 'This email is already subscribed.' });

    res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
