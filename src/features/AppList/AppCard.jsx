import React from 'react';

export default function AppCard({ icon, name, description, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        실행
      </a>
    </div>
  );
}
