import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Providers from "@/src/providers/Providers";

export default function RootLayout() {
    return (
        <Providers>
            <StatusBar style="auto" />
            <Stack>
                <Stack.Screen
                    name="(protected)"
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
        </Providers>
    );
}
