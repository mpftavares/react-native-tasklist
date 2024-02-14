import styled from "styled-components/native";
import getRandomPastelColor from "../../utils/getRandomPastelColor";

const randomBackgroundColor = getRandomPastelColor();

export const Menu = styled.View`
    display: flex;
    align-items: center;
    padding-vertical: 25px;
    padding-horizontal: 20px;
`

export const MenuItemWrapper = styled.View`
    width: 200px;
    background-color: ${randomBackgroundColor};
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
`

export const MenuItemText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`
