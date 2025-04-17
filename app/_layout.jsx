import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer 
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#000',
          opacity: 0.7,
          width: '80%',
        },
        drawerActiveBackgroundColor: '#f4f4f4',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Início',
          title: 'Home',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="calculator"
        options={{
          drawerLabel: 'Calculadora',
          title: 'Calculadora',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="counter"
        options={{
          drawerLabel: 'Contador',
          title: 'COntador',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="password"
        options={{
          drawerLabel: 'Gerador de Senhas',
          title: 'Gerador de Senhas',
          headerShown: false,
          headerShowoginn: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="key" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}