import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

import { styles, textStyles } from "@/src/theme/styles";
import { useThemeContext } from "@/src/context/ThemeContext";

interface CheckBoxProps {
    title: String;
    checked: Boolean;
    onToggle?: (checked: Boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ title, checked, onToggle }) => {
    const [themeColors] = useThemeContext();
    const [isChecked, setIsChecked] = useState(checked);

    function toggleChecked() {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onToggle?.(newValue);
    }

    return (
        <TouchableOpacity onPress={toggleChecked} activeOpacity={0.8}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                }}
            >
                <View
                    style={[
                        styles.checkbox,
                        {
                            borderColor: themeColors.input,
                            backgroundColor: isChecked && themeColors.primary,
                        },
                    ]}
                >
                    {isChecked && (
                        <Ionicons name="checkmark" size={16} color="#FFF" />
                    )}
                </View>

                <Text style={[textStyles.sm, { color: themeColors.text }]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CheckBox;
