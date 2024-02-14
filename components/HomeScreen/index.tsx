import { FlatList, TouchableHighlight } from 'react-native';
import { Menu, MenuItemText, MenuItemWrapper } from './styles';
import React from 'react';

export default function HomeScreen({ navigation }) {
	const pages = [{ pagename: 'Tasklist', title: 'Tasklist' }];

	return (
		<Menu>
			<FlatList
				data={pages}
				renderItem={({ item }) => (
					<TouchableHighlight
						onPress={() => navigation.navigate(item.pagename)}>
						<MenuItemWrapper>
							<MenuItemText>{item.title}</MenuItemText>
						</MenuItemWrapper>
					</TouchableHighlight>
				)}></FlatList>
		</Menu>
	);
}
