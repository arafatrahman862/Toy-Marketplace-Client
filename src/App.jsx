import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900/80 text-slate-100 flex flex-col">
      {/* Sticky navbar */}
      <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur border-b border-slate-800">
        <div className="w-full mx-auto px-4 md:px-6 w-full">
          <Navbar />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full">
        <div className="w-full mx-auto px-4 md:px-6 py-6 md:py-8 w-full">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/90">
        <div className="w-full mx-auto px-4 md:px-6 py-4 md:py-6 w-full">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default App;
