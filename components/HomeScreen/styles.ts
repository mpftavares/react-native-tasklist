import styled from "styled-components/native";

type MenuItemProps = {
    backgroundColor: string
}

export const Menu = styled.View`
    display: flex;
    align-items: center;
    padding-vertical: 25px;
    padding-horizontal: 20px;
`

export const MenuItemWrapper = styled.View<MenuItemProps>`
    width: 200px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
`

export const MenuItemText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`
