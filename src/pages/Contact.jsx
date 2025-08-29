import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 px-4 md:px-10">
        <img
          className="w-full md:max-w-[480px] object-cover"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-grey-500">
            197 ZEBI STATION
            <br />
            W/BLOCK FARID TOWN, SAHIWAL
          </p>
          <p className="text-gray-500">
            TEL : (92)3277396851 <br />
            Email: muhammadabuzer256@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600 ">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our team and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
