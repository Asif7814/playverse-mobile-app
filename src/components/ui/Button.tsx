import { TouchableOpacity, Text } from "react-native";
import React from "react";

import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";

interface ButtonProps {
    title: string;
    onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
    const [themeColors] = useThemeContext();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                {
                    backgroundColor: themeColors.primary,
                },
            ]}
            activeOpacity={0.8}
        >
            <Text style={[textStyles.md, { color: "#FFF" }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
