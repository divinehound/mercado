import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Splash';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Navigation = () => {
  const { user, session } = useContext(AuthContext);

  console.log('Navigation', user, session);
  return (
    <NavigationContainer>
      {user === undefined && <Splash />}
      {user === false && <AuthStack />}
      {user && <MainStack />}
    </NavigationContainer>
  );
};

export default Navigation;
