import React from "react";
import AppContainer from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/routes/MainNavigator";

const App = () => {
  return <MainNavigator />;
};

export default App;
