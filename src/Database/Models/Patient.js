import DB from "mongoose";

// Defining the database schema of doctors database.
const patientSchema = new DB.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  userName: {
    type: String,
    minLength: 3,
    maxLength: 30,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    min: 8,
    max: 30,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: Number,
    min: 6000000000,
    max: 9999999999,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    max: 110,
    required: true,
  },

  description: {
    type: String,
    default: "None",
  },
  address: {
    type: String,
    min: 3,
    max: 30,
    default: "India",
  },
  applied: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  status: {
    type: String,
    default: "Not Applied",
  },
  gender: {
    type: String,
    default: "Male",
    required: true,
  },
});

// Defining the model to be followed while using all http requests.
const Patient = DB.model("Patient", patientSchema);

export default Patient;
