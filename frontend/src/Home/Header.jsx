// Header

const SereniLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" className="w-40">
    <path d="M20 40 Q50 20 80 40 T140 40" 
          fill="none" 
          stroke="#4F46E5" 
          strokeWidth="4"
          strokeLinecap="round" />
    
    <g transform="translate(30, 30)">
      <path d="M0,0 C5,-10 15,-10 20,0 C25,-10 35,-10 40,0 C35,5 25,5 20,0 C15,5 5,5 0,0Z" 
            fill="#93C5FD"
            opacity="0.8" />
    </g>
    
    <text x="85" y="50" 
          fontFamily="Sen" 
          fontSize="38" 
          fontWeight="bold"
          textAnchor="middle"
          fill="#1E40AF">
      Sereni
    </text>
    
    <circle cx="160" cy="35" r="3" fill="#4F46E5" opacity="0.6" />
    <circle cx="170" cy="45" r="3" fill="#4F46E5" opacity="0.4" />
    <circle cx="165" cy="25" r="2" fill="#4F46E5" opacity="0.4" />
  </svg>
);

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-green-50 to-blue-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Logo and Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            {/* Added Logo Component */}
            <div className="mb-6 md:mb-8">
              <SereniLogo />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-md font-medium font-sen">
                Welcome to Sereni
              </span>
              <h1 className="text-4xl md:text-6xl font-sen font-bold text-gray-800 leading-tight">
                Find Your Inner Peace with{' '}
                <span className="text-blue-600 relative">
                  Sereni
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 rounded-full"></span>
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Your personal mental wellness companion, guiding you towards balance 
              and tranquility in today&apos;s fast-paced world.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              
              <button className="px-8 py-4 text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300">
                Learn More
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
                <p>
                  <span className="font-semibold">1000+</span> people have found peace with Sereni
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Illustration */}
          <div className="flex-1 max-w-md">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-200 to-green-200 rounded-full opacity-20"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-blue-300 to-green-300 rounded-full opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🧘‍♀️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;