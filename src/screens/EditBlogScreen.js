import React, { useContext, useState } from "react";
import BlogForm from "../components/BlogForm";
import { Context as BlogContext } from "../context/BlogContext";

const EditBlogScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, updateBlog } = useContext(BlogContext);
  const blog = state.find((blog) => blog.id === id);
  return (
    <BlogForm
      defaultTitle={blog.title}
      defaultContent={blog.content}
      buttonTitle="Update"
      onSubmit={(title, content) => {
        updateBlog(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default EditBlogScreen;
