const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  delivery: { type: String },
});

const Form = mongoose.model("Form", formSchema);
module.exports = Form;
