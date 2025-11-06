import React, { useState } from 'react';
import { PlantIcon } from '../components/icons/MiscIcons';

interface AdminLoginPageProps {
  onLogin: (password: string) => boolean;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(password);
    if (!success) {
      setError('Password salah. Silakan coba lagi.');
    } else {
      setError('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white shadow-lg rounded-xl dark:bg-gray-800">
        <div className="flex flex-col items-center">
            <PlantIcon className="h-12 w-12 text-brand-green" />
            <h1 className="text-3xl font-bold font-serif mt-2 text-brand-text-light dark:text-brand-text-dark">Admin Login</h1>
            <p className="text-gray-600 dark:text-gray-400">Alas Floris</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-dark"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;