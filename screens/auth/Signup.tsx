import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AuthStackParamList } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { supabase } from '../../config/supabase';

const Signup = ({ navigation }: NativeStackScreenProps<AuthStackParamList, 'Signup'>) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSignup() {
    setLoading(true);
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (user) {
      console.log('user created, adding profile');

      const result = await supabase.from('profiles').insert({
        id: user.id,
        email: email,
        name: name,
      });

      console.log('profile created', result);
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }

    if (!error && !user) {
      setLoading(false);
      alert('Check your email for the login link!');
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" enabled style={styles.container}>
      <Text style={{ marginTop: 15 }}>Name</Text>
      <TextInput
        style={styles.textBox}
        placeholder="Enter your name"
        value={name}
        autoCapitalize="none"
        onChangeText={(text) => setName(text)}
      />

      <Text style={{ marginTop: 15 }}>Email</Text>
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
      <TouchableOpacity onPress={handleSignup} style={styles.button}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <Text>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.button}
      >
        <Text
          style={{
            marginLeft: 5,
          }}
        >
          Login here
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Signup;

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
