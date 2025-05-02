import { Stack, useRouter } from "expo-router";
import { HeaderBackButton } from "@react-navigation/elements";
import { View } from "react-native";
import { useThemeContext } from "@/src/context/ThemeContext";

export default function AuthLayout() {
    const [themeColors] = useThemeContext();
    const router = useRouter();

    return (
        <Stack initialRouteName="sign-in">
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            <Stack.Screen
                name="forgot-password"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="sign-up" options={{ headerShown: false }} />
            <Stack.Screen
                name="verify-email"
                options={{
                    headerTitle: "",
                    headerBackButtonDisplayMode: "minimal",
                    headerTransparent: true,
                    headerTintColor: themeColors.text,
                    headerLeft: ({ canGoBack, tintColor }) =>
                        canGoBack ? (
                            <View style={{ paddingTop: 24 }}>
                                <HeaderBackButton
                                    tintColor={tintColor}
                                    onPress={() => {
                                        router.back();
                                    }}
                                />
                            </View>
                        ) : null,
                }}
            />
        </Stack>
    );
}
