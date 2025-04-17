import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeader"; // Importando o cabeçalho personalizado

const UserCard = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    aboutGoal: "",
    restrictions: "",
    fitnessLevel: "",
    preferences: "",
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleChange = (key, value) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  return (
    <View style={[styles.card, { backgroundColor: darkMode ? "rgba(39, 39, 39, 0.8)" : "rgba(255, 255, 255, 0.8)" }]}>
      {/* Header de Navegação */}
      <CustomHeader />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileImageContainer}>
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/736x/e5/df/45/e5df457e8de5d0aae37691c00e8a672e.jpg",
            }}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.cardContent}>
          <Field 
            label="Nome" 
            value={userInfo.name} 
            onChange={(text) => handleChange("name", text)} 
            darkMode={darkMode}
          />
          <Field 
            label="Idade" 
            value={userInfo.age} 
            onChange={(text) => handleChange("age", text)} 
            keyboardType="numeric" 
            darkMode={darkMode}
          />
          <Field 
            label="Sexo" 
            value={userInfo.gender} 
            onChange={(text) => handleChange("gender", text)} 
            darkMode={darkMode}
          />
          <Field 
            label="Altura" 
            value={userInfo.height} 
            onChange={(text) => handleChange("height", text)} 
            darkMode={darkMode}
          />
          <Field 
            label="Peso" 
            value={userInfo.weight} 
            onChange={(text) => handleChange("weight", text)} 
            darkMode={darkMode}
          />
          <Field 
            label="Objetivo" 
            value={userInfo.goal} 
            onChange={(text) => handleChange("goal", text)} 
            darkMode={darkMode}
          />
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: darkMode ? "#fff" : "#fff" }]} 
        onPress={() => alert("Informações salvas com sucesso!")}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const Field = ({ label, value, onChange, multiline = false, keyboardType = "default", darkMode }) => (
  <View style={styles.fieldContainer}>
    <Text style={[styles.cardTitle, { color: darkMode ? "#fff" : "#000" }]}>{label}</Text>
    <TextInput
      style={[
        styles.cardInput, 
        { 
          color: darkMode ? "#fff" : "#000",
          borderColor: darkMode ? "#ccc" : "#666"
        }
      ]}
      value={value}
      onChangeText={onChange}
      multiline={multiline}
      keyboardType={keyboardType}
      placeholder={`Digite seu ${label.toLowerCase()}`}
      placeholderTextColor={darkMode ? "#999" : "#666"}
    />
  </View>
);

const LoginScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={[styles.screenContainer, { backgroundColor: darkMode ? "#000" : "#fff" }]}>
      <ImageBackground
        source={{
          uri: "https://cdn.prod.website-files.com/64dd05b33f019f79a7ec8f43/66aaa0e993b2326603bcde44_academia-24-horas.webp",
        }}
        style={styles.backgroundImage}
        blurRadius={5}
      />
      <UserCard navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    flex: 1,
    padding: 0,
  },
  cardContent: {
    marginTop: 10,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    padding: 10,
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    margin: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },



});

export default LoginScreen;