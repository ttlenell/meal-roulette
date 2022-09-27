import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const RefreshButton = (onPress: any) => {
  return (
    <TouchableOpacity style={styles.refreshButton}>
      <Text>RefreshButton</Text>
    </TouchableOpacity>
  );
};

export default RefreshButton;

const styles = StyleSheet.create({
  refreshButton: {
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
