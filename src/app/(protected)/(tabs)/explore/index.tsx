import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

import { useGameContext } from "@/src/context/GameContext";

import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";

import Input from "@/src/components/ui/Input";
import HorizontalGameList from "@/src/components/layouts/HorizontalGameList";
import SearchOverlay from "@/src/components/layouts/SearchOverlay";

export default function ExploreScreen() {
    const insets = useSafeAreaInsets();
    const [themeColors] = useThemeContext();
    const { fetchGames } = useGameContext();

    const inputRef = useRef<TextInput>(null);

    const [isSearchLoading, setIsSearchLoading] = useState(false);

    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const [trendingGames, setTrendingGames] = useState([]);
    const [upcomingGames, setUpcomingGames] = useState([]);
    const [topRatedGames, setTopRatedGames] = useState([]);
    const [cultClassicGames, setCultClassicGames] = useState([]);
    const [indieGames, setIndieGames] = useState([]);

    useEffect(() => {
        async function loadGames() {
            const trendingGamesData = await fetchGames(
                "sortBy=hypes&startDate=2025-01-01T00:00:00.000Z&endDate=2025-08-18T00:00:00.000Z",
                10
            );
            const upcomingGamesData = await fetchGames(
                "sortBy=hypes&startDate=2025-09-01T00:00:00.000Z&endDate=2026-12-31T00:00:00.000Z",
                10
            );
            const topRatedGamesData = await fetchGames(
                "sortBy=total_rating&startDate=2020-09-01T00:00:00.000Z&endDate=2025-12-31T00:00:00.000Z",
                10
            );
            const cultClassicGamesData = await fetchGames(
                "sortBy=total_rating&startDate=2005-01-01T00:00:00.000Z&endDate=2020-12-31T00:00:00.000Z",
                10
            );
            const indieGamesData = await fetchGames(
                "sortBy=hypes&genres=Indie&startDate=2020-09-01T00:00:00.000Z&endDate=2025-08-18T00:00:00.000Z",
                10
            );

            if (trendingGamesData) setTrendingGames(trendingGamesData);

            if (upcomingGamesData) setUpcomingGames(upcomingGamesData);

            if (topRatedGamesData) setTopRatedGames(topRatedGamesData);

            if (cultClassicGamesData) setCultClassicGames(cultClassicGamesData);

            if (indieGamesData) setIndieGames(indieGamesData);
        }

        loadGames();
    }, []);

    function handleSearchQueryChange(text: string) {
        setSearchQuery(text);
    }

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    backgroundColor: themeColors.background,
                },
            ]}
        >
            <View
                style={
                    isSearchActive
                        ? {
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: 16,
                              paddingBottom: 16,
                          }
                        : { paddingBottom: 16 }
                }
            >
                <View style={isSearchActive && { flex: 1 }}>
                    <Input
                        ref={inputRef}
                        placeholder="Search games"
                        value={searchQuery}
                        onFocus={() => setIsSearchActive(true)}
                        onChangeText={handleSearchQueryChange}
                        leftIcon={
                            <Ionicons
                                name="search"
                                size={16}
                                color={themeColors.input}
                            />
                        }
                    />
                </View>

                {isSearchActive && (
                    <TouchableOpacity
                        onPress={() => {
                            setIsSearchActive(false);
                            inputRef.current?.blur();
                        }}
                    >
                        <Text
                            style={[textStyles.md, { color: themeColors.text }]}
                        >
                            Cancel
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

            {isSearchActive && <SearchOverlay />}

            <ScrollView showsVerticalScrollIndicator={false}>
                <HorizontalGameList title="Trending Now" data={trendingGames} />
                <HorizontalGameList
                    title="Most Anticipated"
                    data={upcomingGames}
                />
                <HorizontalGameList title="Top Rated" data={topRatedGames} />
                <HorizontalGameList
                    title="Cult Classics"
                    data={cultClassicGames}
                />
                <HorizontalGameList title="Hidden Gems" data={indieGames} />
            </ScrollView>
        </View>
    );
}
