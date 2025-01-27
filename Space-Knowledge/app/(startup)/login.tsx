import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function LoginPage() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Login Page</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}