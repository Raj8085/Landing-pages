import React from 'react';

function EntertainmentHub() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      {/* <header className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">Welcome to Entertainment Hub</h1>
        <p className="mt-4 text-lg md:text-xl">
          Your ultimate guide to TV shows, streaming services, and cable TV options.
        </p>
      </header> */}

<header className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-16 px-4 relative overflow-hidden">
      {/* Decorative SVG Waves */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-white opacity-20">
        <svg viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,112C672,117,768,139,864,154.7C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
            Welcome to Entertainment Hub
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md font-serif">
            Your ultimate guide to TV shows, streaming services, and cable TV options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#services"
              className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-800 transition transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <img
            src="public/EntertaimentHub.jpeg"
            alt="Entertainment Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </header>

      {/* Navigation */}
      <nav className="bg-blue-900 text-white flex flex-wrap justify-center p-4 shadow-md">
        <a href="#platforms" className="mx-3 my-1 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Platforms
        </a>
        <a href="#genres" className="mx-3 my-1 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Genres
        </a>
        <a href="#trending" className="mx-3 my-1 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Trending Shows
        </a>
        <a href="#support" className="mx-3 my-1 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Support
        </a>
        <a href="#contact" className="mx-3 my-1 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Contact Us
        </a>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Platforms Section */}
        <section id="platforms" className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Popular Platforms at Your Fingertips</h2>
          <p className="mb-4">Choose the perfect platform for your entertainment needs:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Netflix:</strong> Enjoy exclusive hits like <em>Stranger Things</em> and <em>The Crown</em>.
            </li>
            <li>
              <strong>Hulu:</strong> Stream the latest episodes of your favorite TV shows.
            </li>
            <li>
              <strong>Disney+:</strong> Dive into the worlds of <em>Star Wars</em>, <em>Marvel</em>, and family-friendly classics.
            </li>
            <li>
              <strong>Amazon Prime Video:</strong> Watch trending shows like <em>Jack Ryan</em>.
            </li>
            <li>
              <strong>Cable TV (Xfinity, Spectrum):</strong> Never miss live sports, breaking news, or reality TV.
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#" className="cta-button bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Compare Plans
            </a>
            <a href="#" className="cta-button bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
              Get Recommendations
            </a>
          </div>
        </section>

        {/* Genres Section */}
        <section id="genres" className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">What Are You Interested In?</h2>
          <ul className="space-y-2">
            <li>🎭 <strong>Dramas:</strong> <em>NCIS</em>, <em>Game of Thrones</em>, <em>Yellowstone</em></li>
            <li>🏈 <strong>Live Sports:</strong> NFL, NBA, MLB</li>
            <li>📰 <strong>News:</strong> CNN, Fox News, MSNBC</li>
            <li>🎤 <strong>Reality TV:</strong> <em>The Voice</em>, <em>Survivor</em>, <em>The Bachelor</em></li>
            <li>🍳 <strong>Food &amp; Lifestyle:</strong> <em>Fixer Upper</em>, <em>Chopped</em>, <em>House Hunters</em></li>
          </ul>
          <div className="mt-6">
            <a href="#" className="cta-button bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
              Explore Shows by Genre
            </a>
          </div>
        </section>

        {/* Trending Section */}
        <section id="trending" className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Trending Now Across Platforms</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>The Mandalorian</strong> (<em>Disney+</em>): A Star Wars universe favorite.
            </li>
            <li>
              <strong>Yellowstone</strong> (<em>Paramount</em>): Family drama at its best.
            </li>
            <li>
              <strong>The Last of Us</strong> (<em>HBO Max</em>): Post-apocalyptic action-packed thriller.
            </li>
            <li>
              <strong>Survivor</strong> (<em>CBS</em>): The ultimate reality competition.
            </li>
          </ul>
          <div className="mt-6">
            <a href="#" className="cta-button bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
              Start Watching Today
            </a>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Need Help?</h2>
          <p className="mb-4">Our Customer Support Team is here for you!</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Finding a specific show or platform</li>
            <li>Choosing the best streaming service for your needs</li>
            <li>Resolving cable TV setup or issues</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#" className="cta-button bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition">
              Chat Now with an Expert
            </a>
            <a href="#" className="cta-button bg-yellow-600 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700 transition">
              Submit Your Query
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Us</h2>
          <p className="mb-4">Have Questions? We’re Here to Help!</p>
          <ul className="space-y-2">
            <li><strong>Phone:</strong> +1-800-ENTERTAIN</li>
            <li><strong>Email:</strong> support@entertainmenthub.com</li>
            <li><strong>Live Chat:</strong> Available 24/7</li>
          </ul>
          <p className="mt-4">
            <strong>Follow Us:</strong> 
            <a href="#" className="text-blue-500 hover:underline mx-2">Facebook</a> | 
            <a href="#" className="text-blue-400 hover:underline mx-2">Twitter</a> | 
            <a href="#" className="text-pink-500 hover:underline mx-2">Instagram</a>
          </p>
        </section>
      </main>

      {/* Contact Form */}
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
                Your Query
              </label>
              <textarea
                id="query"
                name="query"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                placeholder="Describe your query..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-4">
        <p>© 2024 Entertainment Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default EntertainmentHub;
