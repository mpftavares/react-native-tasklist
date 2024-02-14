import styled from 'styled-components/native';

type SquareProps = {
    backgroundColor: string
}

export const TaskItem = styled.View`
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const TaskLeft = styled.View`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

export const Square = styled.View<SquareProps>`
    width: 24px;
    height: 24px;
    opacity: 0.4;
    border-radius: 5px;
    margin-right: 15px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const TaskText = styled.Text`
    max-width: 80%;
`;
