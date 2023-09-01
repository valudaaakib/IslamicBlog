import React from "react";
import "../../assets/css/pages/Home.css";

const PrayerTime = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="salah-left-section">
          <h2 className="text-white text-4xl lg:pt-10 text-center">
            PRAYER TIMES
          </h2>
          <p className="text-center pt-5 font-bold text-base">
            <span className="hover:text-white">Prayer times in Jakarta</span>
          </p>
          <p className="text-center text-white pt-3">Tue 29 Aug</p>
          <table className="mx-auto">
            <tbody>
              <tr className="border-b border-black">
                <td className="text-xl font-semibold pb-2">Fajar</td>
                <td className="text-white text-xl font-semibold w-1/3">
                  04:38 AM
                </td>
              </tr>
              <tr className="border-b border-black leading-10">
                <td className="text-xl font-semibold pt-4 pb-2">Fajar</td>
                <td className="text-white text-xl font-semibold pt-4">
                  04:38 AM
                </td>
              </tr>
              <tr className="border-b border-black leading-10">
                <td className="text-xl font-semibold pt-4 pb-2">Sunrise</td>
                <td className="text-white text-xl font-semibold pt-4">
                  05:52 AM
                </td>
              </tr>
              <tr className="border-b border-black leading-10">
                <td className="text-xl font-semibold pt-4 pb-2">Dhuhr</td>
                <td className="text-white text-xl font-semibold pt-4">
                  11:57 AM
                </td>
              </tr>
              <tr className="border-b border-black leading-10">
                <td className="text-xl font-semibold pt-4 pb-2">Fajar</td>
                <td className="text-white text-xl font-semibold pt-4">
                  04:38 AM
                </td>
              </tr>
              <tr className="border-b border-black leading-10">
                <td className="text-xl font-semibold pt-4 pb-2">Fajar</td>
                <td className="text-white text-xl font-semibold pt-4">
                  04:38 AM
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-center pt-5">
            Powerd by <span className="hover:text-white">Muslim Pro</span>
          </p>
        </div>
        <div className="salah-right-section">
          <p className="prayer-right-header font-bold">
            Welcome to the Islamic Center
          </p>
          <p className="salah-left-peragraph leading-7 mt-6">
            The Shaha is not just a mosque for prayers rather it is a community
            center for all. The Center is committed to preserving an Islamic
            identity, building and supporting a viable Muslim community,
            promoting a comprehensive Islamic way of life based on the Holy
            Quran and the Sunnah of Prophet Muhammad.
          </p>
          <button className="salah-right-btn">Read More</button>
        </div>
      </div>
    </>
  );
};

export default PrayerTime;
