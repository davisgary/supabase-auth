import React from 'react';
import ResetPassword from '../components/authentication/resetpassword';

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <h1 className="text-xl font-bold mb-4 text-center">Reset Password</h1>
        <ResetPassword />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
