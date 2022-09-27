import { StyleSheet, Text, View } from "react-native";
import React from "react";

// hooks
import useAxios from "../hooks/useAxios";

const MealList = () => {
  const endpoint = `meals`;
  const { response, loading, error } = useAxios(endpoint);

  if (response) {
    console.log("response MealList", response);
  }

  if (loading) {
    console.log("loading", loading);
  }
  if (error) {
    console.log("error", error);
  }
  return (
    <View>
      <Text>MealList</Text>
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({});
