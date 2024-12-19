// src/App.jsx


function LegalConsultant() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-700 text-white text-center py-8 shadow-md">
        <h1 className="text-4xl font-bold">Legal & Consultancy Customer Support</h1>
        <p className="mt-2 text-lg">Expert advice and assistance for all your legal and consultancy needs.</p>
      </header>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Immigration Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Immigration Services</h2>
          <div className="support-item bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2">Visa and Citizenship Assistance</h3>
            <p className="text-gray-700">
              We provide expert guidance on immigration, including visa applications and citizenship processes. Our team ensures compliance with legal requirements and smooth handling of documentation.
            </p>
          </div>
        </section>

        {/* Tax Consultation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tax Consultation</h2>
          <div className="support-item bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2">Tax Filing and Planning</h3>
            <p className="text-gray-700">
              Need help with tax filing or planning? Our consultants offer personalized tax solutions to ensure compliance and maximize your refunds.
            </p>
          </div>
        </section>

        {/* Business Formation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Business Formation</h2>
          <div className="support-item bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2">Starting Your Business</h3>
            <p className="text-gray-700">
              We assist with registering businesses, choosing legal structures, and ensuring compliance with state and federal regulations.
            </p>
          </div>
        </section>

        {/* Family Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Family Law</h2>
          <div className="support-item bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2">Legal Support for Families</h3>
            <p className="text-gray-700">
              Our legal experts provide compassionate advice on family law matters, including divorce, child custody, and estate planning.
            </p>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Us</h2>
          <p className="mb-6 text-gray-700">
            Need assistance? Fill out the form below, and our customer support team will get back to you shortly.
          </p>
          <div className="contact-form bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="query" className="block text-gray-700 font-medium mb-2">Your Query:</label>
                <textarea
                  id="query"
                  name="query"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Query"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>
          © 2024 Legal & Consultancy Customer Support. All Rights Reserved. |{' '}
          <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}

export default LegalConsultant;