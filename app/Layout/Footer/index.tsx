import React from "react";
import Link from "next/link";

import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";

import { footerData, otherLinks } from "../mockData";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="border-b-2 py-4 flex items-center gap-6">
          <h4>Follow us</h4>
          <div className="flex items-center gap-4">
            <button>
              <FaYoutube size={22} />
            </button>
            <button>
              <FaXTwitter size={22} />
            </button>
            <button>
              <FaFacebookF size={22} />
            </button>
          </div>
        </div>
        <div className="py-10 flex justify-center flex-wrap border-b-2">
          {footerData.map((val) => {
            return (
              <div className="flex-1" key={val.id}>
                <h2 className="font-bold">{val.label}</h2>
                <ul className="mt-4">
                  {val.links.map((link, ind) => {
                    return (
                      <li key={ind} className="mb-2">
                        <Link href={link.href} className="text-gray-500">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-between">
          <div className="flex items-center gap-12">
            <Link href="/">
              <h1 className="text-3xl font-bold flex items-center">
                Similar
                <span className="text-lg px-4 py-2 ml-2 bg-black text-white rounded-3xl">
                  <code>Watch</code>
                </span>
              </h1>
            </Link>
            <div className="flex gap-4">
              {otherLinks.map((link) => (
                <Link href={link.href} key={link.id} className="text-gray-500">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <button className="bg-gray-300 p-4 rounded-full">
            <FiMoon size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
