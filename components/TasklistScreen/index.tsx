import { useState } from 'react';
import { Keyboard } from 'react-native';
import TaskInput from '../TaskInput';
import Tasklist from '../Tasklist';
import { TasklistWrapper } from './styles';

export default function TasklistScreen() {
	const [task, setTask] = useState('');
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
		<TasklistWrapper>
			<Tasklist
				completeTask={completeTask}
				tasklist={tasklist}
			/>
			<TaskInput
				handleAddTask={handleAddTask}
				handleTextInput={handleTextInput}
				task={task}
			/>
		</TasklistWrapper>
	);
}
