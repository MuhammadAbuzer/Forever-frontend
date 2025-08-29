import React from "react";
import { Link } from "react-router-dom"; // Make sure this import is present
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            ad? Ipsa minus commodi delectus. Enim volupt
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col text-gray-600 gap-1">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600 gap-1">
            {" "}
            {/* Corrected this line */}
            <li>+923277396851</li>
            <li>muhammadabuzer256@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          copyright 2024@ forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
