'use client';
import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';

export default function Auth() {
  const [haveAccount, setHaveAccount] = useState(false);
  return (
    <>
      {haveAccount === true ? (
        <SignIn setHaveAccount={setHaveAccount} />
      ) : haveAccount === false ? (
        <SignUp setHaveAccount={setHaveAccount} />
      ) : (
        <ForgotPassword setHaveAccount={setHaveAccount} />
      )}
    </>
  );
}
