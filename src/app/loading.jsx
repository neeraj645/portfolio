// components/LoadingSpinner.jsx
export default function LoadingSpinner() {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      {/* Screen reader text for accessibility */}
      <span className="sr-only">Loading...</span>
      
      {/* Spinning circle */}
      <div className="relative h-16 w-16">
        {/* Background circle */}
        <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
        
        {/* Animated spinning circle */}
        <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}