

// import  { useState } from 'react';
// // import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

// function ContentConsumer() {
//   const faqData = [
//     {
//       id: 'streaming',
//       title: 'Streaming Services',
//       questions: [
//         'How can I troubleshoot buffering issues on Netflix or Hulu?',
//         'How do I set up parental controls on Disney+?',
//         'What are the most popular shows on streaming platforms?',
//         'How do I cancel or manage my subscription?'
//       ],
//       linkText: 'Streaming Support Page',
//       linkHref: '#'
//     },
//     {
//       id: 'socialmedia',
//       title: 'Social Media Content',
//       questions: [
//         'How do I save or share viral videos from TikTok or Instagram?',
//         'What are the top trends in short-form content?',
//         'How can I protect my account from hackers?',
//         'How do I report inappropriate or offensive content?'
//       ],
//       linkText: 'Social Media Content FAQs',
//       linkHref: '#'
//     },
//     {
//       id: 'tvshows',
//       title: 'TV Shows (Broadcast & Cable)',
//       questions: [
//         'What are the most-watched reality TV shows?',
//         'How do I access live sports coverage?',
//         'What options are available for cord-cutters?',
//         'How can I set up DVR for my favorite shows?'
//       ],
//       linkText: null,
//       linkHref: null
//     },
//     {
//       id: 'movies',
//       title: 'Movies',
//       questions: [
//         'How can I find family-friendly movie recommendations?',
//         'What are the best platforms to rent or buy digital movies?',
//         'How do I get access to 4K streaming for blockbusters?',
//         'What are the latest action or comedy movie releases?'
//       ],
//       linkText: null,
//       linkHref: null
//     },
//     {
//       id: 'gaming',
//       title: 'Gaming Content',
//       questions: [
//         'How do I set up a Twitch account to watch gaming streams?',
//         'What are the most popular games in the USA?',
//         'How do I participate in esports tournaments?',
//         'How can I troubleshoot issues with streaming platforms?'
//       ],
//       linkText: null,
//       linkHref: null
//     },
//     {
//       id: 'podcasts',
//       title: 'Podcasts and Audio Content',
//       questions: [
//         'How do I subscribe to podcasts on Spotify or Apple Podcasts?',
//         'What are the best podcast apps for Android and iOS?',
//         'How do I find trending podcasts in true crime or comedy?',
//         'How can I improve audio quality while listening?'
//       ],
//       linkText: null,
//       linkHref: null
//     },
//     {
//       id: 'tiktok',
//       title: 'TikTok Trends',
//       questions: [
//         'How do I join TikTok dance challenges?',
//         'What are the most viral trends and songs right now?',
//         'How can I increase engagement on my TikTok videos?',
//         'How do I report or block harmful content?'
//       ],
//       linkText: null,
//       linkHref: null
//     },
//     {
//       id: 'news',
//       title: 'News & Informational Content',
//       questions: [
//         'How do I subscribe to CNN, Fox News, or NYT apps?',
//         'What are the most reliable news apps?',
//         'How can I customize my news feed for local updates?',
//         'How do I access live news coverage on streaming platforms?'
//       ],
//       linkText: null,
//       linkHref: null
//     }
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">

// <header className="relative bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-center py-12 overflow-hidden">
//   {/* Decorative SVG Waves */}
//   <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white opacity-20">
//     <svg viewBox="0 0 1440 320">
//       <path
//         fill="currentColor"
//         d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,165.3C672,171,768,149,864,144C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//       ></path>
//     </svg>
//   </div>

//   {/* Content Container */}
//   <div className="relative z-10 max-w-4xl mx-auto px-4">
//     <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
//       Content Consumption Customer Support
//     </h1>
//     <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">
//       Frequently Asked Questions and Resources for Entertainment and Media Queries
//     </p>

//     {/* Call-to-Action Button */}
//     <div className="mt-8">
//       <a
//         href="#contact"
//         className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
//       >
//         Get in Touch
//       </a>
//     </div>
//   </div>

//   {/* Decorative Gradient Overlay */}
//   <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-white opacity-20">
//     <svg viewBox="0 0 1440 320">
//       <path
//         fill="currentColor"
//         d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,165.3C672,171,768,149,864,144C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//       ></path>
//     </svg>
//   </div>
// </header>

//       {/* <header className="bg-blue-700 text-white text-center py-8">
//         <h1 className="text-4xl font-bold">Content Consumption Customer Support</h1>
//         <p className="mt-2 text-lg">Frequently Asked Questions and Resources for Entertainment and Media Queries</p>
//       </header> */}

//       {/* Navigation */}
      
