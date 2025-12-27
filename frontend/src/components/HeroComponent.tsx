const HeroComponent = () => {
  return (
    <section id="home" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg shadow-md"
            alt="digital solutions illustration"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          />
        </div>

        <div className="lg:grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            Building Modern Digital Experiences
          </h1>

          <p className="mb-8 leading-relaxed text-gray-700">
            We help businesses grow by creating clean, fast, and user-friendly
            websites and applications. Our focus is on quality design, reliable
            development, and solutions that actually work.
          </p>

          <div className="flex justify-center">
            <a
              href="#services"
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
