import React from 'react';
import SignupForm from '../components/authentication/signupform';

const SignupPage: React.FC = () => {
  const handleSignupSuccess = () => {
    // Handle the signup success, like redirecting the user or showing a success message
    console.log("Signup successful!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <h1 className="text-xl font-bold mb-4 text-center">Sign Up</h1>
        <SignupForm onSignup={handleSignupSuccess} />
      </div>
    </div>
  );
};

export default SignupPage;