import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, Linkedin as LinkedinIcon } from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        
        <div className="w-64 shrink-0 mx-auto md:mx-0 text-center md:text-left">
          <div className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
            <div className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="font-bold">A</span>
            </div>
            <span className="ml-3 text-xl">Your Platform</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            A simple and modern platform designed to provide clarity, value, and ease of use.
          </p>
        </div>

        <div className="grow flex flex-wrap md:pl-20 mt-10 md:mt-0 text-center md:text-left">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              GENERAL
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className="text-gray-600 hover:text-gray-800">Overview</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Features</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Pricing</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Updates</a></li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className="text-gray-600 hover:text-gray-800">Help Center</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Guides</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">FAQs</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Careers</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Blog</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">News</a></li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Terms of Use</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Cookies</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Licenses</a></li>
            </nav>
          </div>

        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Your Platform. All rights reserved.
          </p>

          <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 justify-center space-x-3">
            <FacebookIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            <TwitterIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            <InstagramIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            <LinkedinIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
