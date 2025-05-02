import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

import {
    lightColors,
    darkColors,
    ThemeColors,
} from "@/src/theme/colors";

type ThemeContextValue = [themeColors: ThemeColors];

const ThemeContext = createContext<ThemeContextValue | null>(null);

function ThemeContextProvider({ children }: any) {
    const colorScheme = useColorScheme();
    const [themeColors, setThemeColors] =
        useState<ThemeColors>(lightColors);

    useEffect(() => {
        getThemeColors();
    }, [colorScheme]);

    function getThemeColors() {
        setThemeColors(() => {
            return colorScheme === "dark" ? darkColors : lightColors;
        });
    }

    return (
        <ThemeContext.Provider value={[themeColors]}>
            {children}
        </ThemeContext.Provider>
    );
}

function useThemeContext() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useThemeContext must be used within a ThemeContextProvider"
        );
    }

    return context;
}

export { ThemeContextProvider, useThemeContext };
