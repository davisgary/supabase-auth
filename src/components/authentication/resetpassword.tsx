import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update the user's password
      const { error } = await supabase.auth.updateUser({ password: newPassword });

      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('Your password has been updated successfully.');
      }
    } catch (error: any) {
      setMessage(`An error occurred: ${error.message || 'Unknown error'}`);
    }

    setLoading(false);
  };

  return (
      <form onSubmit={handlePasswordReset} className="space-y-4">
        {message && (
          <p className={`text-center font-medium ${message.includes('successfully') ? 'text-green-600' : 'text-red-500'}`}>
            {message}
          </p>
        )}
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
  );
};

export default ResetPassword;
