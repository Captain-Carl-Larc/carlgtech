import { Lightbulb, Users, TrendingUp, ShieldCheck } from "lucide-react"; // Importing relevant icons

function OurApproachSection() {
  const approaches = [
    {
      icon: (
        <Lightbulb className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />
      ),
      title: "Custom Solutions",
      description:
        "We believe every business is unique. Our solutions are tailor-made to fit your specific needs, not off-the-shelf templates.",
    },
    {
      icon: <Users className="w-10 h-10 text-teal-500 dark:text-teal-400" />,
      title: "Client-Centric Focus",
      description:
        "Your vision is our priority. We work closely with you from concept to launch, ensuring your goals are met and exceeded.",
    },
    {
      icon: (
        <TrendingUp className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />
      ),
      title: "Results-Driven Development",
      description:
        "Our aim is to deliver tangible results. We focus on solutions that drive growth, efficiency, and a strong return on investment.",
    },
    {
      icon: (
        <ShieldCheck className="w-10 h-10 text-orange-500 dark:text-orange-400" />
      ),
      title: "Quality & Security",
      description:
        "We build with integrity. Our development process prioritizes robust code, security best practices, and long-term reliability.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="our-approach">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Our Approach
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            How we partner with you to achieve digital excellence.
          </p>
        </div>

        {/* Approach Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurApproachSection;
