import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveBackgroundColor: 'blue'}}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name='events' />
    </Tabs>
  );
}