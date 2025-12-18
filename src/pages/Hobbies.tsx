import { motion } from 'framer-motion';
import { Camera, Music, Mountain } from 'lucide-react';

export const Hobbies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold mb-6">Hobbies & Interests</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          When I'm not coding, I enjoy exploring the world and expressing creativity through various mediums. Here are a few things that keep me busy.
        </p>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
              <Camera size={48} className="text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Photography</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
              <Music size={48} className="text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Music Production</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-teal-100 dark:bg-teal-900/30 p-4 rounded-lg">
              <Mountain size={48} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Hiking & Outdoors</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
