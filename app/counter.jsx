import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import CustomHeader from "../components/CustomHeader";

// Componente Skeleton
const CounterSkeleton = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <CustomHeader />
      <View style={styles.container}>
        <View style={styles.titleSkeleton} />
        <View style={styles.subtitleSkeleton} />

        <View style={styles.counterContent}>
          <View style={styles.buttonSkeleton} />
          <View style={styles.numSkeleton} />
          <View style={styles.buttonSkeleton} />
        </View>

        <View style={styles.resetContainer}>
          <View style={styles.resetButtonSkeleton} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1050);

    return () => clearTimeout(timer);
  }, []);

  const sum = () => {
    setCounter(counter + 1);
  };
  
  const subtract = () => {
    setCounter(counter - 1);
  };
  
  const reset = () => {
    setCounter(0);
  };

  if (isLoading) {
    return <CounterSkeleton />;
  }

  // Renderiza o conteúdo real depois do timer
  return (
    <SafeAreaView style={styles.safearea}>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={styles.title}>Contador</Text>
        <Text style={styles.subtitle}>Aqui esta o contador:</Text>

        <View style={styles.counterContent}>
          <Pressable id="btn" onPress={subtract} style={styles.subtract}>
            <Text style={styles.operacoes}> Subtrair</Text>
          </Pressable>
          <Text id="num" style={styles.num}>
            {counter}
          </Text>
          <Pressable id="btn" onPress={sum} style={styles.sum}>
            <Text style={styles.operacoes}>Somar </Text>
          </Pressable>
        </View>

        <View style={styles.resetContainer}>
          <Pressable id="btn" onPress={reset} style={styles.reset}>
            <Text style={styles.operacoes}>Resetar </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
  counterContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 20,
  },
  sum: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  subtract: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  reset: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 5,
  },
  resetContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  num: {
    color: "#fff",
    marginHorizontal: 20,
    fontSize: 24,
    textAlign: "center",
  },
  operacoes: {
    color: "#000",
  },
  
  // Estilos para skeleton
  titleSkeleton: {
    width: 120,
    height: 25,
    backgroundColor: "#333",
    borderRadius: 4,
    marginBottom: 10,
  },
  subtitleSkeleton: {
    width: 180,
    height: 15,
    backgroundColor: "#333",
    borderRadius: 4,
    marginBottom: 20,
  },
  buttonSkeleton: {
    width: 80,
    height: 40,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  numSkeleton: {
    width: 40,
    height: 30,
    backgroundColor: "#333",
    borderRadius: 4,
    marginHorizontal: 20,
  },
  resetButtonSkeleton: {
    width: 80,
    height: 40,
    backgroundColor: "#333",
    borderRadius: 10,
    marginTop: 15,
  }
});