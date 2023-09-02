import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full hero_banner lg:py-10 md:py-10 py-4 lg:px-0 md:px-0 px-6">
        <div
          className="lg:w-4/5 md:w-4/5 w-full mx-auto"
          style={{ textAlign: " -webkit-center" }}
        >
          <img
            src="https://themelooper.com/html/salat/images/kalma-text-img.png"
            alt=""
          />
          <h2 className="text-white text-2xl font-bold">السلام علیکم</h2>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
