import { Stack } from "expo-router";

export default function StartUpLayout() {
    return (
        <Stack screenOptions={{headerShown: true}}>
            <Stack.Screen name="splash" />
            <Stack.Screen name="signUp" />
            <Stack.Screen name="login" />
        </Stack>
    )
}