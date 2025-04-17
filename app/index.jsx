import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";
import { useRouter } from "expo-router";
import { useWindowDimensions } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <CustomHeader />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* BANNER */}
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-vector/abstract-colorful-technology-background_23-2148897676.jpg",
          }}
          style={styles.banner}
        >
          <View style={styles.bannerOverlay} />
          <Text style={styles.bannerTitle}>Bem-vindo ao MultiMath</Text>
          <Text style={styles.bannerSubtitle}>
            Seu aplicativo multifuncional com ferramentas úteis para seu dia a dia.
            Navegue facilmente entre as diferentes funcionalidades usando o menu lateral.
          </Text>
        </ImageBackground>

        {/* Botão de Menu */}
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="#000" />
          <Text style={styles.menuButtonText}>Abrir Menu</Text>
        </TouchableOpacity>

        {/* FERRAMENTAS DISPONÍVEIS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Ferramentas Disponíveis</Text>

          <TouchableOpacity 
            style={styles.toolItem}>
            <Ionicons name="calculator" size={24} color="#fff" />
            <View>
              <Text style={styles.toolName}>Calculadora</Text>
              <Text style={styles.toolDescription}>
                Realize cálculos matemáticos básicos e avançados com interface intuitiva
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.toolItem}>
            <Ionicons name="add-circle" size={24} color="#fff" />
            <View>
              <Text style={styles.toolName}>Contador</Text>
              <Text style={styles.toolDescription}>
                Ferramenta simples para incrementar e decrementar valores
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.toolItem}>
            <Ionicons name="key" size={24} color="#fff" />
            <View>
              <Text style={styles.toolName}>Gerador de Senhas</Text>
              <Text style={styles.toolDescription}>
                Crie senhas seguras e personalizáveis com diferentes níveis de complexidade
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* COMO USAR */}
        <Text style={styles.sectionTitle}>Como Usar o App</Text>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Menu Drawer</Text>
          <Text style={styles.serviceText}>
            Deslize da esquerda para a direita na tela ou clique no ícone do menu
            no canto superior esquerdo para acessar todas as ferramentas disponíveis.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Navegação Simplificada</Text>
          <Text style={styles.serviceText}>
            Acesse rapidamente qualquer ferramenta através do menu lateral e volte
            facilmente para a tela inicial quando precisar.
          </Text>
        </View>

        {/* SOBRE O APP */}
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Sobre o MultiMath</Text>
          <Text style={styles.serviceText}>
            Este aplicativo foi desenvolvido como demonstração da navegação Drawer
            no React Native, exibindo diferentes funcionalidades em um único aplicativo
            de forma organizada e intuitiva.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scroll: {
    alignItems: "center",
    paddingBottom: 40,
  },
  banner: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    padding: 20,
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.67)',
  },
  bannerTitle: {
    fontSize: 26,
    color: '#ffff',
    fontWeight: 'bold',
    zIndex: 1,
  },
  bannerSubtitle: {
    color: '#ffff',
    marginTop: 10,
    fontSize: 13,
    zIndex: 1,
  },
  menuButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  menuButtonText: {
    fontWeight: "bold",
    color: "#000",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 20,
    borderRadius: 15,
    width: "90%",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 15,
    textAlign: "center",
    color: "#fff",
  },
  toolItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    gap: 15,
  },
  toolName: {
    color: "#00f2ff",
    fontWeight: "bold",
    fontSize: 16,
  },
  toolDescription: {
    color: "#fff",
    maxWidth: 250,
    fontSize: 12,
  },
  serviceCard: {
    backgroundColor: "#222",
    width: "90%",
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
  },
  serviceTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    textAlign: "center",
  },
  serviceText: {
    color: "#ddd",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
});

const { width } = useWindowDimensions();

const responsiveStyles = StyleSheet.create({
  banner: {
    height: width > 768 ? 300 : 200,
  },
  bannerTitle: {
    fontSize: width > 768 ? 32 : 26,
  },
  bannerSubtitle: {
    fontSize: width > 768 ? 16 : 13,
  },
  menuButton: {
    paddingHorizontal: width > 768 ? 40 : 30,
    paddingVertical: width > 768 ? 15 : 10,
  },
  menuButtonText: {
    fontSize: width > 768 ? 18 : 14,
  },
  card: {
    width: width > 768 ? "70%" : "90%",
  },
  toolDescription: {
    maxWidth: width > 768 ? 400 : 250,
  },
  serviceCard: {
    width: width > 768 ? "70%" : "90%",
  },
});

const combinedStyles = { ...styles, ...responsiveStyles };