const HeaderComponent = () => {
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        <a href="#home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl font-semibold">Digital Solutions</span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 hover:text-indigo-600">
            Home
          </a>
          <a href="#about" className="mr-5 hover:text-indigo-600">
            About Us
          </a>
          <a href="#services" className="mr-5 hover:text-indigo-600">
            What We Do
          </a>
          <a href="#portfolio" className="mr-5 hover:text-indigo-600">
            Our Work
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center bg-indigo-600 text-white border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Us
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;
