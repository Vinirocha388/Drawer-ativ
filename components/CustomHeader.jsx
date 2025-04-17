import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function CustomHeader({ title = "Body & Health" }) {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <View style={styles.header}>
      {/* Botão Menu (Drawer) */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={40} color="#fff" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title} onPress={() => router.push("../")}>{title}</Text>

      {/* Ícone de usuário */}
      <Ionicons onPress={() => router.push("../login")} name="person-circle-outline" size={40} color="#fff"  />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 10, // para não colar no topo
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
