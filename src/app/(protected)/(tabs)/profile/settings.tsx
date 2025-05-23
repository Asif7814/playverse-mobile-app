import { View } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import { useThemeContext } from "@/src/context/ThemeContext";
import Button from "@/src/components/ui/Button";

import { styles } from "@/src/theme/styles";
import { useAuthContext } from "@/src/context/AuthContext";

export default function SettingsScreen() {
    const router = useRouter();

    const [themeColors] = useThemeContext();
    const { logoutUser } = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);

    async function handleSignOutFormSubmission() {
        setIsLoading(true);
        const { message, data } = await logoutUser();

        if (data) {
            console.log(message, data);
            setIsLoading(false);
            router.replace("/sign-in");
        }
    }

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: themeColors.background },
            ]}
        >
            <Button
                title="Sign Out"
                onPress={handleSignOutFormSubmission}
                isLoading={isLoading}
            />
        </View>
    );
}
