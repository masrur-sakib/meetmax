'use client';
import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Auth = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  return (
    <>
      {haveAccount === true ? (
        <SignIn setHaveAccount={setHaveAccount} />
      ) : haveAccount === false ? (
        <SignUp setHaveAccount={setHaveAccount} />
      ) : (
        <div>Forgot Password</div>
      )}
    </>
  );
};

export default Auth;
