import { Link, Redirect } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useState } from "react";

export default function EventScreen() {
    const [data, setData] = useState(null);

    return (
        <SafeAreaView>
            <Text>Events</Text>
        </SafeAreaView>
    )
}