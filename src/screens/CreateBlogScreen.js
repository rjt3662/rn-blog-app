import React, { useContext, useState } from "react";
import BlogForm from "../components/BlogForm";
import { Context as BlogContext } from "../context/BlogContext";

const CreateBlogScreen = ({ navigation }) => {
  const { addBlog } = useContext(BlogContext);
  return (
    <BlogForm
      onSubmit={(title, content) => {
        addBlog(title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default CreateBlogScreen;
