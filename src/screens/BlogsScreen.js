import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const BlogsScreen = ({ navigation }) => {
  const { state: blogs, deleteBlog, getBlogs } = useContext(BlogContext);
  useEffect(() => {
    const listener = navigation.addListener("didFocus", () => {
      getBlogs();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={blogs}
        keyExtractor={(blog) => blog.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("BlogDetail", { id: item.id })}
            >
              <View style={styles.viewStyle}>
                <Text style={styles.titleStyle}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlog(item.id)}>
                  <Feather style={styles.iconStyle} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

BlogsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("CreateBlog")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  titleStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24,
  },
});

export default BlogsScreen;
