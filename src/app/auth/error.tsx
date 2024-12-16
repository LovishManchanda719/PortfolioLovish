"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ErrorPage({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string }, 
  reset: () => void 
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error
    console.error('Unexpected Error:', error);
  }, [error]);

  const handleFirebaseError = () => {
    // Specific handling for Firebase authentication errors
    switch (error.message) {
      case 'auth/email-already-in-use':
        return 'This email is already registered. Please use a different email or try logging in.';
      case 'auth/invalid-email':
        return 'The email address is not valid. Please check and try again.';
      case 'auth/user-not-found':
        return 'No user found with this email. Please sign up or check your email.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/too-many-requests':
        return 'Too many unsuccessful login attempts. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-red-600 dark:text-red-400">
            Error Occurred
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {handleFirebaseError()}
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <button 
            onClick={() => reset()}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try Again
          </button>
          <button 
            onClick={() => router.push('/')}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}