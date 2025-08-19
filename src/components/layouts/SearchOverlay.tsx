import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import React from "react";

import { useThemeContext } from "@/src/context/ThemeContext";

import { styles, textStyles } from "@/src/theme/styles";

import HorizontalGameList from "@/src/components/layouts/HorizontalGameList";

interface SearchOverlayProps {
    searchQuery: string;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ searchQuery }) => {
    const insets = useSafeAreaInsets();
    const [themeColors] = useThemeContext();

    return (
        <View
            style={[
                styles.overlay,
                {
                    top: insets.top + 60,
                    backgroundColor: themeColors.background,
                },
            ]}
        >
            {searchQuery.length === 0 ? (
                <Text style={[textStyles.md, { color: themeColors.text }]}>
                    Search For Games
                </Text>
            ) : (
                <View>
                    <HorizontalGameList title="Full Games" data={[]} />
                    <HorizontalGameList title="DLCs" data={[]} />
                </View>
            )}
        </View>
    );
};

export default SearchOverlay;
