import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Books = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="w-4/5 border-2 mx-auto flex flex-wrap mb-10 py-6">
        <div className="w-full">
          <div>
            <span className="section_title">کتابیں:-</span>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row three-tile-of-tab"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <NavLink
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal three-tab-head "
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    PRODUCT SPECIFICATION
                  </NavLink>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <NavLink
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal three-tab-head"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    DESCRIPTION
                  </NavLink>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <NavLink
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal three-tab-head"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    REVIEW
                  </NavLink>
                </li>
              </ul>
              <div className="container mx-auto relative tab-content flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-3 py-5 flex-auto tab">
                  <div className="tab-content tab-space">
                    <div
                      className={
                        openTab === 1 ? "block lg:ps-7 md:ps-5" : "hidden"
                      }
                      id="link1"
                    >
                      <h2 className="nutr-had">Nutrition Information</h2>

                      <div className="w-full overflow-x-auto">tab1</div>
                    </div>
                    <div
                      className={
                        openTab === 2 ? "block lg:ps-7 md:ps-5" : "hidden"
                      }
                      id="link2"
                    >
                      <p>Product Description is not avalible</p>
                    </div>
                    <div
                      className={
                        openTab === 3 ? "block lg:ps-7 md:ps-5" : "hidden"
                      }
                      id="link3"
                    >
                      <div>
                        <p className="text-3xl font-semibold mb-5">Review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
