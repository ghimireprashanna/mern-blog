import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [Loading, setLoading] = useState(false);
  const navigate= useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success=== false){
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if(res.ok){
        navigate('/signin')
      }
    } catch (error) {
      setErrorMessage(error.message);
            setLoading(false)

    }
  };

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
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label>Your username</label>

              <TextInput
                placeholder="Username"
                id="username"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Your email</label>

              <TextInput
                placeholder="Email"
                id="email"
                type="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password1">Your password</label>

              <TextInput
                placeholder="password"
                id="password"
                type="password"
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              disabled={Loading}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              {
                Loading ? (
                  <>
                  <Spinner size="sm"/>
                  <span className="pl-3">Loading</span>
                  </> 
                ): 'Sign Up'
              }
              
            </Button>
            <OAuth/>
          </form>

          <div className="flex text-sm gap-2 mt-5">
            <span>Have an account?</span>
            <Link to={"/signin"} className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
