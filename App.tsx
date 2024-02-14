import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './components/HomeScreen';
import TasklistScreen from './components/TasklistScreen';

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen
					name="Tasklist"
					component={TasklistScreen}
					options={{ title: 'Tasklist' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
