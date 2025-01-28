import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



export default function QuizzesScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Quizzes</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}