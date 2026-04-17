import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Redux imports
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';

axios.defaults.withCredentials = true;

const Login = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://shop-backend-mz62.onrender.com/api/login",
        { email: email.trim(), password: password.trim() },
        {
          withCredentials: true,
          timeout: 15000,
          headers: { "Content-Type": "application/json" },
        }
      );

      // Show success message
      alert(res.data.message || "Login successful");
      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("userName", res.data.user.name);

      // Save username in Redux
      dispatch(login(res.data.user.name));

      // Navigate to homepage
      navigate("/");

    } catch (err) {
      alert(
        err.response?.data?.message ||
        err.message ||
        "Something went wrong, please try again."
      );
    }
  };

  return (
    <form 
      onSubmit={handleLogin} 
      className="flex flex-col gap-4 w-96 mx-auto mt-20 shadow-lg p-10 rounded-lg"
    >
      <h1 className="mx-auto text-xl font-semibold">Login</h1>

      <input
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="shadow-lg rounded-xl px-3 py-2 border"
        required
      />

      <input
        type="password"
        placeholder="Password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="shadow-lg rounded-xl px-3 py-2 border"
        required
      />

      <button 
        type="submit" 
        className="bg-blue-900 w-24 mx-auto rounded-lg text-white py-2"
      >
        Login
      </button>

      <p className="mt-10 text-center">
        Account nahi hai?
        <span 
          className="bg-blue-600 text-white px-2 py-1 rounded-xl ml-2 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Register karo
        </span>
      </p>
    </form>
  );
};

export default Login;