import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const BlogForm = ({
  defaultTitle = "",
  defaultContent = "",
  buttonTitle = "Add Blog",
  onSubmit,
}) => {
  const [title, setTitle] = useState(defaultTitle);
  const [content, setContent] = useState(defaultContent);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.labelStyle}>Enter Title</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.labelStyle}>Enter Content</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title={buttonTitle} onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogForm.defaultOptions = () => {
  buttonTitle: "Add Blog";
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
  },
  viewStyle: {
    margin: 20,
  },
});

export default BlogForm;
