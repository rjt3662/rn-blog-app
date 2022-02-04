import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const BlogsScreen = () => {
  const { state: blogs, addBlog } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Blog" onPress={addBlog} />
      <Text>{blogs.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogsScreen;
