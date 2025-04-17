import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';

export default function Posts() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomHeader />
     
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  menuButton: {
    padding: 20,
    alignSelf: 'flex-start',
  },
  profileHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },

  '@media (max-width: 768px)': {
    container: {
      padding: 10,
    },
    profileHeader: {
      height: 150,
    },
    avatar: {
      width: 80,
      height: 80,
    },
    name: {
      fontSize: 16,
    },
    email: {
      fontSize: 12,
    },
  },
});