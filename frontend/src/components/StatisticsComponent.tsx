const StatisticsComponent = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
            Results That Speak for Themselves
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            We focus on delivering measurable results through clean design,
            efficient development, and reliable digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 text-center">

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <StatIcon>
                <path d="M3 12l2-2 4 4 8-8 2 2-10 10z" />
              </StatIcon>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                120+
              </h2>
              <p className="leading-relaxed">Projects Completed</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <StatIcon>
                <circle cx="9" cy="7" r="4" />
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              </StatIcon>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                80+
              </h2>
              <p className="leading-relaxed">Happy Clients</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <StatIcon>
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </StatIcon>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                5+
              </h2>
              <p className="leading-relaxed">Years Experience</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <StatIcon>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </StatIcon>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                24/7
              </h2>
              <p className="leading-relaxed">Client Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatIcon = ({ children }: { children: React.ReactNode }) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
    viewBox="0 0 24 24"
  >
    {children}
  </svg>
);

export default StatisticsComponent;
