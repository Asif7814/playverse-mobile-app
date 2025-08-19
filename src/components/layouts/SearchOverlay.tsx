import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import React from "react";

import { useThemeContext } from "@/src/context/ThemeContext";

import { styles, textStyles } from "@/src/theme/styles";

const SearchOverlay: React.FC = () => {
    const insets = useSafeAreaInsets();
    const [themeColors] = useThemeContext();

    return (
        <View
            style={[
                styles.overlay,
                {
                    top: insets.top + 60,
                    backgroundColor: themeColors.background,

                    // Temporary Maybe.
                    justifyContent: "center",
                },
            ]}
        >
            <Text style={[textStyles.md, { color: themeColors.text }]}>
                Search For Games
            </Text>
        </View>
    );
};

export default SearchOverlay;
