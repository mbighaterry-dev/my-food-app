import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet, StatusBar,} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/Login');
    }, 6000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <View style={styles.container}>
        <StatusBar barStyle='default'/>
      
      {/* <Image
        source={require("../assets/chopchop-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      /> */}

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
            <Ionicons name="restaurant-outline" size={30} color="#de6e0cff" />
            <Text style={{ fontSize: 24, fontWeight: "700", marginLeft: 2, color:'#111827' }}>ChopChop</Text>
          </View>
      <ActivityIndicator size="large" color="#de6e0cff" style={{ marginTop: 20 }} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9eaddff", 
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
  },
});


