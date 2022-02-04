import React, { useContext } from "react";
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
  const { state: blogs, addBlog, deleteBlog } = useContext(BlogContext);
  console.log(navigation);
  return (
    <View>
      <Button title="Add Post" onPress={addBlog} />
      <FlatList
        data={blogs}
        keyExtractor={(blog) => blog.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("BlogDetail")}>
              <View style={styles.viewStyle}>
                <Text style={styles.titleStyle}>
                  {item.title} - {item.id}
                </Text>
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
