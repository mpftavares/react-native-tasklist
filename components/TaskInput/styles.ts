import styled from 'styled-components/native';

type WrapperProps = {
    behavior: 'padding' | 'height';
}

export const Wrapper = styled.KeyboardAvoidingView<WrapperProps>`
    position: absolute;
    bottom: 60px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    ${({ behavior }) => behavior === 'padding' ? 'padding-bottom: 60px;' : 'height: 60px;'}
`;

export const AddTaskInput = styled.TextInput.attrs({
    placeholderTextColor: "lightgray"
})`
    padding-vertical: 15px;
    padding-horizontal: 15px;
    background-color: white;
    border-radius: 15px;
    width: 250px;  
`;

export const ButtonWrapper = styled.View`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
`;
