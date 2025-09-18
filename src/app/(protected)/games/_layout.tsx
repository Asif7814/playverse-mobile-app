import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useThemeContext } from "@/src/context/ThemeContext";

export default function GamesLayout() {
    const router = useRouter();
    const [themeColors] = useThemeContext();

    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    title: "",
                    headerTransparent: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons
                                name="chevron-back"
                                size={24}
                                color={themeColors.text}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
}
