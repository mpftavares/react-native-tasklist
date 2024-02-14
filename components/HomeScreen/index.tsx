import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import getRandomPastelColor from '../../utils/getRandomPastelColor';
import { Menu, MenuItemText, MenuItemWrapper } from './styles';

export default function HomeScreen({ navigation }) {
	const pages = [
		{ pagename: 'Tasklist', title: 'Tasklist' },
		{ pagename: 'Tasklist', title: 'Tasklist' },
		{ pagename: 'Tasklist', title: 'Tasklist' },
		{ pagename: 'Tasklist', title: 'Tasklist' },
	];

	return (
		<Menu>
			<FlatList
				data={pages}
				renderItem={({ item }) => {
					const backgroundColor = getRandomPastelColor();
					return (
						<TouchableHighlight
							onPress={() => navigation.navigate(item.pagename)}>
							<MenuItemWrapper backgroundColor={backgroundColor}>
								<MenuItemText>{item.title}</MenuItemText>
							</MenuItemWrapper>
						</TouchableHighlight>
					);
				}}></FlatList>
		</Menu>
	);
}
