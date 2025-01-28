import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



export default function CameraScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Camera</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}