import { Stack } from "expo-router";
import { useThemeContext } from "@/src/context/ThemeContext";

export default function ExploreLayout() {
    const [themeColors] = useThemeContext();

    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
                name="games/[id]"
                options={{
                    headerBackButtonDisplayMode: "minimal",
                    title: "",
                    headerTransparent: true,
                    headerTintColor: themeColors.text,
                }}
            />
        </Stack>
    );
}
