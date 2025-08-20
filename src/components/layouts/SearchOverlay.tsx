import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import React from "react";

import { useThemeContext } from "@/src/context/ThemeContext";

import { styles, textStyles } from "@/src/theme/styles";

import HorizontalGameList from "@/src/components/layouts/HorizontalGameList";

interface SearchOverlayProps {
    searchQuery: string;
    searchResults?: any[];
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({
    searchQuery,
    searchResults,
}) => {
    const insets = useSafeAreaInsets();
    const [themeColors] = useThemeContext();

    let filteredMainGames = [];
    let filteredDLCGames = [];

    if (searchResults) {
        filteredMainGames = searchResults.filter(
            (game) =>
                game.type === "Main Game" ||
                game.type === "Remaster" ||
                game.type === "Remake"
        );
        filteredDLCGames = searchResults.filter(
            (game) =>
                game.type === "DLC" || game.type === "Standalone Expansion"
        );
    }

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
                    {filteredMainGames.length > 0 && (
                        <HorizontalGameList
                            title="Full Games"
                            data={filteredMainGames}
                        />
                    )}

                    {filteredDLCGames.length > 0 && (
                        <HorizontalGameList
                            title="DLCs"
                            data={filteredDLCGames}
                        />
                    )}
                </View>
            )}
        </View>
    );
};

export default SearchOverlay;
