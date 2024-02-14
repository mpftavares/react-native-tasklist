import React from 'react';
import { Pressable, Text } from 'react-native';
import { Square, TaskItem, TaskLeft, TaskText } from './styles';
import useRandomColor from '../../hooks/useRandomColor';

interface TaskProps {
	title: string;
	index: number;
	completeTask: (index: number) => void;
}

export default function Task({ title, index, completeTask }: TaskProps) {
	const backgroundColor = useRandomColor();

	return (
		<TaskItem>
			<TaskLeft>
				<Square backgroundColor={backgroundColor}></Square>
				<TaskText>{title}</TaskText>
			</TaskLeft>
			<Pressable onPress={() => completeTask(index)}>
				<Text>❌</Text>
			</Pressable>
		</TaskItem>
	);
}
