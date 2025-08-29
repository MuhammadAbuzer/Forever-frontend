import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          className="w-full max-w-[450px] md:w-1/2 object-cover"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            rerum, cumque voluptatibus unde architecto dolor aperiam repellat
            officia quisquam omnis odio, dolorum eaque laboriosam quod
            recusandae, ab laudantium necessitatibus accusamus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            expedita aspernatur sed esse repudiandae impedit reprehenderit nam.
            Asperiores, ducimus! Nisi ipsa, at fuga exercitationem officia harum
            facere blanditiis vero facilis?
          </p>
          <b className="text-grey-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            facilis natus ullam aspernatur, illum ipsa volupt
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-8 mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 md:w-1/2">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            consectetur maxime porro non et.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 md:w-1/2">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            consectetur maxime porro non et.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 md:w-1/2">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            consectetur maxime porro non et.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
