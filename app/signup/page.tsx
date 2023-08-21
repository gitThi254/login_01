"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [loading, setLoading] = useState(false);

  const handleClickSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      console.log("Signup success", res.data);
      router.push("/login");
    } catch (error: any) {
      console.log("error signup : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen grid place-content-center'>
      <div className='w-96 flex flex-col items-center bg-white px-2 py-8 rounded-md shadow-lg'>
        <form
          className='w-full flex flex-col gap-y-2 px-7'
          onSubmit={handleClickSubmit}
        >
          <h1 className='w-full text-4xl text-slate-600 text-center font-semibold my-2'>
            {loading ? "Processing" : "Sign Up"}
          </h1>
          <label htmlFor='username' className='text-slate-500 font-semibold'>
            Username :
          </label>
          <input
            type='text'
            id='username'
            placeholder='username'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className='p-2 border outline-none rounded-sm focus:ring-2 focus:ring-blue-400'
          />
          <label htmlFor='email' className='text-slate-500 font-semibold'>
            Email :
          </label>
          <input
            type='email'
            id='email'
            placeholder='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className='p-2 border outline-none rounded-sm focus:ring-2 focus:ring-blue-400'
          />
          <label htmlFor='password' className='text-slate-500 font-semibold'>
            Password :
          </label>
          <input
            type='password'
            id='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder='password'
            className='p-2 border outline-none rounded-sm focus:ring-2 focus:ring-blue-400'
          />

          <button className='bg-sky-400 hover:bg-sky-500 text-white font-semibold px-4 py-2 rounded-md my-5'>
            Login
          </button>
        </form>
        <div>
          <h1>
            Already have an account ?{" "}
            <Link href='/login' className='text-cyan-500'>
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
