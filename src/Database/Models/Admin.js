import DB from "mongoose";

// Defining the database schema of doctors database.
const adminSchema = new DB.Schema({
  userName: {
    type: String,
    min: 3,
    max: 15,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    min: 3,
    max: 15,
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
});

// Defining the model to be followed while using all http requests.
const Admin = DB.model("Admin Authentication", adminSchema);

export default Admin;
