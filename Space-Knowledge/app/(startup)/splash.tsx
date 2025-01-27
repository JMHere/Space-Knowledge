import { Link, Redirect, useRouter } from "expo-router";
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function FirstPage() {

  const router = useRouter();

  const signUpPage = () => {
    router.push("/singUp")
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/images/nightsky.jpg')} resizeMode="cover" style={styles.image}>
          <Image source={require('../../assets/images/telescopetrans.png')} style={styles.logo}/>
          <Text style={styles.semiBold}>Learn About Space With Space Knowledge</Text>
          <Text style={styles.text}>Learn from quizzes, events, news, seeing the planets with AR, and observing the start</Text>
          <TouchableOpacity style={styles.button} onPress={signUpPage}>
            <Text style={styles.buttonText}>Start Learning</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  semiBold: {
    color: 'white',
    fontSize: 16,
    lineHeight: 84,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#4BBFEB',
    margin: "10%",
    borderRadius: 20,
    padding: "5%",
  },
  logo: {
    alignSelf: "center",
    marginTop: "25%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  }
});
