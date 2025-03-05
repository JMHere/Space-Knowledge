import { Link, Redirect } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Agenda, DateData } from "react-native-calendars";

interface AgendaEntry {
    name: string;
    height: number;
    day: string;
  }
  
  interface AgendaSchedule {
    [date: string]: AgendaEntry[];
  }

const timeToString = (time: number) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

export default function EventScreen() {
  const [data, setData] = useState(null);
  const [items, setItems] = useState<AgendaSchedule>({});

  const loadItems = (day: DateData) => {
    //const items = this.state.items || {};
    console.log("loadItems called for", day.timestamp);
    items["2025-03-07"] = []
    setTimeout(() => {
      const newItems = { ...items};

      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!newItems[strTime]) {
            newItems[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
            newItems[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }
      setItems(newItems);
    }, 1000);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Events</Text>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2025-03-07"}
        renderEmptyDate={() => <View style={styles.emptyDate}><Text>No Events</Text></View>}
        theme={{
        selectedDayBackgroundColor: "blue",
        todayTextColor: "red",
      }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    eventItem: { backgroundColor: "#f9f9f9", padding: 15, marginVertical: 5, borderRadius: 10 },
    eventTitle: { fontSize: 16, fontWeight: "bold" },
    eventTime: { fontSize: 14, color: "gray" },
    emptyDate: { alignItems: "center", padding: 20 },
  });
