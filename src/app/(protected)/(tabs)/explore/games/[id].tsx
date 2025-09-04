import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    View,
    ScrollView,
    Image,
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useGameContext } from "@/src/context/GameContext";
import { useThemeContext } from "@/src/context/ThemeContext";

import { styles, textStyles } from "@/src/theme/styles";

export default function GameDetailsScreen() {
    const insets = useSafeAreaInsets();
    const [themeColors] = useThemeContext();
    const navigation = useNavigation();
    const { id, name } = useLocalSearchParams();
    const { fetchGameByID } = useGameContext();

    const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => console.log("More Options")}>
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={24}
                        color={themeColors.text}
                    />
                </TouchableOpacity>
            ),
        });
    }, []);

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
                (styles.container,
                {
                    backgroundColor: themeColors.background,
                    paddingTop: insets.top,
                    paddingHorizontal: 24,
                })
            }
        >
            {!gameDetails ? (
                <ActivityIndicator size="large" color={themeColors.primary} />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: "center", paddingTop: 72 }}>
                        <Image
                            source={{ uri: gameDetails["coverImage"] }}
                            style={styles.bigCard}
                        />
                        <Text
                            style={[
                                textStyles.lg,
                                {
                                    color: themeColors.text,
                                    paddingTop: 16,
                                    paddingBottom: 4,
                                },
                            ]}
                        >
                            {name}
                        </Text>

                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <Text
                                style={[
                                    textStyles.md,
                                    { color: themeColors.text },
                                ]}
                            >
                                {new Date(
                                    gameDetails["releaseDate"] as string
                                ).getFullYear()}
                            </Text>

                            <Text
                                style={[
                                    textStyles.md,
                                    { color: themeColors.text },
                                ]}
                            >
                                {" · "}
                            </Text>

                            <Text
                                style={[
                                    textStyles.md,
                                    { color: themeColors.text },
                                ]}
                            >
                                {gameDetails["developers"]?.[0]["name"]}
                            </Text>
                        </View>
                    </View>

                    <View style={{ paddingVertical: 24, gap: 8 }}>
                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <Text
                                style={[
                                    textStyles.md,
                                    {
                                        color: themeColors.text,
                                        flex: 1,
                                        textAlign: "center",
                                        borderColor: themeColors.text,
                                        borderWidth: 0.5,
                                        borderRadius: 8,
                                        paddingHorizontal: 8,
                                        paddingVertical: 4,
                                    },
                                ]}
                            >
                                Add to Library
                            </Text>
                            <Text
                                style={[
                                    textStyles.md,
                                    {
                                        color: themeColors.text,
                                        flex: 1,
                                        textAlign: "center",
                                        borderColor: themeColors.text,
                                        borderWidth: 0.5,
                                        borderRadius: 8,
                                        paddingHorizontal: 8,
                                        paddingVertical: 4,
                                    },
                                ]}
                            >
                                Not Rated
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                gap: 8,
                            }}
                        >
                            <Text
                                style={[
                                    textStyles.md,
                                    {
                                        color: themeColors.text,
                                        flex: 1,
                                        textAlign: "center",
                                        borderColor: themeColors.text,
                                        borderWidth: 0.5,
                                        borderRadius: 8,
                                        paddingHorizontal: 8,
                                        paddingVertical: 4,
                                    },
                                ]}
                            >
                                Platform
                            </Text>
                            <Text
                                style={[
                                    textStyles.md,
                                    {
                                        color: themeColors.text,
                                        flex: 1,
                                        textAlign: "center",
                                        borderColor: themeColors.text,
                                        borderWidth: 0.5,
                                        borderRadius: 8,
                                        paddingHorizontal: 8,
                                        paddingVertical: 4,
                                    },
                                ]}
                            >
                                Format
                            </Text>
                        </View>
                    </View>

                    <View style={{ paddingTop: 16 }}>
                        <Text
                            numberOfLines={5}
                            style={[
                                textStyles.md,
                                {
                                    color: themeColors.text,
                                },
                            ]}
                        >
                            {gameDetails["description"]}
                        </Text>
                    </View>

                    <View style={{ paddingTop: 24, gap: 4 }}>
                        <Text
                            style={[
                                textStyles.md,
                                {
                                    color: themeColors.text,
                                    fontWeight: "bold",
                                },
                            ]}
                        >
                            Date Released
                        </Text>
                        <Text
                            style={[
                                textStyles.md,
                                {
                                    color: themeColors.text,
                                },
                            ]}
                        >
                            {`${new Date(
                                gameDetails["releaseDate"] as string
                            ).toLocaleDateString()}`}
                        </Text>
                    </View>

                    <View style={{ paddingTop: 24, gap: 4 }}>
                        <Text
                            style={[
                                textStyles.md,
                                {
                                    color: themeColors.text,
                                    fontWeight: "bold",
                                },
                            ]}
                        >
                            Genres
                        </Text>

                        <View
                            style={{
                                flexDirection: "row",
                                gap: 8,
                            }}
                        >
                            {gameDetails["genres"]?.map((genre) => (
                                <Text
                                    key={genre}
                                    style={[
                                        textStyles.md,
                                        {
                                            color: themeColors.text,
                                            borderColor: themeColors.text,
                                            borderWidth: 0.5,
                                            borderRadius: 8,
                                            paddingHorizontal: 8,
                                            paddingVertical: 4,
                                        },
                                    ]}
                                >
                                    {genre}
                                </Text>
                            ))}
                        </View>
                    </View>

                    {gameDetails["estimatedTimeToBeat"] && (
                        <View style={{ paddingTop: 24, gap: 4 }}>
                            <Text
                                style={[
                                    textStyles.md,
                                    {
                                        color: themeColors.text,
                                        fontWeight: "bold",
                                        paddingBottom: 4,
                                    },
                                ]}
                            >
                                Time to Beat
                            </Text>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    gap: 8,
                                }}
                            >
                                <View
                                    style={[
                                        styles.timeToBeatContainer,
                                        {
                                            borderColor: themeColors.text,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            textStyles.lg,
                                            {
                                                color: themeColors.text,
                                            },
                                        ]}
                                    >
                                        {`${gameDetails["estimatedTimeToBeat"]["story"]} hrs`}
                                    </Text>
                                    <Text
                                        style={[
                                            textStyles.md,
                                            {
                                                color: themeColors.text,
                                            },
                                        ]}
                                    >
                                        Story
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.timeToBeatContainer,
                                        {
                                            borderColor: themeColors.text,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            textStyles.lg,
                                            {
                                                color: themeColors.text,
                                            },
                                        ]}
                                    >
                                        {`${gameDetails["estimatedTimeToBeat"]["storyAndExtras"]} hrs`}
                                    </Text>
                                    <Text
                                        style={[
                                            textStyles.md,
                                            {
                                                color: themeColors.text,
                                            },
                                        ]}
                                    >
                                        Extra
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.timeToBeatContainer,
                                        {
                                            borderColor: themeColors.text,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            textStyles.lg,
                                            {
                                                color: themeColors.text,
                                            },
                                        ]}
                                    >
                                        {`${gameDetails["estimatedTimeToBeat"]["completionist"]} hrs`}
                                    </Text>
                                    <Text
                                        style={[
                                            textStyles.md,
                                            {
                                                color: themeColors.text,
                                            },
                                        ]}
                                    >
                                        Completion
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}

                    <View style={{ paddingVertical: 24 }}>
                        <Text
                            style={[
                                textStyles.md,
                                {
                                    color: themeColors.text,
                                    fontWeight: "bold",
                                    paddingBottom: 4,
                                },
                            ]}
                        >
                            Media
                        </Text>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {gameDetails["screenshots"]?.map(
                                (screenshot, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() =>
                                            console.log(
                                                "View Full-Screen Screenshot "
                                            )
                                        }
                                    >
                                        <Image
                                            key={index}
                                            source={{ uri: screenshot }}
                                            style={{
                                                width: 300,
                                                height: 150,
                                                paddingRight: 16,
                                                borderRadius: 8,
                                            }}
                                            resizeMode="cover"
                                        />
                                    </TouchableOpacity>
                                )
                            )}
                        </ScrollView>
                    </View>

                    <View style={{ paddingVertical: 24 }}>
                        <Text
                            style={[
                                textStyles.md,
                                {
                                    color: themeColors.text,
                                    fontWeight: "bold",
                                    paddingBottom: 4,
                                },
                            ]}
                        >
                            Trailers
                        </Text>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {gameDetails["trailers"]?.map((trailer, index) => (
                                <TouchableOpacity
                                    key={trailer.id}
                                    onPress={() =>
                                        console.log(
                                            "Play Trailer",
                                            trailer.video
                                        )
                                    }
                                >
                                    <Image
                                        key={index}
                                        source={{ uri: trailer["thumbnail"] }}
                                        style={{
                                            width: 300,
                                            height: 150,
                                            paddingRight: 16,
                                            borderRadius: 8,
                                        }}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            )}
        </View>
    );
}

interface GameDetails {
    id: number;
    name: string;
    coverImage: string;
    gameType: string | null;
    description: string | null;
    platforms: string[] | null;
    genres: string[] | null;
    releaseDate: string | null;
    developers: { id: number; name: string }[] | null;
    publishers: { id: number; name: string }[] | null;
    trailers?: { id: number; thumbnail: string; video: string }[] | null;
    screenshots?: string[] | null;
    estimatedTimeToBeat?: {
        story: number | null;
        storyAndExtras: number | null;
        completionist: number | null;
    };
}
