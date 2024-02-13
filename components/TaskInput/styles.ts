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

export const TaskInput = styled.TextInput`
    padding-vertical: 15px;
    padding-horizontal: 15px;
    background-color: #fff;
    border-radius: 60px;
    border-color: #C0C0C0;
    border-width: 2px;
    width: 250px;
    ::placeholder {
        color: darkgray;
    }
`;

export const ButtonWrapper = styled.View`
    width: 50px;
    height: 50px;
    background-color: '#fff';
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    border-color: '#C0C0C0';
    border-width: 2px;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
`;
