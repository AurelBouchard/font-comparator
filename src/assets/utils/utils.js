

export const validateSide = (side) => {
    return (!(side !== "Left" && side !== "Right"));
}


// font == font.Left, font.Right, left or right
export function updateFont(font, input) {
    console.log(font, " - ", input)
}