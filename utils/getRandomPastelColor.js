export default function getRandomPastelColor() {
    // Generate random hue (between 0 and 360)
    const hue = Math.floor(Math.random() * 360);
    // Set saturation to a low value (between 30 and 70)
    const saturation = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
    // Set lightness to a high value (between 70 and 90)
    const lightness = Math.floor(Math.random() * (90 - 70 + 1)) + 70;
    // Convert HSL to RGB
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}