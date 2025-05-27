import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ScrollView } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { useThemeContext } from "@/src/context/ThemeContext";
import { styles } from "@/src/theme/styles";

import Input from "@/src/components/ui/Input";
import HorizontalGameList from "@/src/components/layouts/HorizontalGameList";

export default function ExploreScreen() {
    const insets = useSafeAreaInsets();
    const [themeColors] = useThemeContext();

    const [searchQuery, setSearchQuery] = useState("");

    // Mock data for games
    const games = [
        {
            id: 1,
            title: "Game 1",
            poster_path: "https://critics.io/img/movies/poster-placeholder.png",
        },
        {
            id: 2,
            title: "Game 2",
            poster_path: "https://critics.io/img/movies/poster-placeholder.png",
        },
        {
            id: 3,
            title: "Game 3",
            poster_path: "https://critics.io/img/movies/poster-placeholder.png",
        },
        {
            id: 4,
            title: "Game 4",
            poster_path: "https://critics.io/img/movies/poster-placeholder.png",
        },
        {
            id: 5,
            title: "Game 5",
            poster_path: "https://critics.io/img/movies/poster-placeholder.png",
        },
        // Add more game objects as needed
    ];

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
            <View style={{ paddingBottom: 16 }}>
                <Input
                    placeholder="Search games"
                    value={searchQuery}
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

            <ScrollView>
                <HorizontalGameList title="For You" data={games} />
                <HorizontalGameList title="Trending" data={games} />
                <HorizontalGameList title="Most Popular" data={games} />
                <HorizontalGameList title="Upcoming Releases" data={games} />
                <HorizontalGameList title="Top Rated" data={games} />
                <HorizontalGameList title="Indie & Hidden Gems" data={games} />
            </ScrollView>
        </View>
    );
}
