import { Text, StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../customHeader";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const router = useRouter();

interface ItemType {
    id: string,
    name: string
}

interface ItemProps {
    name: string;
    id: string;
}


const saveData = async (id: string) => {
    try {
        await AsyncStorage.setItem('quizId', id);
    } catch (error) {
        console.error('Error saving data', error);
    }
};

const onClickQuiz = (id: string) => {
    console.log(id)
    saveData(id);
    router.push("/questionsPage");
}

const Item: React.FC<ItemProps> = ({ name, id }) => (
    <View style={styles.items}>
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity onPress={() => onClickQuiz(id)}><Text>Take Quiz</Text></TouchableOpacity>
    </View>
);

const renderItem = ({ item }: { item: ItemType }) => <Item name={item.name} id={item.id}/>;

export default function QuizzesScreen() {

    const fetchedData: ItemType[] = [
    ]

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/collections");
                const data = await response.json();
                //console.log(data);
                let index = 0

                for (const item of data.collections) {
                    index = index + 1
                    fetchedData.push({name: item, id: item })
                    console.log(index)
                }
            } catch (error) {
                console.log("Error fetching quiz:", error);
            }
        };

        fetchQuizzes();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <CustomHeader title="Quizzes"/>
                <Text style={styles.title}>Topics</Text>
                <View style={styles.topicContainer}>
                    <TouchableOpacity style={styles.topicButton}><Text style={styles.buttonText}>Stars</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.topicButton}><Text style={styles.buttonText}>Planets</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.topicButton}><Text style={styles.buttonText}>Probes</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.topicButton}><Text style={styles.buttonText}>Events</Text></TouchableOpacity>
                </View>
                <View style={styles.listBlock}>
                <FlatList
                data={fetchedData}
                renderItem={renderItem}
                />
                </View>
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
        fontSize: 14,
        fontWeight: "bold",
    },
    text: {
        margin: 8,
        color: "white",
        textAlign: "center"
    },
    link: {
        color: "#5AC3D3",
    },
    topicContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10
    },
    topicButton: {
        backgroundColor: '#4BBFEB',
        borderRadius: 20,
        padding: 16,
    },
    listBlock: {
        backgroundColor: 'grey',
        margin: 10,
        borderRadius: 20,
        flex: 1,
    },
    items: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
  });


  // Flat List Example

    // const countries: Country[] = [{
    //     id: '1',
    //     name: 'Pakistan',},
    //     {
    //     id: '2',
    //     name: 'United Kingdom',},
    //     {
    //     id: '3',
    //     name: 'Israel',},
    //     {
    //     id: '4',
    //     name: 'India',},
    //     {
    //     id: '5',
    //     name: 'Nigeria',},
    //     {
    //     id: '6',
    //     name: 'Uganda',},
    //     {
    //     id: '7',
    //     name: 'United States',}];

    //     const renderItem = ({ item }: {item: Country}) => {
    //         return (
    //           <View>
    //             <Text style={styles.title}>{item.id} </Text>
    //             <Text>{item.name}</Text>
    //           </View>
    //       );
    //       }