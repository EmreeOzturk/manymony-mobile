import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import AppScreen from './screens/App';
import Analytics from './screens/Analytics';
import Budgets from './screens/Budgets';
import Expenses from './screens/Expeneses';
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Appscreen"
          component={AppScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Analytics"
          component={Analytics}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Budgets"
          component={Budgets}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Expenses"
          component={Expenses}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
