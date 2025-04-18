import React from 'react';

const PromoBanner = () => {
  return (
    <div className="relative my-8 md:my-12 lg:my-16 group max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 via-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-xl -z-10" />
      
      {/* Main container */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl dark:shadow-gray-800/30">
        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex-1 flex flex-col justify-center">
            <div className="max-w-lg">
              <span className="inline-block bg-gradient-to-r from-amber-400 to-pink-400 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4 shadow-sm hover:shadow-md transition-shadow">
                Limited Time Offer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                Spring Collection <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">Sale</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Discover fresh styles with up to 50% off. Don't miss out on these exclusive deals!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/shop"
                  className="relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Shop Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/collections"
                  className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md hover:-translate-y-0.5"
                >
                  View All Collections
                </a>
              </div>
            </div>
          </div>

          {/* Promo Product Image */}
          <div className="relative lg:w-2/5 h-64 sm:h-80 lg:h-auto min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-pink-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Spring collection"
              className="w-full h-full object-cover lg:absolute lg:inset-0 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-800 transition-transform hover:scale-105">
              <span className="font-bold text-sm sm:text-base bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
                50% OFF
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;