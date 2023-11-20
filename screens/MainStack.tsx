import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './main/Main';
import { MainStackParamList } from '../types';
import LogoutButton from '../components/LogoutButton';

const Nav = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: 'Mercado',
        headerBackTitleVisible: false,
        headerRight: () => <LogoutButton />,
      }}
    >
      <Nav.Screen name="Main" component={Main} />
    </Nav.Navigator>
  );
};

export default MainStack;
