import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { supabase } from '../config/supabase';
import { Ionicons } from '@expo/vector-icons';

const LogoutButton = () => {
  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <TouchableOpacity onPress={handleLogout} style={styles.button}>
      <Ionicons name="exit-outline" size={24} />
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },
});
