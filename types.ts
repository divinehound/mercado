import { NavigatorScreenParams } from '@react-navigation/native';

export type MainStackParamList = {
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type MainTabsParamList = {
  Feed: NavigatorScreenParams<MainStackParamList>;
  Discover: undefined;
  SellerCentral: undefined;
};
