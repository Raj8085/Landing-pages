
function UtilitiesCustomerSupport() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}


      <header className="w-full bg-gray-700 text-white text-center py-16 relative overflow-hidden">
  {/* Decorative SVG Background */}
  <div className="absolute inset-0 opacity-10">
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
    >
      <path
        fill="currentColor"
        d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,112C672,117,768,139,864,154.7C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-extrabold">Utilities Customer Support</h1>
    <p className="mt-4 text-lg md:text-xl">
      Your trusted partner for resolving utility-related queries efficiently.
    </p>
    <div className="mt-8 flex justify-center space-x-4">
      <a
        href="#contact"
        className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
      >
        Get Support
      </a>
      <a
        href="#contact"
        className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-teal-700 transition transform hover:scale-105"
      >
        Contact Us
      </a>
    </div>
  </div>
</header>




      {/* <header className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,112C672,117,768,139,864,154.7C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Utilities Customer Support</h1>
          <p className="mt-4 text-lg md:text-xl">
            Your trusted partner for resolving utility-related queries efficiently.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Get Support
            </a>
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header> */}

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-6 py-4">
            <a
              href="#electricity"
              className="text-gray-700 hover:text-indigo-600 transition-colors text-lg font-medium"
            >
              Electricity
            </a>
            <a
              href="#heating-cooling"
              className="text-gray-700 hover:text-indigo-600 transition-colors text-lg font-medium"
            >
              Heating & Cooling
            </a>
            <a
              href="#water-sewer"
              className="text-gray-700 hover:text-indigo-600 transition-colors text-lg font-medium"
            >
              Water & Sewer
            </a>
            <a
              href="#internet-cable-phone"
              className="text-gray-700 hover:text-indigo-600 transition-colors text-lg font-medium"
            >
              Internet & Cable
            </a>
            {/* <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 transition-colors text-lg"
            >
              Contact
            </a> */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Electricity Section */}
        <section id="electricity" className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Electricity</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Support Item */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Powering Your Home</h3>
              <p className="text-gray-600">
                Have questions about electricity costs or need assistance with your energy bill? Our support team can guide you through understanding your charges and reducing your consumption.
              </p>
            </div>
            {/* Additional Support Items can be added here */}
          </div>
        </section>

        {/* Heating and Cooling Section */}
        <section id="heating-cooling" className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Heating and Cooling</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Seasonal Energy Bills</h3>
              <p className="text-gray-600">
                Need help with your heating or cooling system bills? Whether it’s gas or oil, our experts can provide advice on optimizing energy use and understanding seasonal fluctuations.
              </p>
            </div>
            {/* Additional Support Items can be added here */}
          </div>
        </section>

        {/* Water and Sewer Services Section */}
        <section id="water-sewer" className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Water and Sewer Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Managing Water Usage</h3>
              <p className="text-gray-600">
                If you have questions about water usage or sewer system fees, we’re here to help. Learn how to manage costs and maintain your home’s water efficiency.
              </p>
            </div>
            {/* Additional Support Items can be added here */}
          </div>
        </section>

        {/* Internet, Cable, and Phone Services Section */}
        <section id="internet-cable-phone" className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Internet, Cable, and Phone Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Connectivity and Entertainment</h3>
              <p className="text-gray-600">
                Confused about your internet, cable, or phone bills? Our support team can assist you in selecting affordable plans and resolving service issues.
              </p>
            </div>
            {/* Additional Support Items can be added here */}
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <section id="contact" className="bg-gradient-to-r from-indigo-50 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Contact Us</h2>
          <p className="text-center text-gray-700 mb-8">
            Need assistance? Fill out the form below, and our customer support team will get back to you shortly.
          </p>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
                  Your Query:
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Describe your query..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow hover:bg-indigo-700 transition transform hover:scale-105 flex items-center justify-center"
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
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white text-center py-6">
        <p>
          © {new Date().getFullYear()} Utilities Customer Support. All Rights Reserved. |{' '}
          <a href="#" className="text-indigo-300 hover:underline">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default UtilitiesCustomerSupport;
