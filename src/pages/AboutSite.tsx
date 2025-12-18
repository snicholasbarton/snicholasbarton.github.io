import { motion } from 'framer-motion';
import { Layers, Zap, Server, Globe } from 'lucide-react';

export const AboutSite = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold mb-6">About This Site</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          This portfolio website serves as both a showcase of my professional journey and a playground for experimenting with modern web technologies. It is designed to be performant, accessible, and easily maintainable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Zap className="text-yellow-500 mr-3" size={24} />
              <h2 className="text-xl font-bold">Vite & React</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Vite for lightning-fast HMR and bundling, and React for a declarative component-based architecture.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Layers className="text-cyan-500 mr-3" size={24} />
              <h2 className="text-xl font-bold">Tailwind CSS</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Styled using utility-first CSS for rapid development and consistent design tokens.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Server className="text-green-500 mr-3" size={24} />
              <h2 className="text-xl font-bold">MDX</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Blog posts are authored in MDX, allowing seamless embedding of interactive React components within Markdown content.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Globe className="text-blue-500 mr-3" size={24} />
              <h2 className="text-xl font-bold">GitHub Pages</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Hosted statically on GitHub Pages, utilizing Hash Routing to ensure compatibility with static file serving.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
