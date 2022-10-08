import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import CameraScreen from './screens/Camera';
import './i18n';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { ModelProvider } from './hooks/useModel';

export type RootStackNavigatorParams = {
  Welcome: undefined;
  Camera: undefined;
};

const AppContent = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        {/* <Stack.Navigator
          screenOptions={{
            header: () => <></>,
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default AppContent;
