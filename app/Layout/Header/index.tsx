import React from "react";
import { headerSubLinks } from "../mockData";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="border-b-2 backdrop-blur-md sticky top-0 left-0 z-10">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-wrap items-center justify-between ">
          <h2 className="font-bold text-2xl">ZinTools</h2>
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative hidden sm:hidden md:flex">
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pe-10 text-sm border rounded-full focus:outline-none w-96"
                placeholder="Search for Movies, TV Shows, Themes & Cast"
                required
              />
            </div>
          </form>
          <div className="items-center gap-4">
            <button className="px-2 py-2">Log in</button>
            <button className="px-6 py-2 text-white bg-blue-500 rounded-full">
              Signup
            </button>
          </div>
        </div>
        <div className="mt-4 hidden sm:hidden md:block">
          <ul className="flex justify-between">
            {headerSubLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="hover:border-b-2 hover:border-blue-800 pb-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
