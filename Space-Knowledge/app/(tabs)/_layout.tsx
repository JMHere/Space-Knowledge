import { Tabs } from 'expo-router';
import { Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: '#4BBFEB'}}>
      <Tabs.Screen name='starObserver' options={{ tabBarIcon: ({focused, color}) => (
        <Ionicons 
        name={focused ? "map" : "map-outline"}
        color={color}
        size={20}
        />
      )}}/>
      <Tabs.Screen name='quizzes' options={{ tabBarIcon: ({focused, color}) => (
        <MaterialCommunityIcons 
        name={focused ? "notebook" : "notebook-outline"}
        color={color}
        size={20}
        />
      )}}/>
      <Tabs.Screen name='index' options={{headerShown: true, headerLeft: () => (
        <Image source={require('../../assets/images/space-splash.png')} style={{width: 30, height: 30, borderRadius: 20, margin: 5}}></Image> // Create Link for account
      ),
      headerTitle: () => (
        <Text>Space Knowledge</Text> // TODO Create Link For settings and create settings page
      ),
      headerTitleAlign: "center",
      headerRight: () => (
        <Text style={{margin: 5}}>Settings</Text>
      ), tabBarIcon: ({ focused, color}) => (
        <Ionicons 
        name={focused ? "home-sharp" : "home-outline"}
        color={color}
        size={28}
        />
      )
      }}/>
      <Tabs.Screen name='events' options={{ tabBarIcon: ({focused, color}) => (
        <Ionicons 
        name={focused ? "calendar-sharp" : "calendar-outline"}
        color={color}
        size={20}
        />
      )}}/>
      <Tabs.Screen name='camera' options={{ tabBarIcon: ({focused, color}) => (
        <Ionicons 
        name={focused ? "camera" : "camera-outline"}
        color={color}
        size={20}
        />
      )}}/>
    </Tabs>
  );
}