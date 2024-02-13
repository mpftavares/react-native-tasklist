import { Platform, TextInput, TouchableOpacity } from "react-native";
import { ButtonText, ButtonWrapper, Wrapper as KeyboardWrapper } from "./styles";

interface TaskInputProps {
    handleAddTask: () => void,
    handleTextInput: (arg: string) => void,
    task: string
}

export default function TaskInput({ handleAddTask, handleTextInput, task }: TaskInputProps) {
    return (
        <KeyboardWrapper
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TextInput
                placeholder="Add a task."
                value={task}
                onChangeText={(text: string) => handleTextInput(text)}
            />

            <TouchableOpacity onPress={() => handleAddTask()}>
                <ButtonWrapper>
                    <ButtonText>➕</ButtonText>
                </ButtonWrapper>
            </TouchableOpacity>
        </KeyboardWrapper>
    );
}

