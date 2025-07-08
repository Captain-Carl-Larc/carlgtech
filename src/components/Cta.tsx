import { ArrowRight } from "lucide-react"; // Icon for the CTA button
import { Link } from "react-router-dom"; // Import Link

function CallToActionSection() {
  return (
    <section
      className="py-16 bg-blue-600 dark:bg-blue-800 text-white"
      id="call-to-action"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-4 sm:text-5xl">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss how custom web and software solutions can transform your
          operations and drive growth.
        </p>
        <Link
          to="/contact" // Link to your contact section or page
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300 ease-in-out"
        >
          Get a Free Quote
          <ArrowRight className="ml-3 w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}

export default CallToActionSection;
