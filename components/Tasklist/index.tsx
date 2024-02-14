import React from 'react';
import { ScrollView } from 'react-native';
import Task from '../Task';
import { Items, Wrapper } from './styles';

interface TasklistProps {
	tasklist: string[];
	completeTask: (index: number) => void;
}

export default function Tasklist({ tasklist, completeTask }: TasklistProps) {
	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
			}}
			keyboardShouldPersistTaps="handled">
			<Wrapper>
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
