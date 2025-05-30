import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInstart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate= useNavigate()
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
      return dispatch(signInFailure('please fill out all fields'));
    }
    try {
      dispatch(signInstart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success=== false){
        dispatch(signInFailure(data.message));
      }
      
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message));

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
            This is a demo project. you can signin with your email and password.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit}
          >
            
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
              disabled={loading}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              {
                loading ? (
                  <>
                  <Spinner size="sm"/>
                  <span className="pl-3">Loading</span>
                  </> 
                ): 'Sign In'
              }
              
            </Button>
            <OAuth/>
          </form>

          <div className="flex text-sm gap-2 mt-5">
            <span>Dont have an account?</span>
            <Link to={"/signup"} className="text-blue-500">
              Sign Up
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

export default Signin;
