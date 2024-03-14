import { Tabs } from 'expo-router'
import { Text } from 'tamagui'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Text>Hello!</Text>,
        }}
      />

      <Tabs.Screen
        name='create'
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <Text>Create!</Text>,
        }}
      />
    </Tabs>
  )
}
