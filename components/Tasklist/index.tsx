import React from 'react';
import { ScrollView } from 'react-native';
import Task from '../Task';
import { Items, Title, Wrapper } from './styles';

interface TasklistProps {
	tasklist: string[];
	completeTask: () => void;
}

export default function Tasklist({ tasklist, completeTask }: TasklistProps) {
	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
			}}
			keyboardShouldPersistTaps="handled">
			<Wrapper>
				<Title>Tasklist</Title>
				<Items>
					{tasklist.map((item, index) => {
						return (
							<Task
								key={index}
								title={item}
								index={index}
								completeTask={completeTask}
							/>
						);
					})}
				</Items>
			</Wrapper>
		</ScrollView>
	);
}
