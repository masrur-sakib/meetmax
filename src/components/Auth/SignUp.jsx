'use client';

import Image from 'next/image';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useUserStore } from '@/store/store';

export default function SignUp() {
  const setHaveAccount = useUserStore((state) => state.setHaveAccount);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData }),
    });

    if (response.ok) {
      setFormData({
        name: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
      });
      setHaveAccount(true);
    } else {
      const data = await response.json();
      alert(data.error);
    }
  };
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12'>
      {/* Section Title and description */}
      <div className='mx-auto max-w-md w-full'>
        <h2 className='mt-10 text-center text-xl sm:text-2xl text-gray-500 sm:text-gray-700 font-bold'>
          Getting Started
        </h2>
        <h6 className='mt-4 max-w-md text-center text-gray-500 '>
          Create an account to continue and connect with people.
        </h6>
      </div>

      {/* Sign Up Card */}
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
              placeholder='Your Email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Name Input */}
          <div className='mt-4 flex justify-start items-center space-x-2 w-full h-10 rounded-md px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300'>
            <Image
              src='/icons/Smile.png'
              alt='Name Icon'
              width={15}
              height={15}
              priority
            />
            <input
              id='name'
              className='w-full h-full text-gray-500 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6'
              name='name'
              type='name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder='Your Name'
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
              placeholder='Create Password'
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

          {/* DOB & Gender */}
          <div className='mt-2 sm:flex sm:justify-between sm:items-center sm:space-x-4'>
            {/* Date of Birth Input */}
            <div className='mt-4 flex justify-start items-center space-x-2 w-full h-10 rounded-md px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300'>
              <Image
                src='/icons/Calendar.png'
                alt='DOB Icon'
                width={15}
                height={15}
                priority
              />
              <DatePicker
                id='name'
                className='w-full h-full rounded-md border-0 text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6'
                name='dateOfBirth'
                selected={formData.dob}
                onChange={(date) => setFormData({ ...formData, dob: date })}
                placeholderText='Date of birth'
                required
              />
            </div>

            {/* Gender Input */}
            <div className='mt-4 flex justify-start items-center space-x-4 w-full h-10 rounded-md px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300'>
              <Image
                src='/icons/Gender.png'
                alt='Name Icon'
                width={15}
                height={15}
                priority
              />
              <div className='flex block w-full h-full rounded-md border-0'>
                <div className='flex items-center me-2'>
                  <input
                    id='inline-radio'
                    className='w-4 h-4 text-blue-600 border-gray-300'
                    type='radio'
                    value='male'
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    name='inline-radio-group'
                  />
                  <label
                    htmlFor='inline-radio'
                    className='ms-2 text-sm text-gray-500'
                  >
                    Male
                  </label>
                </div>
                <div className='flex items-center me-2'>
                  <input
                    id='inline-2-radio'
                    className='w-4 h-4 text-blue-600 border-gray-300'
                    type='radio'
                    value='female'
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    name='inline-radio-group'
                  />
                  <label
                    htmlFor='inline-2-radio'
                    className='ms-2 text-sm text-gray-500'
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className='mt-6'>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-blue-500 hover:bg-blue-400'
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Sign In Note */}
        <p className='mt-4 text-center text-sm text-gray-500 cursor-pointer'>
          Already have an account?{' '}
          <span
            className='font-semibold leading-6 text-blue-400 hover:text-blue-500'
            onClick={() => setHaveAccount(true)}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
