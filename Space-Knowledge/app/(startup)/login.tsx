import { useRouter, Link } from "expo-router";
import { Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function LoginPage() {

    const router = useRouter();

    const loginCon = () => {
        router.push("/")
    }
    
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Welcome Back</Text>
                <Image source={require('../../assets/images/singUpImage.jpg')} style={styles.image}/>
                <Text style={styles.h2}>Login</Text>
                <TextInput style={styles.textBox} placeholder="Enter Email"></TextInput>
                <TextInput style={styles.textBox} placeholder="Enter Password"></TextInput>
                <TouchableOpacity style={styles.button} onPress={loginCon}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Don't have an account? <Link href="/signUp" style={styles.link}> SIGN UP</Link></Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    title:  {
        color: "#4BBFEB",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginTop: "20%"
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