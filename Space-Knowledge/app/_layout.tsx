import { Stack } from "expo-router";

// export const unstable_settings = {
//   initialRouteName: "splash",
// };

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="(startup)" options={{headerShown: false}}/>
    </Stack>
  );
}
