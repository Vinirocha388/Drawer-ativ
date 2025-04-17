import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import CustomHeader from '../components/CustomHeader';

// Componente Skeleton
const PasswordSkeleton = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader />
      <View style={styles.container}>
        <View style={styles.passwordLabelSkeleton} />
        <View style={styles.passwordSkeleton} />
        <View style={styles.buttonSkeleton} />
      </View>
    </SafeAreaView>
  );
};

const Password = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1050);

    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading) {
    return <PasswordSkeleton />;
  }

  // Renderiza o conteúdo real depois do timer
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
  },
  
  // Estilos para skeleton
  passwordLabelSkeleton: {
    width: '40%',
    height: 16,
    backgroundColor: '#333',
    borderRadius: 4,
    marginBottom: 10,
  },
  passwordSkeleton: {
    width: '80%',
    height: 60,
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    backgroundColor: '#222',
  },
  buttonSkeleton: {
    backgroundColor: '#222',
    width: '60%',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  }
});

export default Password;