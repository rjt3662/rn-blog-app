import createDataContext from "./createDataContext";

const blogReducer = (blogs, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...blogs,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog Post #${blogs.length + 1}`,
        },
      ];
    case "DELETE_BLOG":
      return blogs.filter((blog) => blog.id !== action.payload);
    default:
      return blogs;
  }
};

const addBlog = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_BLOG" });
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOG", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, deleteBlog },
  []
);
