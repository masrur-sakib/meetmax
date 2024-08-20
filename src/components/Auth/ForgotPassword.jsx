'use client';
import { useUserStore } from '@/store/store';
import Image from 'next/image';

export default function ForgotPassword() {
  const setHaveAccount = useUserStore((state) => state.setHaveAccount);
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12'>
      {/* Section Title and description */}
      <div className='mx-auto max-w-md w-full'>
        <h2 className='mt-10 text-center text-xl sm:text-2xl text-gray-500 sm:text-gray-700 font-bold'>
          Forgot Password
        </h2>
        <h6 className='mt-4 max-w-md text-center text-gray-500 '>
          Enter your details to receive a reset link
        </h6>
      </div>

      {/* Forgot Password Card */}
      <div className='mt-8 px-6 py-8 sm:p-12 mx-auto mt lg:w-7/12 max-w-lg shadow-lg border border-gray-100 rounded-xl'>
        {/* Form */}
        <form>
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
              autoComplete='email'
              required
            />
          </div>

          {/* Submit Button */}
          <div className='mt-6'>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Send
            </button>
          </div>
        </form>

        {/* Sign Up Note */}
        <p
          className='mt-4 text-center text-sm font-semibold text-blue-400 hover:text-blue-500 cursor-pointer'
          onClick={() => setHaveAccount(true)}
        >
          {'< '} Back to Sign In
        </p>
      </div>
    </div>
  );
}
