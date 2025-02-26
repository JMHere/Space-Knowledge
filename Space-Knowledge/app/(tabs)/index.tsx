import { Link, Redirect } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../customHeader";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CustomHeader title="Home" />
        <Text style={styles.title}>Space Knowledge</Text>
        <Link href="/login" style={styles.link}>Log Out</Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

const styles = StyleSheet.create({
  title:  {
      color: "#c",
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
  },
  container: {
      flex: 1,
      backgroundColor: 'black'
  },
  image: {
      alignSelf: "center",
      width: 150,
      height: 150,
      margin: "2%"
  },
  h2: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
      margin: "5%"
  },
  textBox: {
      backgroundColor: "white",
      borderRadius: 20,
      marginLeft: "20%",
      marginRight: "20%",
      marginTop: "5%",
      padding: 10
  },
  button: {
      backgroundColor: '#4BBFEB',
      marginTop: "10%",
      marginLeft: "20%",
      marginRight: "20%",
      borderRadius: 20,
      padding: 16,
  },
  buttonText: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
  },
  text: {
      margin: 8,
      color: "white",
      textAlign: "center"
  },
  link: {
      color: "#5AC3D3",
  }
});
