import React from 'react';

export default function LoginCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

