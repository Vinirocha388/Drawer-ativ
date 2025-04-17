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
import { Drawer } from "expo-router/drawer";
import CustomHeader from "../components/CustomHeader";
import { useRouter } from "expo-router";

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
            uri: "https://cdn.prod.website-files.com/64dd05b33f019f79a7ec8f43/66aaa0e993b2326603bcde44_academia-24-horas.webp",
          }}
          style={styles.banner}
        >
          <View style={styles.bannerOverlay} /> {/* Camada de opacidade */}
          <Text style={styles.bannerTitle}>Bem vindo</Text>
          <Text style={styles.bannerSubtitle}>
            Nossos sistemas oferecem treinos e dicas especializadas para que
            você tenha um excelente uso e uma ótima saúde
          </Text>
        </ImageBackground>

        {/* Botão de Login */}
        <TouchableOpacity style={styles.loginButton} onPress={() => router.push("../login")}>
          <Text style={styles.loginText}>Fazer Login</Text>
        </TouchableOpacity>

        {/* POSTS DA COMUNIDADE */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Posts da Comunidade</Text>

          <View style={styles.post}>
            <Ionicons name="person-circle" size={24} color="#fff" />
            <View>
              <Text style={styles.postName}>Fulano</Text>
              <Text style={styles.postText}>
                “Hoje foi pesado, mas ver todo mundo dando o seu melhor me
                motivou ainda mais!”
              </Text>
            </View>
          </View>

          <View style={styles.post}>
            <Ionicons name="person-circle" size={24} color="#fff" />
            <View>
              <Text style={styles.postName}>Ciclano</Text>
              <Text style={styles.postText}>
                “Quem mais ama essa sensação pós-treino? É viciante!”
              </Text>
            </View>
            <Ionicons name="heart" size={20} color="red" />
          </View>

          <TouchableOpacity style={styles.forumButton} onPress={() => router.push("../posts")}>
            <Text style={styles.forumText}>Ir para os Posts</Text>
          </TouchableOpacity>
        </View>

        {/* SERVIÇOS */}
        <Text style={styles.sectionTitle}>Nossos Serviços</Text>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Musculação</Text>
          <Text style={styles.serviceText}>
            Treinos personalizados com equipamentos modernos e acompanhamento
            profissional para ganho de força, definição e resistência.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Natação</Text>
          <Text style={styles.serviceText}>
            Treinos de baixo impacto na piscina, perfeitos para condicionamento
            físico e fortalecimento sem sobrecarregar as articulações.
          </Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => router.push("https://bodyhealthy-web.vercel.app/servicos")}>
          <Text style={styles.loginText}>Ver Mais</Text>
        </TouchableOpacity>
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
    ...StyleSheet.absoluteFillObject, // Preenche todo o espaço do banner
    backgroundColor: 'rgba(0, 0, 0, 0.67)', // Fundo translúcido
  },
  bannerTitle: {
    fontSize: 26,
    color: '#ffff',
    fontWeight: 'bold',
    zIndex: 1, // Garante que o texto fique acima da camada de opacidade
  },
  bannerSubtitle: {
    color: '#ffff',
    marginTop: 10,
    fontSize: 13,
    zIndex: 1, // Garante que o texto fique acima da camada de opacidade
  },
  loginButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  loginText: {
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
    marginBottom: 10,
    textAlign: "center",
    color: "#000",
  },
  post: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    gap: 10,
  },
  postName: {
    color: "#00f2ff",
    fontWeight: "bold",
  },
  postText: {
    color: "#fff",
    maxWidth: 230,
  },
  forumButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  forumText: {
    color: "#fff",
    fontWeight: "bold",
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
  },

banner: {
  width: '100%',
  height: 200,
  justifyContent: 'center',
  padding: 20,
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
loginButton: {
  backgroundColor: "#fff",
  paddingHorizontal: 30,
  paddingVertical: 10,
  borderRadius: 10,
  marginTop: 10,
},
loginText: {
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
  marginBottom: 10,
  textAlign: "center",
  color: "#000",
},
post: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#333",
  padding: 10,
  borderRadius: 10,
  marginBottom: 10,
  gap: 10,
},
postName: {
  color: "#00f2ff",
  fontWeight: "bold",
},
postText: {
  color: "#fff",
  maxWidth: 230,
},
forumButton: {
  backgroundColor: "#333",
  paddingVertical: 10,
  borderRadius: 20,
  alignItems: "center",
  marginTop: 10,
},
forumText: {
  color: "#fff",
  fontWeight: "bold",
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
},
});
