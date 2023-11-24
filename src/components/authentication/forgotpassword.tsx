import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Trigger a password reset email
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Check your email for the reset link.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleResetPassword} className="space-y-4">
      {message && <p className={`text-center font-medium ${message.includes('Check your email') ? 'text-green-600' : 'text-red-500'}`}>{message}</p>}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {loading ? 'Sending...' : 'Send Reset Link'}
      </button>
    </form>
  );
};

export default ForgotPassword;
