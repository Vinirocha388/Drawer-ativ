import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeader";

const { width } = Dimensions.get("window");

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [focused, setFocused] = useState(null);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const slideAnim = useState(new Animated.Value(50))[0];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleFocus = (inputName) => {
    setFocused(inputName);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const isFormValid = () => {
    return formData.nome && formData.email && formData.mensagem;
  };

  const renderInputIcon = (name) => {
    switch (name) {
      case 'nome':
        return <Ionicons name="person-outline" size={20} color="#fff" />;
      case 'email':
        return <MaterialCommunityIcons name="email-outline" size={20} color="#fff" />;
      case 'mensagem':
        return <MaterialCommunityIcons name="message-text-outline" size={20} color="#fff" />;
      default:
        return null;
    }
  };

  const primaryColor = "#fff";
  const backgroundColor = "#000";
  const cardColor = "#000";
  const textColor = "#fff";
  const subtextColor = "#fff";
  const borderColor = "#E0E0E0";
  const buttonColor = "#000";

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.screenContainer, { backgroundColor }]}
    >
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <CustomHeader />

      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View 
          style={[
            styles.contentContainer,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
          ]}
        >
          {/* Título e Subtítulo */}
          <View style={styles.titleContainer}>
            <Text style={[styles.contactTitle, { color: textColor }]}>
              Entre em Contato
            </Text>
            <Text style={[styles.subtitle, { color: subtextColor }]}>
              Envie sua mensagem e retornaremos em breve
            </Text>
          </View>

          {/* Card do Formulário */}
          <View style={[styles.formCard, { backgroundColor: cardColor, borderColor: borderColor }]}>
            {/* Nome */}
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: textColor }]}>Nome</Text>
              <View style={[
                styles.inputContainer, 
                { borderColor: focused === 'nome' ? primaryColor : borderColor }
              ]}>
                {renderInputIcon('nome')}
                <TextInput
                  style={[styles.input, { color: textColor }]}
                  value={formData.nome}
                  onChangeText={(text) => handleChange("nome", text)}
                  placeholder="Seu nome completo"
                  placeholderTextColor={subtextColor}
                  onFocus={() => handleFocus('nome')}
                  onBlur={handleBlur}
                />
              </View>
            </View>

            {/* E-mail */}
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: textColor }]}>E-mail</Text>
              <View style={[
                styles.inputContainer, 
                { borderColor: focused === 'email' ? primaryColor : borderColor }
              ]}>
                {renderInputIcon('email')}
                <TextInput
                  style={[styles.input, { color: textColor }]}
                  value={formData.email}
                  onChangeText={(text) => handleChange("email", text)}
                  placeholder="Seu melhor e-mail"
                  placeholderTextColor={subtextColor}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                />
              </View>
            </View>

            {/* Mensagem */}
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: textColor }]}>Mensagem</Text>
              <View style={[
                styles.inputContainer, 
                styles.messageContainer,
                { borderColor: focused === 'mensagem' ? primaryColor : borderColor }
              ]}>
                {renderInputIcon('mensagem')}
                <TextInput
                  style={[styles.input, styles.multilineInput, { color: textColor }]}
                  value={formData.mensagem}
                  onChangeText={(text) => handleChange("mensagem", text)}
                  placeholder="Escreva sua mensagem aqui..."
                  placeholderTextColor={subtextColor}
                  multiline
                  onFocus={() => handleFocus('mensagem')}
                  onBlur={handleBlur}
                />
              </View>
            </View>

            {/* Botão de envio */}
            <TouchableOpacity
              style={[
                styles.submitButton, 
                { backgroundColor: isFormValid() ? primaryColor : subtextColor },
              ]}
              onPress={() => {
                if (isFormValid()) {
                  alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
                } else {
                  alert("Por favor, preencha todos os campos.");
                }
              }}
              disabled={!isFormValid()}
            >
              <Text style={styles.submitButtonText}>ENVIAR MENSAGEM</Text>
              <Ionicons name="send" size={18} color="#000" style={styles.sendIcon} />
            </TouchableOpacity>
          </View>

          {/* Informações de contato alternativas */}
          <View style={[styles.contactInfoCard, { backgroundColor: cardColor, borderColor: borderColor }]}>
            <Text style={[styles.contactInfoTitle, { color: textColor }]}>
              Outras formas de contato
            </Text>
            
            <View style={styles.contactItem}>
              <View style={[styles.iconCircle, { backgroundColor: primaryColor }]}>
                <Ionicons name="call-outline" size={18} color="#000" />
              </View>
              <View>
                <Text style={[styles.contactLabel, { color: subtextColor }]}>Telefone</Text>
                <Text style={[styles.contactValue, { color: textColor }]}>(19) 99281-3822</Text>
              </View>
            </View>
            
            <View style={styles.contactItem}>
              <View style={[styles.iconCircle, { backgroundColor: primaryColor }]}>
                <Ionicons name="mail-outline" size={18} color="#000" />
              </View>
              <View>
                <Text style={[styles.contactLabel, { color: subtextColor }]}>E-mail</Text>
                <Text style={[styles.contactValue, { color: textColor }]}>vinicius.a.rocha8@aluno.senai.br</Text>
              </View>
            </View>
            
            <View style={styles.contactItem}>
              <View style={[styles.iconCircle, { backgroundColor: primaryColor }]}>
                <Ionicons name="location-outline" size={18} color="#" />
              </View>
              <View>
                <Text style={[styles.contactLabel, { color: subtextColor }]}>Endereço</Text>
                <Text style={[styles.contactValue, { color: textColor }]}>Rua Saúde, 123 - São Paulo, SP</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },
  contactTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  formCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
  },
  messageContainer: {
    height: 120,
    alignItems: "flex-start",
    paddingTop: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  sendIcon: {
    marginLeft: 8,
  },
  contactInfoCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
  },
  contactInfoTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  contactLabel: {
    fontSize: 14,
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: "500",
  },
  socialContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  socialTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
});

export default ContactScreen;