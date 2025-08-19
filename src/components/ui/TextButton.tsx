import { TouchableOpacity, Text } from "react-native";
import React from "react";

import { useThemeContext } from "@/src/context/ThemeContext";
import { textStyles } from "@/src/theme/styles";

interface ButtonProps {
    title: string;
    onPress?: () => void;
}

const TextButton: React.FC<ButtonProps> = ({ title, onPress }) => {
    const [themeColors] = useThemeContext();

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[textStyles.md, { color: themeColors.text }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default TextButton;
