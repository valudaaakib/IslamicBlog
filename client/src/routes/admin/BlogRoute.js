import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../../pages/admin/blog";

const BlogRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="blogcategory"
          element={
            <>
              <Blog />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default BlogRoute;
