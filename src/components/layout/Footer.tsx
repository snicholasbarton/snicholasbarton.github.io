export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} S. Nicholas Barton. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            {/* GitHub Icon Placeholder */}
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            {/* LinkedIn Icon Placeholder */}
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
