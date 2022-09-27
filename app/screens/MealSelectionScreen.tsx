import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RefreshButton from "../components/RefreshButton";

const MealSelectionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MealSelectionScreen</Text>
      <RefreshButton />
    </SafeAreaView>
  );
};

export default MealSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
