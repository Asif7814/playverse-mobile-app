import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ScrollView } from "react-native";
import { useThemeContext } from "@/src/context/ThemeContext";
import { styles } from "@/src/theme/styles";
import { useUserGameLibraryContext } from "@/src/context/UserGameLibraryContext";

import HorizontalGameList from "@/src/components/layouts/HorizontalGameList";

export default function IndexScreen() {
    const insets = useSafeAreaInsets();
    const [themeColors] = useThemeContext();
    const { backloggedGames } = useUserGameLibraryContext();

    console.log("Backlogged Games in IndexScreen:", backloggedGames);

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
            <ScrollView showsVerticalScrollIndicator={false}>
                <HorizontalGameList
                    title="Backlog"
                    data={backloggedGames}
                    isInUserLibrary={true}
                />
                {/* Future sections for "Playing" and "Completed" can be added here */}
            </ScrollView>
        </View>
    );
}
