import { BookOpen } from "lucide-react"; // Icon for reading

function LatestBlogPostsSection() {
  // Placeholder blog posts data
  const blogPosts = [
    {
      image:
        "https://placehold.co/600x400/D1E7DD/000000?text=Web+Design+Trends", // Placeholder image
      title: "Top 5 Web Design Trends for 2025",
      description:
        "Explore the cutting-edge design trends that will shape the web experience in the coming year.",
      date: "July 5, 2025",
      link: "#", // Placeholder for blog post link
    },
    {
      image:
        "https://placehold.co/600x400/F0F8FF/000000?text=Database+Security", // Placeholder image
      title: "Ensuring Robust Database Security",
      description:
        "A deep dive into best practices for protecting your valuable business data from common threats.",
      date: "June 28, 2025",
      link: "#",
    },
    {
      image:
        "https://placehold.co/600x400/FFFDE7/000000?text=Software+Automation", // Placeholder image
      title: "Automating Business Processes with Custom Software",
      description:
        "Discover how tailored software solutions can boost efficiency and reduce manual errors in your operations.",
      date: "June 20, 2025",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="latest-blog-posts">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Latest Blog Posts
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Insights, trends, and tips from the world of web and software
            development.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover" // Fixed height for consistency
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/600x400/cccccc/333333?text=Image+Error";
                }} // Fallback image on error
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {post.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 font-medium transition duration-150 ease-in-out mt-auto"
                >
                  Read More
                  <BookOpen className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestBlogPostsSection;
