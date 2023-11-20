import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '../../config/supabase';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types';

const Login = ({ navigation }: NativeStackScreenProps<AuthStackParamList, 'Login'>) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleLogin() {
    setLoading(true);
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error && !user) {
      setLoading(false);
      alert('Check your email for the login link!');
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" enabled style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.textBox}
        placeholder="Enter your email"
        value={email}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={{ marginTop: 15 }}>Password</Text>
      <TextInput
        style={styles.textBox}
        placeholder="Enter your password"
        value={password}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>Don't have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup');
        }}
        style={styles.button}
      >
        <Text
          style={{
            marginLeft: 5,
          }}
        >
          Register here
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#c0c0c0',
    color: '#404040',
    borderRadius: 5,
    margin: 5,
  },
  textBox: {
    width: 250,
    borderStyle: 'solid',
    borderColor: '#404040',
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
