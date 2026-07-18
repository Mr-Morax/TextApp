import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-blue-600 dark:text-blue-400">
          About UtilText
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          A lightweight, privacy-focused text utility tool designed to format, analyze, and manipulate your text instantly right in your browser.
        </p>
      </div>

      <hr className="border-gray-200 dark:border-gray-700 my-8" />

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {/* Feature 1 */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4 font-bold">
            Aa
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast Formatting</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Quickly convert text to uppercase, lowercase, bold, or italics with a single click to streamline your editing workflow.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4 font-bold">
            📊
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-Time Analysis</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Get instant metrics on your content with live word and character counters, alongside dynamic search term highlighting.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4 font-bold">
            🔒
          </div>
          <h3 className="text-xl font-semibold mb-2">100% Client-Side</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your data never leaves your device. All operations happen entirely within your browser, ensuring complete privacy.
          </p>
        </div>
      </div>

      {/* How It Helps Section */}
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-800/60">
        <h3 className="text-2xl font-bold mb-4">Why use UtilText?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Whether you are drafting an essay, formatting code snippets, cleaning up rough notes, or optimizing social media posts to hit strict character limits, UtilText removes the friction. No cluttered interfaces, no sign-ups—just raw utility when you need it.
        </p>
      </div>
    </div>
  );
};

export default About;