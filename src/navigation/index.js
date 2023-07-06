import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/ChatScreen";
import SingleChat from "../screens/SingleChat";
import MainTabNavigator from "./MainTabNavigator/MainTabNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "whitesmoke" } }}
      >
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chats" component={ChatScreen} />
        <Stack.Screen name="Chat" component={SingleChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
