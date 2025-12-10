import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/95 text-slate-200 mt-10 rounded-t-2xl border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        {/* Top grid */}
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5 items-start">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                className="rounded-full w-16 h-16 object-cover border border-amber-400/70"
                src="https://www.shutterstock.com/image-vector/cute-vector-toy-shop-logo-260nw-1628635720.jpg"
                alt="Toy House Logo"
              />
              <div>
                <p className="text-3xl font-extrabold tracking-tight">
                  <span className="text-amber-300">Toy</span>{' '}
                  <span className="text-pink-400">House</span>
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Playful toys for curious minds.
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md mt-2">
              Discover safe, colorful, and creative toys that inspire kids to
              imagine, build, and explore every single day.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300 mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Branding
                </a>
              </li>
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Design
                </a>
              </li>
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Marketing
                </a>
              </li>
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Advertisement
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300 mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  About us
                </a>
              </li>
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Contact
                </a>
              </li>
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Jobs
                </a>
              </li>
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Press kit
                </a>
              </li>
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300 mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Terms of use
                </a>
              </li>
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="link link-hover text-slate-400 hover:text-amber-300">
                  Cookie policy
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-2">
              <a className="hover:text-sky-400 transition-colors">
                {/* Twitter */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a className="hover:text-red-500 transition-colors">
                {/* YouTube */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a className="hover:text-blue-500 transition-colors">
                {/* Facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Toy House. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <span className="text-pink-400 text-sm">❤</span> for kids & families.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
