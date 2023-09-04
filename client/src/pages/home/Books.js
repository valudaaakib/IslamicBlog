import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Books = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="w-4/5 mx-auto flex flex-wrap mb-10 py-6">
          <div className="w-full">
            <div>
              <span className="section_title">کتابیں:-</span>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex my-3 list-none flex-wrap flex-row rounded tabs-section"
                  role="tablist"
                >
                  <li className="flex-auto text-center me-2 tab-list">
                    <NavLink
                      className={
                        "text-xs font-bold uppercase px-3 py-3 rounded block"
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
                  <li className="flex-auto text-center me-2 tab-list">
                    <NavLink
                      className={
                        "text-xs font-bold uppercase px-3 py-3 rounded block"
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      PRODUCT SPECIFICATION
                    </NavLink>
                  </li>
                  <li className="flex-auto text-center me-2 tab-list">
                    <NavLink
                      className={
                        "text-xs font-bold uppercase px-3 py-3 rounded block"
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      PRODUCT SPECIFICATION
                    </NavLink>
                  </li>
                  <li className="flex-auto text-center tab-list">
                    <NavLink
                      className={
                        "text-xs font-bold uppercase px-3 py-3 rounded block"
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link4"
                      role="tablist"
                    >
                      PRODUCT SPECIFICATION
                    </NavLink>
                  </li>
                </ul>
                <div className="mx-auto relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div className="px-3 py-5">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      {/* fdvdfv */}

                      <div className="flex flex-wrap justify-between">
                        <div className="islamic-books shadow-lg">
                          <div className="islamic-books-main">
                            <img
                              className="islamic-book-image"
                              src="https://img.bizmobia.com/bookmanagement/data/book/308314314427.jpg"
                              alt="islamic book"
                            ></img>
                          </div>
                          <p className="text-center pt-3 pb-8">
                            قرآن مجید اور اسریٰ حاضر
                          </p>
                        </div>
                        <div className="islamic-books shadow-lg">
                          <div className="islamic-books-main">
                            <img
                              className="islamic-book-image"
                              src="https://img.bizmobia.com/bookmanagement/data/book/308314314427.jpg"
                              alt="islamic book"
                            ></img>
                          </div>
                          <p className="text-center pt-3 pb-8">
                            قرآن مجید اور اسریٰ حاضر
                          </p>
                        </div>
                        <div className="islamic-books shadow-lg">
                          <div className="islamic-books-main">
                            <img
                              className="islamic-book-image"
                              src="https://img.bizmobia.com/bookmanagement/data/book/308314314427.jpg"
                              alt="islamic book"
                            ></img>
                          </div>
                          <p className="text-center pt-3 pb-8">
                            قرآن مجید اور اسریٰ حاضر
                          </p>
                        </div>
                        <div className="islamic-books shadow-lg">
                          <div className="islamic-books-main">
                            <img
                              className="islamic-book-image"
                              src="https://img.bizmobia.com/bookmanagement/data/book/308314314427.jpg"
                              alt="islamic book"
                            ></img>
                          </div>
                          <p className="text-center pt-3 pb-8">
                            قرآن مجید اور اسریٰ حاضر
                          </p>
                        </div>
                      </div>

                      {/* vfdvdfvdf */}
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
