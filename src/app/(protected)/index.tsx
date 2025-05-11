import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";

export default function IndexScreen() {
    const [themeColors] = useThemeContext();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: themeColors.background },
            ]}
        >
            <Text style={[textStyles.xl, { color: themeColors.text }]}>
                Home
            </Text>

            <Link
                href="/settings"
                style={[
                    textStyles.sm,
                    { color: themeColors.primary, fontWeight: 500 },
                ]}
            >
                Go to Settings
            </Link>
        </View>
    );
}
