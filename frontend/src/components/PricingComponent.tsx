const PricingComponent = () => {
  return (
    <section id="pricing" className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-900">
            Pricing Plans
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Choose a plan that fits your project size and business goals.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">

          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                STARTER
              </h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200">
                Free
              </h1>

              {[
                "Basic landing page",
                "Responsive design",
                "Email support",
              ].map((item) => (
                <p key={item} className="flex items-center text-gray-600 mb-2">
                  <CheckIcon /> {item}
                </p>
              ))}

              <button className="mt-auto text-white bg-gray-400 py-2 px-4 rounded hover:bg-gray-500">
                Get Started
              </button>
            </div>
          </div>

          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                STANDARD
              </h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200">
                $29<span className="text-lg ml-1 text-gray-500">/mo</span>
              </h1>

              {[
                "Multi-page website",
                "Performance optimization",
                "Basic SEO setup",
                "Support included",
              ].map((item) => (
                <p key={item} className="flex items-center text-gray-600 mb-2">
                  <CheckIcon /> {item}
                </p>
              ))}

              <button className="mt-auto text-white bg-indigo-500 py-2 px-4 rounded hover:bg-indigo-600">
                Choose Plan
              </button>
            </div>
          </div>

          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative">
              <span className="bg-indigo-500 text-white px-3 py-1 text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                PRO
              </h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200">
                $49<span className="text-lg ml-1 text-gray-500">/mo</span>
              </h1>

              {[
                "Custom UI design",
                "Advanced SEO",
                "Fast loading pages",
                "Priority support",
              ].map((item) => (
                <p key={item} className="flex items-center text-gray-600 mb-2">
                  <CheckIcon /> {item}
                </p>
              ))}

              <button className="mt-auto text-white bg-indigo-500 py-2 px-4 rounded hover:bg-indigo-600">
                Choose Plan
              </button>
            </div>
          </div>

          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                ENTERPRISE
              </h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200">
                $99<span className="text-lg ml-1 text-gray-500">/mo</span>
              </h1>

              {[
                "Full-stack solution",
                "Custom features",
                "Security optimization",
                "Dedicated support",
              ].map((item) => (
                <p key={item} className="flex items-center text-gray-600 mb-2">
                  <CheckIcon /> {item}
                </p>
              ))}

              <button className="mt-auto text-white bg-gray-700 py-2 px-4 rounded hover:bg-gray-800">
                Contact Sales
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full">
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      className="w-3 h-3"
      viewBox="0 0 24 24"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  </span>
);

export default PricingComponent;
