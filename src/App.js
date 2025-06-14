import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      <header className="bg-indigo-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">StartZen</h1>
        <p className="text-lg">Launch your startup faster with this React landing page.</p>
      </header>
      <main className="p-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>React + Tailwind setup</li>
            <li>Responsive design</li>
            <li>Clean, reusable components</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Call to Action</h2>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Get Started
          </button>
        </section>
      </main>
      <footer className="text-center p-6 text-sm text-gray-500">
        © 2025 StartZen. All rights reserved.
      </footer>
    </div>
  );
};

export default App;