import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });

  const onChangedHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    // You can add API call logic here
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="w-96 mx-auto mt-36 text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-heading text-3xl mt-10 font-medium">Signup</h1>
        <p className="text-paragraph text-sm mt-2">Please sign up to continue</p>

        {/* Name */}
        <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <User className="w-4 h-4 text-gray-500" />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChangedHandler}
            placeholder="Your name"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
          />
        </div>
        {/* Email */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangedHandler}
            placeholder="Email id"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 pr-4 gap-2">
          <Lock className="w-4 h-4 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={onChangedHandler}
            placeholder="Password"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
          />
          {/* Eye / EyeOff Toggle */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-primary cursor-pointer"
        >
          Signup
        </button>

        {/* Signup Link */}
        <p className="text-gray-500 text-sm mt-3 mb-11">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
