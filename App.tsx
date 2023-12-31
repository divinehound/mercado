import 'react-native-url-polyfill/auto';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AuthProvider from './providers/AuthProvider';
import Navigation from './screens/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
