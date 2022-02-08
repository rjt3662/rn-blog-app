import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const BlogDetailScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state: blogs } = useContext(BlogContext);
  const blog = blogs.find((blogPost) => blogPost.id === id);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{blog.title}</Text>
      <Text style={styles.contentStyle}>{blog.content}</Text>
    </View>
  );
};

BlogDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("EditBlog", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 20,
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  contentStyle: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default BlogDetailScreen;
