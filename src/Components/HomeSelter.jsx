import { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Tailwind will handle the reset (via `@tailwind base;`) and global styles. 
// Remove or comment out old CSS imports if they conflict.
// import '../../src/App.css';

Modal.setAppElement('#root');

const HomeSelter = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on initial render
    setModalIsOpen(true);
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalIsOpen]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#2c3e50] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="text-2xl font-bold">Home Shelter</div>
          <ul className="hidden space-x-6 md:flex">
            <li>
              <a
                href="#home"
                className="transition-colors duration-300 hover:text-[#1abc9c]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="transition-colors duration-300 hover:text-[#1abc9c]"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors duration-300 hover:text-[#1abc9c]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <div
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center bg-[url('/image_1426375531.jpg')] bg-cover bg-center text-white"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2c3e50] bg-opacity-60" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-5 max-w-2xl text-4xl font-bold md:text-5xl">
            Find Your Dream Home
          </h1>
          <p className="mb-8 max-w-lg text-lg">
            Affordable, secure, and easy payment options for all living spaces.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#1abc9c] px-8 py-3 text-lg font-medium text-white transition-transform duration-300 hover:bg-[#16a085] hover:-translate-y-1"
          >
            Get Started Now
          </a>

          {/* Additional Image (if desired) */}
          <img
            src="/Housing-pop-up.jpg"
            alt="Housing Popup"
            className="mt-10 w-[450px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Welcome Pop-up"
        shouldCloseOnOverlayClick={true}
        className="fixed left-0 right-0 top-0 bottom-0 z-[1001] flex items-center justify-center"
        overlayClassName="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="relative mx-auto flex max-w-[50rem] items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute right-2 top-2 z-[1002] text-2xl text-white transition-colors duration-300 hover:text-red-500"
          >
            &times;
          </button>
          <div className="relative flex justify-center items-center">
      {/* Background Image */}
      <img
        src="/Housing-pop-up-no-number.jpg"
        alt="Expert Support"
        className="w-full h-auto object-cover"
      />

      {/* Support Number */}
      <a
        href="tel:+10865449042"
        className="absolute w-96 text-center bottom-10 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700"
        onClick={(e) => {
          e.preventDefault();
          // Trigger keyboard input for phone number
          window.location.href = "tel:+10865449042";
        }}
      >
        +108-654-49042
      </a>
    </div>
        </div>
      </Modal>

      {/* Main Content */}
      <div className="mx-auto w-11/12 max-w-7xl py-10">
        {/* Features Section */}
        <section id="features" className="mb-10">
          <h2 className="relative mb-8 text-center text-3xl font-bold">
            Why Choose Us?
            <span className="absolute left-1/2 bottom-[-10px] block h-1 w-16 -translate-x-1/2 bg-[#1abc9c]" />
          </h2>
          <div className="flex flex-wrap items-start justify-center gap-8">
            <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg sm:w-auto">
              <i className="fas fa-wallet mb-3 text-3xl text-[#1abc9c]" />
              <h3 className="mb-3 text-xl font-semibold">Affordable Solutions</h3>
              <p className="text-gray-600">
                We provide housing solutions and mortgage plans tailored to your
                budget.
              </p>
            </div>
            <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg sm:w-auto">
              <i className="fas fa-th-large mb-3 text-3xl text-[#1abc9c]" />
              <h3 className="mb-3 text-xl font-semibold">Wide Range of Options</h3>
              <p className="text-gray-600">
                Choose from apartments, houses, and other living spaces that suit
                your needs.
              </p>
            </div>
            <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg sm:w-auto">
              <i className="fas fa-credit-card mb-3 text-3xl text-[#1abc9c]" />
              <h3 className="mb-3 text-xl font-semibold">Easy Payment Plans</h3>
              <p className="text-gray-600">
                Flexible payment options designed to make home ownership
                stress-free.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-10 rounded-lg bg-gray-100 p-8 text-center">
          <h2 className="relative mb-8 text-center text-3xl font-bold">
            What Our Clients Say
            <span className="absolute left-1/2 bottom-[-10px] block h-1 w-16 -translate-x-1/2 bg-[#1abc9c]" />
          </h2>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6">
              <p className="mb-2 italic text-gray-700">
                "Home Shelter made finding our dream home so easy and affordable.
                Highly recommend their services!"
              </p>
              <h4 className="font-semibold text-[#2c3e50]">- Jane Doe</h4>
            </div>
            <div>
              <p className="mb-2 italic text-gray-700">
                "The payment plans offered were flexible and suited our budget
                perfectly. Thank you, Home Shelter!"
              </p>
              <h4 className="font-semibold text-[#2c3e50]">- John Smith</h4>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-10">
          <h2 className="relative mb-8 text-center text-3xl font-bold">
            Get in Touch
            <span className="absolute left-1/2 bottom-[-10px] block h-1 w-16 -translate-x-1/2 bg-[#1abc9c]" />
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center">
            Contact us today to explore your options and take the first step
            towards your dream home.
          </p>
          <form
            action="#"
            method="post"
            className="mx-auto flex max-w-xl flex-col space-y-6 rounded-lg bg-white p-6 shadow-md"
          >
            <div>
              <label htmlFor="name" className="mb-2 block font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-[#1abc9c] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-[#1abc9c] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-medium">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-[#1abc9c] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#1abc9c] py-3 text-lg font-semibold text-white transition-transform duration-300 hover:bg-[#16a085] hover:-translate-y-1"
            >
              Submit
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#2c3e50] py-6 text-center text-white">
        <p className="mx-auto max-w-3xl">
          © 2024 Home Shelter &amp; Mortgage Solutions. All Rights Reserved. |{' '}
          <a
            href="#"
            className="text-[#1abc9c] transition-colors duration-300 hover:text-[#16a085]"
          >
            Privacy Policy
          </a>
        </p>
      </footer>
    </>
  );
};

export default HomeSelter;
