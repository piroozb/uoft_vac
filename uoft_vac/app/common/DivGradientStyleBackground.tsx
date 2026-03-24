
// Percentages should in real numbers in [0, 100].
// In and out gradients are symmetric on both axes.
export function divGradientStyleBackground(
    colourCentre: string,
    colourEdges: string,
    percV: number = 10,
    percH: number = 10,
): string {
    return `
        linear-gradient(to right,
        ${colourEdges} 0%,
        transparent ${percH}%,
        transparent ${100 - percH}%,
        ${colourEdges} 100%),

        linear-gradient(to bottom,
        ${colourEdges} 0%,
        transparent ${percV}%,
        transparent ${100 - percV}%,
        ${colourEdges} 100%),
        
        ${colourCentre}`;
}
