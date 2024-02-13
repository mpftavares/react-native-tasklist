import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import getRandomPastelColor from "../../utils/getRandomPastelColor";
import { Square, TaskItem, TaskLeft, TaskText } from "./styles";

interface TaskProps {
    title: string;
    index: number;
    completeTask: (index: number) => void;
}

export default function Task({ title, index, completeTask }: TaskProps) {
    const [backgroundColor, setBackgroundColor] = useState<string>('');

    useEffect(() => {
        const randomBackgroundColor = getRandomPastelColor();
        setBackgroundColor(randomBackgroundColor);
    }, []);

    return (
        <TaskItem>
            <TaskLeft>
                <Square backgroundColor={backgroundColor}></Square>
                <TaskText>{title}</TaskText>
            </TaskLeft>
            <TouchableOpacity onPress={() => completeTask(index)}>
                <Text>❌</Text>
            </TouchableOpacity>
        </TaskItem>
    );
}