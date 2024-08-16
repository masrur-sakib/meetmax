'use client';
import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';

export default function Auth({ setUser }) {
  const [haveAccount, setHaveAccount] = useState(false);
  return (
    <>
      {haveAccount === true ? (
        <SignIn setHaveAccount={setHaveAccount} setUser={setUser} />
      ) : haveAccount === false ? (
        <SignUp setHaveAccount={setHaveAccount} />
      ) : (
        <ForgotPassword setHaveAccount={setHaveAccount} />
      )}
    </>
  );
}
