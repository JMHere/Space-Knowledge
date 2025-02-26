import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";


interface ItemType {
    id: string,
    question: string,
    ans: string[]
    correctAns: string,
}

interface ItemProps {
    answer: string
}

const venus: ItemType[] = [
    {
        "id": "1",
        "question": "What is the mass of Venus?",
        "ans": ["4.8675 × 10^24 kg", "5.972 × 10^24 kg", "3.301 × 10^23 kg", "1.898 × 10^27 kg"],
        "correctAns": "4.8675 × 10^24 kg"
      },
      {
        "id": "2",
        "question": "What is the density of Venus?",
        "ans": ["5514 kg/m³", "5243 kg/m³", "3930 kg/m³", "6870 kg/m³"],
        "correctAns": "5243 kg/m³"
      },
      {
        "id": "3",
        "question": "What is the velocity of Venus?",
        "ans": ["24.07 km/s", "35.02 km/s", "47.87 km/s", "19.62 km/s"],
        "correctAns": "35.02 km/s"
      },
      {
        "id": "4",
        "question": "What is the surface gravity of Venus?",
        "ans": ["9.81 m/s²", "3.71 m/s²", "8.87 m/s²", "11.15 m/s²"],
        "correctAns": "8.87 m/s²"
      },
      {
        "id": "5",
        "question": "What is the escape velocity of Venus?",
        "ans": ["10.36 km/s", "11.19 km/s", "9.42 km/s", "8.72 km/s"],
        "correctAns": "10.36 km/s"
      },
      {
        "id": "6",
        "question": "What is the primary component of Venus' atmosphere?",
        "ans": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
        "correctAns": "Carbon Dioxide"
      },
      {
        "id": "7",
        "question": "What is Venus mostly composed of?",
        "ans": ["Iron and Nickel", "Basaltic Rock", "Hydrogen and Helium", "Ice and Water"],
        "correctAns": "Basaltic Rock"
      },
      {
        "id": "8",
        "question": "How does Venus' rotation compare to other planets?",
        "ans": [
          "It rotates from west to east like most planets",
          "It does not rotate at all",
          "It rotates from east to west like Uranus",
          "It rotates faster than Earth"
        ],
        "correctAns": "It rotates from east to west like Uranus"
      },
      {
        "id": "9",
        "question": "How long does Venus take to complete one full rotation?",
        "ans": ["243 Earth days", "117 Earth days", "365 Earth days", "12 Earth hours"],
        "correctAns": "243 Earth days"
      },
      {
        "id": "10",
        "question": "Why is Venus the hottest planet in the solar system?",
        "ans": [
          "Because it is the closest planet to the Sun",
          "Because of its runaway greenhouse effect",
          "Because it has an iron core generating extreme heat",
          "Because of its fast rotation"
        ],
        "correctAns": "Because of its runaway greenhouse effect"
      }
]

const saveQuizData = async (id: string, score: number) => {
  try {
      await AsyncStorage.setItem('quizId', id);
      await AsyncStorage.setItem('quizScore', score.toString())
  } catch (error) {
      console.error('Error saving data', error);
  }
};


// TODO 
// CSS
// Score tacker

export default function Questions() {

  const router = useRouter();

    const [quizId, setQuizId] = useState<string |null>(null);
    const [currentIndex, setIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [clicked, setClicked] = useState(false)
    const [final, setFinal] = useState(false)
    const [score, setScore] = useState(0)
    const [data, setdata] = useState<ItemType[]>(venus)

  // Load the name when the component mounts
  useEffect(() => {
    const fetchName = async () => {
        try {
            const storedName = await AsyncStorage.getItem('quizId');
            if (storedName != null) {
                setQuizId(storedName)
                console.log(storedName)
                fetchQuiz(storedName)
            }
        } catch (e) {
            console.log(e)
        }
      
    };

    const fetchedData: ItemType[] = [
    ]

    const fetchQuiz = async (quizName: string) => {
      try {
        const response = await fetch("http://127.0.0.1:8000/quiz/" + quizName);
        const data = await response.json();
        console.log(data);
        console.log(data.questions[0])
        for (const item of data.questions) {
          fetchedData.push({id: item.id, question: item.question, ans: item.ans, correctAns: item.correctAns})
        }
        console.log(fetchedData)
        setdata(fetchedData)

    } catch (error) {
        console.log("Error fetching quiz:", error);
    }
    }

    fetchName();
    console.log(data)
  }, []);
    

    // Handle when user clicks on a possible answer.
    const handleSelected = (option: string) => {
        setSelectedAnswer(option)
        setClicked(true)
        // Keep Score
        if (data[currentIndex].correctAns == option) {
          setScore(score + 1)
        }
    }

    const nextQuestion = () => {
      setIndex(currentIndex + 1);
      setClicked(false)
      // Check if reached final question
      if (currentIndex == data.length - 2) {
        setFinal(true)
        console.log(final)
      }
    }

    // Redirect when they reach the end of the quiz
    const quizDone = () => {
      if (quizId != null) {
        saveQuizData(quizId, score)
      }
      router.push("/quizCompleted")
    }

    // Answer
    const Item: React.FC<ItemProps> = ({ answer }) => (
    <View>
        <TouchableOpacity
        style={[selectedAnswer == answer
            ? answer == data[currentIndex].correctAns
            ? styles.correctAnswer
            : styles.wrongAnswer
            : null,
            data[currentIndex].correctAns == answer && clicked == true ? styles.correctAnswer : null
        ]
        }
        onPress={() => handleSelected(answer)}
        disabled={clicked != false}
        ><Text>{answer}</Text></TouchableOpacity>
    </View>
);

const renderItem = ({ item }: { item: string }) => <Item answer={item}/>;

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text style={styles.topic}>Topic</Text>
                <Text>{quizId ?? 'No Id recieved'}</Text>
                <Text style={styles.score}>{score} / {data.length}</Text>

                <View style={styles.quizContainer}>
                <Text>{data[currentIndex].question}</Text>

                
                <FlatList // Displaying each possible answer
                data={data[currentIndex].ans}
                renderItem={renderItem}
                />
                

                <TouchableOpacity // Next question button
                style={{ display: final ? 'none': 'flex', backgroundColor: clicked ? 'white' : 'grey'}}
                onPress={() => nextQuestion()}
                disabled={clicked == false}
                ><Text>Next</Text></TouchableOpacity>

                <TouchableOpacity // Button when reaching the last question
                style={{ display: final ? 'flex' : 'none'}}
                onPress={() => quizDone()}
                ><Text>Done</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({ 
    quizContainer: {
      borderStyle: 'solid',
      borderColor: 'black',
      margin: 10,
      borderWidth: 2,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: '75%',
      alignSelf: 'center'
    },
    score: {
      alignSelf: 'flex-end',
      margin: 5,
      backgroundColor: 'grey',
      padding: 2,
    },
    topic: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 22
    },
    wrongAnswer: {
        backgroundColor: "#e74c3c", // Red
    },
    correctAnswer: {
        backgroundColor: "#2ecc71", // Green
    }
})