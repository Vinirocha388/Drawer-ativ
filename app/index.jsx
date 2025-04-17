import React, { useState, useEffect } from "react";
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

// Componente Skeleton
const HomeScreenSkeleton = () => {
  const { width } = useWindowDimensions();
  
  return (
    <View style={styles.container}>
      <CustomHeader />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Banner Skeleton */}
        <View style={[styles.bannerSkeleton, width > 768 && { height: 300 }]}>
          <View style={styles.bannerTitleSkeleton} />
          <View style={styles.bannerSubtitleSkeleton} />
          <View style={styles.bannerSubtitleSkeleton} />
        </View>

        {/* Menu Button Skeleton */}
        <View style={styles.menuButtonSkeleton} />

        {/* Ferramentas Disponíveis Skeleton */}
        <View style={[styles.cardSkeleton, width > 768 && { width: "70%" }]}>
          <View style={styles.sectionTitleSkeleton} />

          {/* Tool Items Skeletons */}
          <View style={styles.toolItemSkeleton}>
            <View style={styles.toolIconSkeleton} />
            <View style={styles.toolContentSkeleton}>
              <View style={styles.toolNameSkeleton} />
              <View style={styles.toolDescriptionSkeleton} />
            </View>
          </View>

          <View style={styles.toolItemSkeleton}>
            <View style={styles.toolIconSkeleton} />
            <View style={styles.toolContentSkeleton}>
              <View style={styles.toolNameSkeleton} />
              <View style={styles.toolDescriptionSkeleton} />
            </View>
          </View>

          <View style={styles.toolItemSkeleton}>
            <View style={styles.toolIconSkeleton} />
            <View style={styles.toolContentSkeleton}>
              <View style={styles.toolNameSkeleton} />
              <View style={styles.toolDescriptionSkeleton} />
            </View>
          </View>
        </View>

        {/* Como Usar Skeleton */}
        <View style={styles.sectionTitleSkeleton} />

        {/* Service Cards Skeletons */}
        <View style={[styles.serviceCardSkeleton, width > 768 && { width: "70%" }]}>
          <View style={styles.serviceTitleSkeleton} />
          <View style={styles.serviceTextSkeleton} />
          <View style={styles.serviceTextSkeleton} />
        </View>

        <View style={[styles.serviceCardSkeleton, width > 768 && { width: "70%" }]}>
          <View style={styles.serviceTitleSkeleton} />
          <View style={styles.serviceTextSkeleton} />
          <View style={styles.serviceTextSkeleton} />
        </View>

        {/* Sobre o App Skeleton */}
        <View style={[styles.serviceCardSkeleton, width > 768 && { width: "70%" }]}>
          <View style={styles.serviceTitleSkeleton} />
          <View style={styles.serviceTextSkeleton} />
          <View style={styles.serviceTextSkeleton} />
          <View style={styles.serviceTextSkeleton} />
        </View>
      </ScrollView>
    </View>
  );
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1050);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HomeScreenSkeleton />;
  }

  // Renderiza o conteúdo real depois do timer
  return (
    <View style={styles.container}>
      <CustomHeader />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* BANNER */}
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-vector/abstract-colorful-technology-background_23-2148897676.jpg",
          }}
          style={[styles.banner, width > 768 && { height: 300 }]}
        >
          <View style={styles.bannerOverlay} />
          <Text style={[styles.bannerTitle, width > 768 && { fontSize: 32 }]}>Bem-vindo ao MultiMath</Text>
          <Text style={[styles.bannerSubtitle, width > 768 && { fontSize: 16 }]}>
            Seu aplicativo multifuncional com ferramentas úteis para seu dia a dia.
            Navegue facilmente entre as diferentes funcionalidades usando o menu lateral.
          </Text>
        </ImageBackground>

        {/* Botão de Menu */}
        <TouchableOpacity 
          style={[styles.menuButton, width > 768 && { paddingHorizontal: 40, paddingVertical: 15 }]} 
          onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="#000" />
          <Text style={[styles.menuButtonText, width > 768 && { fontSize: 18 }]}>Abrir Menu</Text>
        </TouchableOpacity>

        {/* FERRAMENTAS DISPONÍVEIS */}
        <View style={[styles.card, width > 768 && { width: "70%" }]}>
          <Text style={styles.sectionTitle}>Ferramentas Disponíveis</Text>

          <TouchableOpacity 
            style={styles.toolItem}>
            <Ionicons name="calculator" size={24} color="#fff" />
            <View>
              <Text style={styles.toolName}>Calculadora</Text>
              <Text style={[styles.toolDescription, width > 768 && { maxWidth: 400 }]}>
                Realize cálculos matemáticos básicos e avançados com interface intuitiva
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.toolItem}>
            <Ionicons name="add-circle" size={24} color="#fff" />
            <View>
              <Text style={styles.toolName}>Contador</Text>
              <Text style={[styles.toolDescription, width > 768 && { maxWidth: 400 }]}>
                Ferramenta simples para incrementar e decrementar valores
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.toolItem}>
            <Ionicons name="key" size={24} color="#fff" />
            <View>
              <Text style={styles.toolName}>Gerador de Senhas</Text>
              <Text style={[styles.toolDescription, width > 768 && { maxWidth: 400 }]}>
                Crie senhas seguras e personalizáveis com diferentes níveis de complexidade
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* COMO USAR */}
        <Text style={styles.sectionTitle}>Como Usar o App</Text>

        <View style={[styles.serviceCard, width > 768 && { width: "70%" }]}>
          <Text style={styles.serviceTitle}>Menu Drawer</Text>
          <Text style={styles.serviceText}>
            Deslize da esquerda para a direita na tela ou clique no ícone do menu
            no canto superior esquerdo para acessar todas as ferramentas disponíveis.
          </Text>
        </View>

        <View style={[styles.serviceCard, width > 768 && { width: "70%" }]}>
          <Text style={styles.serviceTitle}>Navegação Simplificada</Text>
          <Text style={styles.serviceText}>
            Acesse rapidamente qualquer ferramenta através do menu lateral e volte
            facilmente para a tela inicial quando precisar.
          </Text>
        </View>

        {/* SOBRE O APP */}
        <View style={[styles.serviceCard, width > 768 && { width: "70%" }]}>
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
  // Estilos para conteúdo real
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
  
  // Estilos para skeleton
  bannerSkeleton: {
    width: '100%',
    height: 200,
    backgroundColor: '#333',
    justifyContent: 'center',
    padding: 20,
  },
  bannerTitleSkeleton: {
    width: '70%',
    height: 30,
    backgroundColor: '#444',
    borderRadius: 5,
    marginBottom: 15,
  },
  bannerSubtitleSkeleton: {
    width: '90%',
    height: 15,
    backgroundColor: '#444',
    borderRadius: 5,
    marginBottom: 8,
  },
  menuButtonSkeleton: {
    width: 150,
    height: 40,
    backgroundColor: '#333',
    borderRadius: 10,
    marginTop: 15,
  },
  cardSkeleton: {
    backgroundColor: '#222',
    padding: 15,
    marginTop: 20,
    borderRadius: 15,
    width: "90%",
  },
  sectionTitleSkeleton: {
    width: 180,
    height: 20,
    backgroundColor: '#333',
    borderRadius: 5,
    marginVertical: 15,
    alignSelf: 'center',
  },
  toolItemSkeleton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  toolIconSkeleton: {
    width: 24,
    height: 24,
    backgroundColor: '#444',
    borderRadius: 12,
    marginRight: 15,
  },
  toolContentSkeleton: {
    flex: 1,
  },
  toolNameSkeleton: {
    width: '50%',
    height: 18,
    backgroundColor: '#444',
    borderRadius: 5,
    marginBottom: 8,
  },
  toolDescriptionSkeleton: {
    width: '90%',
    height: 12,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  serviceCardSkeleton: {
    backgroundColor: "#222",
    width: "90%",
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
  },
  serviceTitleSkeleton: {
    width: '60%',
    height: 20,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 15,
    alignSelf: 'center',
  },
  serviceTextSkeleton: {
    width: '100%',
    height: 12,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 8,
  },
});