//       <nav className="bg-blue-600 text-white flex flex-wrap justify-center p-4 shadow-md">
//         <a href="#streaming" className="mx-3 my-1 px-3 py-2 rounded hover:bg-blue-500 transition-colors">Streaming Services</a>
//         <a href="#socialmedia" className="mx-3 my-1 px-3 py-2 rounded hover:bg-blue-500 transition-colors">Social Media Content</a>
//         <a href="#tvshows" className="mx-3 my-1 px-3 py-2 rounded hover:bg-blue-500 transition-colors">TV Shows</a>
//         <a href="#movies" className="mx-3 my-1 px-3 py-2 rounded hover:bg-blue-500 transition-colors">Movies</a>
//         <a href="#gaming" className="mx-3 my-1 px-3 py-2 rounded hover:bg-blue-500 transition-colors">Gaming Content</a>
//         <a href="#podcasts" className="mx-3 my-1 px-3 py-2 rounded hover:bg-blue-500 transition-colors">Podcasts</a>
//         <a href="#tiktok" className="mx-3 my-1 px-3 py-2 rounded hover:bg-blue-500 transition-colors">TikTok Trends</a>
//         <a href="#news" className="mx-3 my-1 px-3 py-2 rounded hover:bg-blue-500 transition-colors">News &amp; Information</a>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 p-6">
//         {faqData.map((section, index) => (
//           <FAQSection
//             key={index}
//             id={section.id}
//             title={section.title}
//             questions={section.questions}
//             linkText={section.linkText}
//             linkHref={section.linkHref}
//           />
//         ))}
//       </main>

//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 p-4">
//   <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
//     <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>
//     <form>
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
//           placeholder="Your Name"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
//           placeholder="Your Email"
//         />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
//           Your Query
//         </label>
//         <textarea
//           id="query"
//           name="query"
//           rows="5"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
//           placeholder="Describe your query..."
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
//       >
//         <svg
//           className="w-5 h-5 mr-2 animate-bounce"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//         </svg>
//         Submit
//       </button>
//     </form>
//   </div>
// </div>


//       {/* Footer */}
//       <footer className="bg-blue-600 text-white text-center py-4">
//         <p>© 2024 Content Support Services. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// const FAQSection = ({ id, title, questions, linkText, linkHref }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section id={id} className="faq-section bg-white p-6 mb-6 rounded-lg shadow-md">
//       <h2 className="text-2xl text-blue-700 mb-4">{title}</h2>
//       <h3 className="text-xl font-semibold mb-3">Common Questions</h3>
//       <div className="space-y-4">
//         {questions.map((question, index) => (
//           <Accordion key={index} question={question} />
//         ))}
//       </div>
//       {linkText && linkHref && (
//         <p className="mt-4">
//           <a href={linkHref} className="text-blue-600 hover:underline">
//             {linkText}
//           </a>.
//         </p>
//       )}
//     </section>
//   );
// };

// const Accordion = ({ question }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-200">
//       <button
//         className="w-full flex justify-between items-center py-2 text-left focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-gray-800">{question}</span>
//         {/* {isOpen ? (
//           <ChevronUpIcon className="w-5 h-5 text-blue-600" />
//         ) : (
//           <ChevronDownIcon className="w-5 h-5 text-blue-600" />
//         )} */}
//       </button>
//       {isOpen && (
//         <div className="mt-2 text-gray-600">
//           {/* Placeholder for answer. You can replace this with actual answers if available. */}
//           <p>This is an answer to the question above.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContentConsumer;



import { useState } from 'react';
// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

