import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BlogsScreen from "./src/screens/BlogsScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import BlogDetailScreen from "./src/screens/BlogDetailScreen";

const navigator = createStackNavigator(
  {
    Blogs: BlogsScreen,
    BlogDetail: BlogDetailScreen,
  },
  {
    initialRouteName: "Blogs",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
