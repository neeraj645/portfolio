// app/not-found.jsx
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center ">
      <div className="text-center space-y-6 p-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-9xl md:text-4xl font-bold text-[#FFF7D1] animate-pulse ">
            Page Not Found!!
          </h1>
         
          <p className="text-lg text-gray-600 mt-4">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}