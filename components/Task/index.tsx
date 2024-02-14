import React, { useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import getRandomPastelColor from '../../utils/getRandomPastelColor';
import { Square, TaskItem, TaskLeft, TaskText } from './styles';

interface TaskProps {
	title: string;
	index: number;
	completeTask: (index: number) => void;
}

export default function Task({ title, index, completeTask }: TaskProps) {
	const [backgroundColor, setBackgroundColor] = useState<string>('');

	useEffect(() => {
		const randomBackgroundColor = getRandomPastelColor();
		setBackgroundColor(randomBackgroundColor);
	}, []);

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