function ContentConsumer() {
  const faqData = [
    {
      id: 'streaming',
      title: 'Streaming Services',
      questions: [
        'How can I troubleshoot buffering issues on Netflix or Hulu?',
        'How do I set up parental controls on Disney+?',
        'What are the most popular shows on streaming platforms?',
        'How do I cancel or manage my subscription?'
      ],
      linkText: 'Streaming Support Page',
      linkHref: '#'
    },
    {
      id: 'socialmedia',
      title: 'Social Media Content',
      questions: [
        'How do I save or share viral videos from TikTok or Instagram?',
        'What are the top trends in short-form content?',
        'How can I protect my account from hackers?',
        'How do I report inappropriate or offensive content?'
      ],
      linkText: 'Social Media Content FAQs',
      linkHref: '#'
    },
    {
      id: 'tvshows',
      title: 'TV Shows (Broadcast & Cable)',
      questions: [
        'What are the most-watched reality TV shows?',
        'How do I access live sports coverage?',
        'What options are available for cord-cutters?',
        'How can I set up DVR for my favorite shows?'
      ],
      linkText: null,
      linkHref: null
    },
    {
      id: 'movies',
      title: 'Movies',
      questions: [
        'How can I find family-friendly movie recommendations?',
        'What are the best platforms to rent or buy digital movies?',
        'How do I get access to 4K streaming for blockbusters?',
        'What are the latest action or comedy movie releases?'
      ],
      linkText: null,
      linkHref: null
    },
    {
      id: 'gaming',
      title: 'Gaming Content',
      questions: [
        'How do I set up a Twitch account to watch gaming streams?',
        'What are the most popular games in the USA?',
        'How do I participate in esports tournaments?',
        'How can I troubleshoot issues with streaming platforms?'
      ],
      linkText: null,
      linkHref: null
    },
    {
      id: 'podcasts',
      title: 'Podcasts and Audio Content',
      questions: [
        'How do I subscribe to podcasts on Spotify or Apple Podcasts?',
        'What are the best podcast apps for Android and iOS?',
        'How do I find trending podcasts in true crime or comedy?',
        'How can I improve audio quality while listening?'
      ],
      linkText: null,
      linkHref: null
    },
    {
      id: 'tiktok',
      title: 'TikTok Trends',
      questions: [
        'How do I join TikTok dance challenges?',
        'What are the most viral trends and songs right now?',
        'How can I increase engagement on my TikTok videos?',
        'How do I report or block harmful content?'
      ],
      linkText: null,
      linkHref: null
    },
    {
      id: 'news',
      title: 'News & Informational Content',
      questions: [
        'How do I subscribe to CNN, Fox News, or NYT apps?',
        'What are the most reliable news apps?',
        'How can I customize my news feed for local updates?',
        'How do I access live news coverage on streaming platforms?'
      ],
      linkText: null,
      linkHref: null
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">

<header className="w-full bg-blue-700 text-white text-center py-16">
  {/* Content Container */}
  <div className="max-w-4xl mx-auto px-4">
    <h1 className="text-5xl md:text-6xl font-bold">
      Content Customer Support
    </h1>
    <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">
      Your Trusted Partner for Resolving Utility-Related Queries Efficiently
    </p>

    {/* Call-to-Action Buttons */}
    <div className="mt-8 flex justify-center space-x-4">
      <a
        href="#support"
        className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-md
                   hover:bg-blue-100 transition transform hover:scale-105"
      >
        Get Support
      </a>
      <a
        href="#contact"
        className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-md
                   hover:bg-blue-100 transition transform hover:scale-105"
      >
        Contact Us
      </a>
    </div>
  </div>
</header>




<nav className="bg-teal-50 text-gray-800 flex flex-wrap justify-center p-6 shadow-md">
  <a
    href="#streaming"
    className="mx-2 my-2 px-4 py-3 bg-white rounded-md shadow-md
               transition transform hover:scale-105 hover:bg-teal-100"
  >
    Streaming Services
  </a>
  <a
    href="#socialmedia"
    className="mx-2 my-2 px-4 py-3 bg-white rounded-md shadow-md
               transition transform hover:scale-105 hover:bg-teal-100"
  >
    Social Media Content
  </a>
  <a
    href="#tvshows"
    className="mx-2 my-2 px-4 py-3 bg-white rounded-md shadow-md
               transition transform hover:scale-105 hover:bg-teal-100"
  >
    TV Shows
  </a>
  <a
    href="#movies"
    className="mx-2 my-2 px-4 py-3 bg-white rounded-md shadow-md
               transition transform hover:scale-105 hover:bg-teal-100"
  >
    Movies
  </a>
  <a
    href="#gaming"
    className="mx-2 my-2 px-4 py-3 bg-white rounded-md shadow-md
               transition transform hover:scale-105 hover:bg-teal-100"
  >
    Gaming Content
  </a>
  <a
    href="#podcasts"
    className="mx-2 my-2 px-4 py-3 bg-white rounded-md shadow-md
               transition transform hover:scale-105 hover:bg-teal-100"
  >
    Podcasts
  </a>
  <a
    href="#tiktok"
    className="mx-2 my-2 px-4 py-3 bg-white rounded-md shadow-md
               transition transform hover:scale-105 hover:bg-teal-100"
  >
    TikTok Trends
  </a>
  <a
    href="#news"
    className="mx-2 my-2 px-4 py-3 bg-white rounded-md shadow-md
               transition transform hover:scale-105 hover:bg-teal-100"
  >
    News &amp; Information
  </a>
</nav>


      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqData.map((section, index) => (
          <FAQSection
            key={index}
            id={section.id}
            title={section.title}
            questions={section.questions}
            linkText={section.linkText}
            linkHref={section.linkHref}
          />
        ))}
      </main>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 p-4">
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
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>© 2024 Content Support Services. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const FAQSection = ({ id, title, questions, linkText, linkHref }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className="bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl text-indigo-600 mb-4">{title}</h2>
      <h3 className="text-xl font-semibold mb-3">Common Questions</h3>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <Accordion key={index} question={question} />
        ))}
      </div>
      {linkText && linkHref && (
        <p className="mt-4">
          <a href={linkHref} className="text-indigo-600 hover:underline flex items-center">
            {linkText}
            <svg
              className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </p>
      )}
    </section>
  );
};

const Accordion = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-2 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-800">{question}</span>
        <svg
          className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>This is an answer to the question above.</p>
        </div>
      )}
    </div>
  );
};

export default ContentConsumer;
