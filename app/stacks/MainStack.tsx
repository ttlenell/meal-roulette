import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import MealSelectionScreen from "../screens/MealSelectionScreen";
import MealDetailedScreen from "../screens/MealDetailedScreen";

// types
import { MainStackParamList } from "../types/MainStackParamList";

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackScreens = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name='MealSelection' component={MealSelectionScreen} />
      <MainStack.Screen name='MealDetailed' component={MealDetailedScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
