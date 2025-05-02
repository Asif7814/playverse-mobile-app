import { View, TextInput } from "react-native";
import React from "react";

import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";

interface InputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    keyboardType?: "default" | "email-address" | "numeric";
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    onChangeText,
    leftIcon,
    rightIcon,
    keyboardType = "default",
}) => {
    const [themeColors] = useThemeContext();

    return (
        <View
            style={[styles.inputContainer, { borderColor: themeColors.input }]}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 16,
                }}
            >
                {leftIcon}

                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={themeColors.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    style={[
                        textStyles.md,
                        {
                            color: themeColors.text,
                            flex: 1,
                        },
                    ]}
                />
            </View>

            {rightIcon}
        </View>
    );
};

export default Input;
