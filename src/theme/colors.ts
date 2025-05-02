interface ThemeColors {
    primary: string;
    background: string;
    text: string;
    input: string;
}

const lightColors: ThemeColors = {
    primary: "#FF3B30",
    background: "#FFF",
    text: "#000",
    input: "#0005",
};

const darkColors: ThemeColors = {
    primary: "#FF3B30",
    background: "#000",
    text: "#FFF",
    input: "#FFF5",
};

export { lightColors, darkColors, ThemeColors };
