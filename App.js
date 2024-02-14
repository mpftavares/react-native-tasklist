import { useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import TaskInput from './components/TaskInput';
import Tasklist from './components/Tasklist';
import getRandomPastelColor from './utils/getRandomPastelColor';

export default function App() {
	const [task, setTask] = useState();
	const [tasklist, setTasklist] = useState([]);

	const handleAddTask = () => {
		if (task) {
			Keyboard.dismiss();
			setTasklist([...tasklist, task]);
			setTask('');
		}
		return null;
	};

	function completeTask(index) {
		let itemsCopy = [...tasklist];
		itemsCopy.splice(index, 1);
		setTasklist(itemsCopy);
	}

	function handleTextInput(text) {
		setTask(text);
	}

	return (
		<View style={styles.container}>
			<Tasklist
				handleAddTask={handleAddTask}
				completeTask={completeTask}
				tasklist={tasklist}
			/>
			<TaskInput
				handleAddTask={handleAddTask}
				handleTextInput={handleTextInput}
				task={task}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'aliceblue',
	},
});
