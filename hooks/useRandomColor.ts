import { useEffect, useState } from "react";
import getRandomPastelColor from "../utils/getRandomPastelColor";

export default function useRandomColor() {
    const [backgroundColor, setBackgroundColor] = useState('');

    useEffect(() => {
        const color = getRandomPastelColor();
        setBackgroundColor(color);
    }, []);

    return backgroundColor;
}