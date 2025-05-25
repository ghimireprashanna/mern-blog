import { Button, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to={"/"} className="font-bold  text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              pro's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. you can signup with your email and password.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <label>Your username</label>

              <TextInput
                placeholder="Username"
                id="username"
                type="text"
                required
              />
            </div>
            <div>
              <label>Your email</label>

              <TextInput placeholder="Email" id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="password1">Your password</label>

              <TextInput
                placeholder="password"
                id="password"
                type="password"
                required
              />
            </div>
            
            <Button type="submit" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Submit</Button>
            
          </form>

          <div className="flex text-sm gap-2 mt-5">
              <span>Have an account?</span>
              <Link to={'/signin'} className='text-blue-500'>Sign In</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
