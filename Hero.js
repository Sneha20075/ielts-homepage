import React from "react";


function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-50">
      
      {/*Left: Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Achieve Your Dream IELTS Score
        </h2>
        <p className="mb-6 text-gray-700">
          Expert guidance, mock tests, and speaking practice to boost your confidence.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Right: Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="/hero.png"   //public folder ke liye starting slash
        alt="IELTS Banner"
        className="rounded-lg shadow-lg w-full" 
        />
      </div>

    </section>
  );
}

export default Hero;