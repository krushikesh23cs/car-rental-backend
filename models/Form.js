// models/Form.js
const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  delivery: { type: String }, // Adjust to Boolean if needed
});

const Form = mongoose.model("Form", formSchema);
module.exports = Form;
