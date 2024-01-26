import React from "react";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="text-gray-600 body-font bg-gradient-to-r from-cyan-100 to-blue-300 text-blue-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="w-32 h-16 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-2xl font-semibold gap-x-6">
          <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
          <Link to='/about' className="mr-5 hover:text-gray-900">About</Link>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}
