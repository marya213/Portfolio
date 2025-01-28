// src/pages/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900">
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-white mb-12">Mes projets</h1>

      {/* Projects Section */}
      <div className="flex justify-center space-x-8">
        {/* Projet 1 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-64">
          <h2 className="text-white text-2xl mb-4">Projet 1</h2>
          <img
            src="/forum.png"
            alt="Forum Project"
            className="w-full h-40 object-cover mb-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
          />
          <p className="text-gray-300">Description rapide du projet Forum</p>
        </div>

        {/* Projet 2 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-64">
          <h2 className="text-white text-2xl mb-4">Projet 2</h2>
          <div className="w-full h-40 bg-gray-700 mb-4 rounded-lg shadow-md"></div> {/* Placeholder for future image */}
          <p className="text-gray-300">Description rapide du projet 2</p>
        </div>

        {/* Projet 3 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-64">
          <h2 className="text-white text-2xl mb-4">Projet 3</h2>
          <div className="w-full h-40 bg-gray-700 mb-4 rounded-lg shadow-md"></div> {/* Placeholder for future image */}
          <p className="text-gray-300">Description rapide du projet 3</p>
        </div>
      </div>
    </div>
  );
}
