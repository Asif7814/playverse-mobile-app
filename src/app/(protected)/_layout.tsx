import { Redirect, Stack } from "expo-router";

// Replace temp value with actual auth logic later
const isSignedIn = true;

export default function AppLayout() {
    if (!isSignedIn) {
        return <Redirect href="/sign-in" />;
    }

    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
    );
}
