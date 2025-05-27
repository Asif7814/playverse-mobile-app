import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React from "react";

import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";

interface ButtonProps {
    title: string;
    onPress?: () => void;
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, isLoading }) => {
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
            {isLoading ? (
                <ActivityIndicator size="small" color="#FFF" />
            ) : (
                <Text style={[textStyles.md, { color: "#FFF" }]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;
