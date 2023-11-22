import React from 'react';
import SigninForm from '../components/authentication/signinform';

const SigninPage: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
          <h1 className="text-xl font-bold mb-4 text-center">Sign In</h1>
          <SigninForm />
        </div>
      </div>
    );
  };
  
  export default SigninPage;