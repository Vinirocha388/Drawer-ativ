import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ToastAndroid, Platform } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import CustomHeader from '../components/CustomHeader';

// Componente Skeleton
const PasswordSkeleton = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader />
      <View style={styles.container}>
        <View style={styles.passwordLabelSkeleton} />
        <View style={styles.passwordSkeleton} />
        <View style={styles.buttonContainerSkeleton}>
          <View style={styles.buttonSkeleton} />
          <View style={styles.buttonSkeleton} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Password = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1050);

    return () => clearTimeout(timer);
  }, []);

  // Reset do status de cópia após 2 segundos
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const generatePassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let generatedPassword = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    
    setPassword(generatedPassword);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!password) return;
    
    try {
      await Clipboard.setStringAsync(password);
      setCopied(true);
      
      // Mostrar feedback em diferentes plataformas
      if (Platform.OS === 'android') {
        ToastAndroid.show('Senha copiada!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Erro ao copiar para a área de transferência:', error);
    }
  };

  if (isLoading) {
    return <PasswordSkeleton />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={styles.passwordLabel}>Sua senha gerada:</Text>
        
        <View style={styles.passwordContainer}>
          <Text style={styles.password}>{password || "Nenhuma senha gerada"}</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={generatePassword}
          >
            <Text style={styles.buttonText}>Gerar Senha</Text>
          </TouchableOpacity>
          
          {password && (
            <TouchableOpacity 
              style={[styles.button, copied && styles.copiedButton]} 
              onPress={copyToClipboard}
              disabled={!password}
            >
              <Text style={styles.buttonText}>{copied ? 'Copiado!' : 'Copiar Senha'}</Text>
            </TouchableOpacity>
          )}
        </View>
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
  passwordContainer: {
    width: '80%',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#000',
  },
  password: {
    fontSize: 24,
    padding: 15,
    textAlign: 'center',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    minWidth: '45%',
    alignItems: 'center',
  },
  copiedButton: {
    backgroundColor: '#1e3a8a',
    borderColor: '#3b82f6',
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
  buttonContainerSkeleton: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
  buttonSkeleton: {
    backgroundColor: '#222',
    width: '45%',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  }
});

export default Password;