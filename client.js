import axios from "axios";

// Adjust URL to match your backend server:
export default axios.create({
  baseURL: "http://10.0.2.2:5000"  // Android emulator
});
