import { View, ActivityIndicator } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useAuthContext } from "@/src/context/AuthContext";
import { useThemeContext } from "@/src/context/ThemeContext";

import { styles } from "@/src/theme/styles";

export default function AppLayout() {
    const { isSignedIn, isLoading } = useAuthContext();
    const [themeColors] = useThemeContext();

    if (isLoading) {
        return (
            <View
                style={[
                    styles.loadingIndicatorContainer,
                    {
                        backgroundColor: themeColors.background,
                    },
                ]}
            >
                <ActivityIndicator size="large" color={themeColors.primary} />
            </View>
        );
    }

    if (!isSignedIn) {
        return <Redirect href="/sign-in" />;
    }

    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
    );
}
