import { Platform, TouchableHighlight } from 'react-native';
import {
	AddTaskInput,
	ButtonText,
	ButtonWrapper,
	Wrapper as KeyboardWrapper,
} from './styles';

interface TaskInputProps {
	handleAddTask: () => void;
	handleTextInput: (arg: string) => void;
	task: string;
}

export default function TaskInput({
	handleAddTask,
	handleTextInput,
	task,
}: TaskInputProps) {
	return (
		<KeyboardWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<AddTaskInput
				placeholder="Add a task"
				value={task}
				onChangeText={(text: string) => handleTextInput(text)}
			/>
			<TouchableHighlight onPress={() => handleAddTask()}>
				<ButtonWrapper>
					<ButtonText>➕</ButtonText>
				</ButtonWrapper>
			</TouchableHighlight>
		</KeyboardWrapper>
	);
}
