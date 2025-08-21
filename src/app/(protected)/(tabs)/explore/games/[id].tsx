import { View, ScrollView, Image, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useGameContext } from "@/src/context/GameContext";

import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";
import { useLocalSearchParams } from "expo-router";

export default function GameDetailsScreen() {
    const [themeColors] = useThemeContext();
    const { fetchGameByID } = useGameContext();

    const { id, name } = useLocalSearchParams();
    const [gameDetails, setGameDetails] = useState(null);

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                const gameDetailsData = await fetchGameByID(id);

                if (gameDetailsData) setGameDetails(gameDetailsData[0]);
            } catch (error) {
                console.error(error);
                setGameDetails(null);
            }
        }

        fetchGameDetails();
    }, []);

    console.log("Game Details:", gameDetails);

    return (
        <View
            style={
                (styles.container, { backgroundColor: themeColors.background })
            }
        >
            {!gameDetails ? (
                <ActivityIndicator size="large" color={themeColors.primary} />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image
                        source={{ uri: gameDetails["coverImage"] }}
                        style={styles.bigCard}
                    />

                    <Text style={[textStyles.lg, { color: themeColors.text }]}>
                        {name}
                    </Text>

                    <Text style={[textStyles.md, { color: themeColors.text }]}>
                        {gameDetails["description"]}
                    </Text>
                </ScrollView>
            )}
        </View>
    );
}
