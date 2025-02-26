import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";




export default function quizCompleted() {

    const [quizId, setQuizId] = useState<string | null>(null)
    const [score, setScore] = useState<string | null>(null)

    // Load the name when the component mounts
    useEffect(() => {
    const fetchQuizData = async () => {
        try {
            const storedQuizId = await AsyncStorage.getItem('quizId');
            const storedScore = await AsyncStorage.getItem('quizScore');
            if (storedQuizId != null && storedScore != null) {
                setQuizId(storedQuizId)
                setScore(storedScore)
            }
        } catch (e) {
            console.log(e)
        }
    };

    fetchQuizData();
    }, []);

    if (score != null) {
        if (Number.parseInt(score) < 5) {
            console.log("red")
        }
    }
    


    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>{quizId}</Text>
                <Text>{score}</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}