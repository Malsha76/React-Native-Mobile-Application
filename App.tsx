import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/components/screens/Home';
import MyCart from './src/components/screens/MyCart';
import ProductInfo from './src/components/screens/ProductInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/components/screens/SignIn';
import WelcomePage from './src/components/screens/WelcomePage';
import SignUp from './src/components/screens/SignUp';
function App(): React.JSX.Element {
 
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
