import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#111] px-4">

      {/* Login Card */}
      <div className="border-2 border-emerald-600 rounded-xl p-16 w-full max-w-lg">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center"
        >
         <input value={email}
               onChange={(e) => setEmail(e.target.value)}
    required
    type="email"
    placeholder="Enter your email"
    className="w-full
    bg-transparent
    border-2
    border-gray-600
    rounded-full
    px-6
    py-3
    text-white
    text-lg
    font-medium
    placeholder:text-gray-400
    outline-none

    transition-all
    duration-300
    ease-in-out

    focus:border-emerald-500
    focus:ring-4
    focus:ring-emerald-500/20
    focus:scale-[1.02]"
/>
         <input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    type="password"
    placeholder="Enter password"
    className="w-full
    mt-4
    bg-transparent
    border-2
    border-gray-600
    rounded-full
    px-6
    py-3
    text-white
    text-lg
    font-medium
    placeholder:text-gray-400
    outline-none

    transition-all
    duration-300
    ease-in-out

    focus:border-emerald-500
    focus:ring-4
    focus:ring-emerald-500/20
    focus:scale-[1.02]"
/>
          <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-3 rounded-full font-semibold transition">
            Log In
          </button>
        </form>
      </div>

      {/* Credentials */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <h3 className="text-gray-300 font-semibold mb-4">
          Demo Login Credentials
        </h3>

        <div className="mb-5">
          <p className="text-white font-semibold">Admin</p>
          <p>Email: admin@example.com</p>
          <p>Password: 123</p>
        </div>

        <div>
          <p className="text-white font-semibold">Employee</p>
          <p>
            Email: <span className="underline">employeeName</span>@user.com
          </p>
          <p>Password: 123</p>
        </div>

        <p className="mt-4 text-xs italic text-gray-500">
          Replace <span className="underline">employeeName</span> with the
          employee's first name (e.g. arjun, priya, ravi, sneha).
        </p>
      </div>

    </div>
  );
};

export default Login;