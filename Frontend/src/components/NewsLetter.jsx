import React from 'react';

const NewsLetter = () => {
  return (
    <div className="py-24 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8"> {/* Added horizontal padding */}
      <div className="flex md:flex-row flex-col border border-gray-200 shadow-lg rounded-2xl items-start md:items-center justify-between gap-8 text-sm max-w-5xl w-full bg-white p-6 sm:p-10">
        
        {/* Left Section */}
        <div className="max-w-md w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Subscribe to our <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">Newsletter</span>
          </h1>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Get the latest updates, exclusive offers, and weekly articles straight to your inbox. Stay inspired with no spam, ever.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8"> {/* Adjusted for stacking on small screens */}
            <input
              className="py-3 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-500 transition max-w-full sm:max-w-64 border border-gray-300 rounded-lg" /* Adjusted max-width */
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition-all px-6 py-3 rounded-lg text-white font-medium shadow-md w-full sm:w-auto"> {/* Ensured button is full width on small screens */}
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section - Features */}
        <div className="flex flex-col sm:flex-row gap-8"> {/* Adjusted for stacking on small screens */}
          {/* Feature 1 */}
          <div className="space-y-4 max-w-xs sm:max-w-[180px]"> {/* Adjusted max-width for features */}
            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 w-max p-3 rounded-lg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M12.834 20.167H9.167c-3.457 0-5.186 0-6.26-1.074s-1.074-2.802-1.074-6.26V11c0-3.457 0-5.185 1.074-6.26 1.074-1.073 2.803-1.073 6.26-1.073h3.667c3.456 0 5.185 0 6.259 1.074s1.074 2.802 1.074 6.26v1.833c0 3.457 0 5.185-1.074 6.259-.599.599-1.401.864-2.593.981M6.417 3.667V2.292m9.167 1.375V2.292m4.125 5.958H9.854m-8.02 0h3.552"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-base font-medium text-gray-800">Weekly Articles</h3>
            </div>
            <p className="text-gray-500 text-sm">
              Inspiring and insightful articles curated weekly to keep you updated.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="bg-pink-100 w-max p-3 rounded-lg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M12.834 3.208v6.875-5.958a1.375 1.375 0 1 1 2.75 0v5.958-3.208a1.375 1.375 0 1 1 2.75 0v7.791a5.5 5.5 0 0 1-5.5 5.5H11.8a5.5 5.5 0 0 1-3.76-1.486l-4.546-4.261a1.594 1.594 0 1 1 2.218-2.291l1.623 1.623V5.958a1.375 1.375 0 1 1 2.75 0v4.125-6.875a1.375 1.375 0 1 1 2.75 0"
                    stroke="#DB2777"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-base font-medium text-gray-800">No Spam</h3>
            </div>
            <p className="text-gray-500 text-sm">
              We value your privacy. Expect only quality content without spam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
