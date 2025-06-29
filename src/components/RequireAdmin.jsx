import React, { useState, useEffect } from 'react';

const RequireAdmin = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isChecking, setIsChecking] = useState(true);

    // Check for admin cookie on component mount
    useEffect(() => {
      const checkAdminCookie = () => {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        const adminCookie = cookies.find(cookie => cookie.startsWith('admin='));
        
        if (adminCookie && adminCookie.split('=')[1] === 'true') {
          setIsAdmin(true);
        } else {
          setShowPasswordForm(true);
        }
        setIsChecking(false);
      };

      checkAdminCookie();
    }, []);

    const handlePasswordSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        });

        const data = await response.json();

        if (response.ok && data.ok) {
          // Login successful - the server will set the httpOnly cookie
          // We also set a client-side cookie for immediate checking
          document.cookie = 'admin=true; path=/; SameSite=Lax';
          setIsAdmin(true);
          setShowPasswordForm(false);
          setPassword('');
        } else {
          setError('Invalid password. Please try again.');
        }
      } catch (err) {
        setError('Login failed. Please check your connection and try again.');
      } finally {
        setIsLoading(false);
      }
    };

    // Show loading state while checking cookie
    if (isChecking) {
      return (
        <div className="min-h-screen bg-[#FDFCF9] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-lg font-medium text-gray-600">Checking authentication...</p>
          </div>
        </div>
      );
    }

    // Show password form if not authenticated
    if (showPasswordForm && !isAdmin) {
      return (
        <div className="min-h-screen bg-[#FDFCF9] flex items-center justify-center">
          <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-[8px_8px_0px_#000] max-w-md w-full mx-4">
            <h2 className="text-3xl font-extrabold text-black mb-6 text-center tracking-tighter">
              Admin Access Required
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Please enter the admin password to access this page.
            </p>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-bold text-black mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border-2 border-black rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter admin password"
                  required
                  disabled={isLoading}
                />
              </div>
              
              {error && (
                <div className="p-3 bg-red-100 border-2 border-red-400 rounded-lg">
                  <p className="text-red-700 font-medium text-sm">{error}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isLoading || !password.trim()}
                className={`w-full font-bold py-3 px-4 rounded-xl border-2 border-black transition-all duration-200 ${
                  isLoading || !password.trim()
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-pink-400 text-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1'
                }`}
              >
                {isLoading ? 'Verifying...' : 'Login'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <a
                href="/"
                className="text-gray-600 hover:text-black font-medium text-sm transition-colors"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    // Render the protected component if authenticated
    if (isAdmin) {
      return <WrappedComponent {...props} />;
    }

    // Fallback (shouldn't reach here)
    return null;
  };
};

export default RequireAdmin;
