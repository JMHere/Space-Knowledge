import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



export default function quizzesScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Star Observer</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}