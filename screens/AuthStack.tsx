import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './auth/Login';
import Signup from './auth/Signup';
import { AuthStackParamList } from '../types';

const Nav = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Login" component={Login} />
      <Nav.Screen name="Signup" component={Signup} />
    </Nav.Navigator>
  );
};

export default AuthStack;
