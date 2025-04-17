import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import CustomHeader from '../components/CustomHeader';

const Password = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let generatedPassword = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    
    setPassword(generatedPassword);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={styles.passwordLabel}>Sua senha gerada:</Text>
        <Text style={styles.password}>{password || "Nenhuma senha gerada"}</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={generatePassword}
        >
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  passwordLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
  },
  password: {
    fontSize: 24,
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#000',
    minWidth: '80%',
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    minWidth: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Password;