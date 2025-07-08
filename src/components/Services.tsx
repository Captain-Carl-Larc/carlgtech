import { Globe, LayoutTemplate, Database, Code } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Website Design",
      description:
        "Crafting visually stunning and highly functional websites tailored to your brand's unique identity and business goals.",
      link: "#", // Placeholder link
    },
    {
      icon: (
        <LayoutTemplate className="w-12 h-12 text-green-600 dark:text-green-400" />
      ),
      title: "Landing Pages",
      description:
        "Designing high-converting landing pages optimized to capture leads and drive specific actions for your marketing campaigns.",
      link: "#",
    },
    {
      icon: (
        <Database className="w-12 h-12 text-purple-600 dark:text-purple-400" />
      ),
      title: "Database Design",
      description:
        "Building robust, scalable, and secure database solutions to efficiently store, manage, and retrieve your critical business data.",
      link: "#",
    },
    {
      icon: <Code className="w-12 h-12 text-red-600 dark:text-red-400" />,
      title: "Custom Business Software",
      description:
        "Developing bespoke software applications that streamline your operations, automate processes, and give you a competitive edge.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="services">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Empowering your business with cutting-edge digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                Learn More
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
