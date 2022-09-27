// navigation
import { NavigationContainer } from "@react-navigation/native";

// stacks
import MainStackScreens from "./app/stacks/MainStack";

const App = () => {
  return (
    <NavigationContainer>
      <MainStackScreens />
    </NavigationContainer>
  );
};

export default App;
