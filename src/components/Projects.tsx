import { ExternalLink } from "lucide-react"; // Icon for external links
import { Link } from "react-router-dom"; // Import Link

function FeaturedProjectsSection() {
  const projects = [
    {
      image:
        "https://placehold.co/600x400/E0F2F7/000000?text=E-commerce+Redesign", // Placeholder image
      title: "E-commerce Platform Redesign",
      description:
        "Revamped an existing online store with a modern UI/UX, resulting in a 30% increase in conversion rates and improved customer satisfaction.",
      link: "#", // Placeholder for project link/case study
    },
    {
      image: "https://placehold.co/600x400/F3E8FF/000000?text=Internal+CRM", // Placeholder image
      title: "Custom Internal CRM System",
      description:
        "Developed a bespoke CRM solution to streamline client management, sales tracking, and team collaboration for a growing startup.",
      link: "#",
    },
    {
      image:
        "https://placehold.co/600x400/FFF8E1/000000?text=Healthcare+Portal", // Placeholder image
      title: "Secure Healthcare Patient Portal",
      description:
        "Built a HIPAA-compliant patient portal, enhancing communication between patients and healthcare providers with secure data access.",
      link: "#",
    },
    {
      image:
        "https://placehold.co/600x400/E8F5E9/000000?text=Logistics+Dashboard", // Placeholder image
      title: "Logistics Dashboard & Analytics",
      description:
        "Created an intuitive dashboard for a logistics company, providing real-time tracking, route optimization, and performance analytics.",
      link: "#",
    },
  ];

  return (
    <section
      className="py-16 bg-gray-50 dark:bg-gray-800"
      id="featured-projects"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Showcasing our recent work and successful client collaborations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover" // Fixed height for consistency
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/600x400/cccccc/333333?text=Image+Error";
                }} // Fallback image on error
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 font-medium transition duration-150 ease-in-out"
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                >
                  View Project
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectsSection;
