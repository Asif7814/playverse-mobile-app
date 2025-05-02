import { Redirect, Stack } from "expo-router";
import { useAuthContext } from "@/src/context/AuthContext";

export default function AppLayout() {
    const { isSignedIn } = useAuthContext();

    if (!isSignedIn) {
        return <Redirect href="/sign-in" />;
    }

    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
    );
}
