import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className='min-h-screen grid place-content-center'>
      <div className='w-96 flex flex-col items-center bg-white px-2 py-8 rounded-md shadow-lg'>
        <form className='w-full flex flex-col gap-y-2 px-7'>
          <h1 className='w-full text-4xl text-slate-600 text-center font-semibold my-2'>
            Login
          </h1>
          <label htmlFor='email' className='text-slate-500 font-semibold'>
            Email :
          </label>
          <input
            type='email'
            id='email'
            placeholder='email'
            className='p-2 border outline-none rounded-sm focus:ring-2 focus:ring-blue-400'
          />
          <label htmlFor='password' className='text-slate-500 font-semibold'>
            Password :
          </label>
          <input
            type='password'
            id='password'
            placeholder='password'
            className='p-2 border outline-none rounded-sm focus:ring-2 focus:ring-blue-400'
          />

          <button className='bg-sky-500 hover:bg-sky-400 text-white font-semibold px-4 py-2 rounded-md my-5'>
            Login
          </button>
        </form>
        <div>
          <h1>
            Not a email ?{" "}
            <Link href='/signup' className='text-cyan-500'>
              Signup now
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
