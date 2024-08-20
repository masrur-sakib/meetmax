'use client';

import { useUserStore } from '@/store/store';
import Image from 'next/image';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const setHaveAccount = useUserStore((state) => state.setHaveAccount);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      ...formData,
      redirect: false,
    });
    if (result?.error) {
      alert(result.error);
    } else {
      console.log('Sign In Success');
      router.push('/');
    }
  };
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12'>
      {/* Section Title and description */}
      <div className='mx-auto max-w-md w-full'>
        <h2 className='mt-10 text-center text-xl sm:text-2xl text-gray-500 sm:text-gray-700 font-bold'>
          Sign In
        </h2>
        <h6 className='mt-4 max-w-md text-center text-gray-500 '>
          Welcome back, you have been missed!
        </h6>
      </div>

      {/* Sign In Card */}
      <div className=' mt-8 px-6 py-8 sm:p-12 mx-auto lg:w-7/12 max-w-lg shadow-lg border border-gray-100 rounded-xl'>
        {/* Google & Apple Sign in buttons */}
        <div className='flex justify-evenly items-center space-x-2 sm:space-x-4'>
          {/* Google Sign in */}
          <button
            type='button'
            className='px-2 sm:px-3 py-3 mb-2 text-xs sm:text-sm text-gray-700 outline-none bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 flex justify-between items-center space-x-1 sm:space-x-4'
          >
            <Image
              className='sm:w-4'
              src='/icons/Google.png'
              alt='Google Icon'
              width={10}
              height={15}
              priority
            />
            <span>Log in with Google</span>
          </button>

          {/* Apple Sign in */}
          <button
            type='button'
            className='px-2 sm:px-3 py-3 mb-2 text-xs sm:text-sm text-gray-700 outline-none bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 flex justify-between items-center space-x-1 sm:space-x-4'
          >
            <Image
              className='sm:w-4'
              src='/icons/Apple.png'
              alt='Google Icon'
              width={10}
              height={15}
              priority
            />
            <span>Log in with Apple</span>
          </button>
        </div>

        {/* hr with text */}
        <div className='flex items-center justify-center w-full'>
          <hr className='w-full h-px my-6 bg-gray-300 border-1 border-gray-300' />
          <span className='absolute px-3 text-sm sm:font-medium text-gray-900 bg-white'>
            OR
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className='mt-2 flex justify-start items-center space-x-2 w-full h-10 rounded-md px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300'>
            <Image
              src='/icons/Mail.png'
              alt='Name Icon'
              width={15}
              height={15}
              priority
            />
            <input
              id='email'
              className='w-full h-full text-gray-500 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6'
              name='email'
              type='email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder='Your Email'
              required
            />
          </div>

          {/* Password Input */}
          <div className='mt-4 relative flex justify-start items-center space-x-2 w-full h-10 rounded-md px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300'>
            <Image
              src='/icons/Lock.png'
              alt='Name Icon'
              width={15}
              height={15}
              priority
            />
            <input
              type={showPassword ? 'text' : 'password'}
              className='block w-full h-full text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6'
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder='Enter Password'
              required
            />
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none'
            >
              {showPassword ? (
                <svg
                  className='shrink-0 size-3.5'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'></path>
                  <circle cx='12' cy='12' r='3'></circle>
                </svg>
              ) : (
                <svg
                  className='shrink-0 size-3.5'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24'></path>
                  <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'></path>
                  <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'></path>
                  <line x1='2' x2='22' y1='2' y2='22'></line>
                </svg>
              )}
            </button>
          </div>

          {/* Remember me & Forgot Password */}
          <div className='mt-4 mx-2 flex justify-between items-center space-x-4'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                type='checkbox'
                value=''
                className='w-4 h-4'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 text-xs sm:text-sm text-gray-600 hover:text-blue-500 cursor-pointer'
              >
                Remember me
              </label>
            </div>
            <span
              className='text-xs sm:text-sm text-gray-600 hover:text-blue-500 cursor-pointer'
              onClick={() => setHaveAccount('forgot-password')}
            >
              Forgot Password?
            </span>
          </div>

          {/* Submit Button */}
          <div className='mt-6'>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-blue-500 hover:bg-blue-400'
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Note */}
        <p className='mt-4 text-center text-sm text-gray-500 cursor-pointer'>
          {"You haven't any account?"}{' '}
          <span
            className='font-semibold leading-6 text-blue-400 hover:text-blue-500'
            onClick={() => setHaveAccount(false)}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
