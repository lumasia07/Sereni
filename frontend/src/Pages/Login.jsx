import { SereniLogo } from '../Home/Header';
import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (error) setError(null);
  };

  const handlePasswordToggle = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Prevent double submission
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Signing you in...");

    try {
      const response = await fetch('http://localhost:3000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // credentials: 'include',
        body: JSON.stringify({
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password');
      }

      toast.update(loadingToast, {
        render: "Login successful! Welcome back 👋",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeButton: true
      });

      // Optional: Redirect to dashboard
      // router.push('/dashboard');

    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'An unexpected error occurred';
      setError(errorMessage);
      toast.update(loadingToast, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 font-sen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden max-w-2xl w-full">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 md:w-1/3 p-8 text-white hidden md:flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6">Welcome Back</h2>
                <p className="text-blue-100 mb-6">Continue your journey towards mindfulness and inner peace.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <p className="text-sm text-blue-100">Track your progress</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <p className="text-sm text-blue-100">Access guided sessions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <p className="text-sm text-blue-100">Connect with community</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-6 md:w-2/3">
              <div className='md:ml-64'>
                <SereniLogo />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Sign In to Your Account</h3>
              
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                    required
                    maxLength={100}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="••••••••"
                      required
                      maxLength={100}
                    />
                    <button
                      type="button"
                      onClick={handlePasswordToggle}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <a href="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}