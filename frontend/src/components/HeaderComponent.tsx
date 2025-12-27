import { LayoutDashboard, ArrowRight } from "lucide-react";

const HeaderComponent = () => {
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        <a href="#home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <LayoutDashboard className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full" />
          <span className="ml-3 text-xl font-semibold">Digital Solutions</span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 hover:text-indigo-600">Home</a>
          <a href="#about" className="mr-5 hover:text-indigo-600">About</a>
          <a href="#services" className="mr-5 hover:text-indigo-600">Services</a>
          <a href="#portfolio" className="mr-5 hover:text-indigo-600">Portfolio</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center bg-indigo-600 text-white border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Us
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;
