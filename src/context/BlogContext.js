import createDataContext from "./createDataContext";
import jsonserver from "../api/jsonserver";

const blogReducer = (blogs, action) => {
  switch (action.type) {
    case "ADD_BLOGS":
      return action.payload;
    case "ADD_BLOG":
      return [
        ...blogs,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "DELETE_BLOG":
      return blogs.filter((blog) => blog.id !== action.payload);
    case "UPDATE_BLOG":
      return blogs.map((blog) => {
        if (blog.id === action.payload.id) {
          return action.payload;
        }
        return blog;
      });
    default:
      return blogs;
  }
};

const getBlogs = (dispatch) => {
  return async () => {
    try {
      const response = await jsonserver.get("/blogs");
      dispatch({ type: "ADD_BLOGS", payload: response.data });
    } catch (e) {
      console.log(`Error fetching blogs: ${e}`);
    }
  };
};

const addBlog = (dispatch) => {
  return async (title, content, callback) => {
    const response = await jsonserver.post("/blogs", { title, content });
    // dispatch({ type: "ADD_BLOG", payload: { title: title, content: content } });
    if (callback()) {
      callback();
    }
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOG", payload: id });
  };
};

const updateBlog = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "UPDATE_BLOG", payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, deleteBlog, updateBlog, getBlogs },
  []
);
