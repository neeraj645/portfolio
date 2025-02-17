// app/error.jsx
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-8 p-8 max-w-2xl">
        <div className="animate-bounce">
          <div className="inline-flex items-center justify-center bg-red-100/80 rounded-full w-32 h-32 border-8 border-red-50">
            <svg
              className="w-20 h-20 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Unexpected Error
          </h1>
          <p className="text-lg text-gray-600">
            {process.env.NODE_ENV === 'development' 
              ? error.message
              : 'Something went wrong. Our team has been notified.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3.5 text-lg font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-100 hover:shadow-red-200"
            aria-label="Retry"
          >
            Retry
          </button>
          <a
            href="/"
            className="px-8 py-3.5 text-lg font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg shadow-gray-100 hover:shadow-gray-200"
          >
            Homepage
          </a>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 p-4 bg-white rounded-lg text-left text-sm text-gray-700 border border-gray-200">
            <summary className="font-medium cursor-pointer">Error details</summary>
            <pre className="mt-4 overflow-auto p-4 bg-gray-50 rounded">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </main>
  );
}