import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBORD</p>
          <h1 className="md:text-4xl sm:text-3x text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Easily connect to any data source, yes even if your data is messy.
            Our automated platform adapts to your data and prepares it
            behind-the-scenes for predictive modeling — no data scientists or
            tedious preparation required.
          </p>
          <button className="bg-[#000300] text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
