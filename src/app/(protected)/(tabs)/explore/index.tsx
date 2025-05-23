import { Text, View } from "react-native";
import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";

export default function ExploreScreen() {
    const [themeColors] = useThemeContext();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: themeColors.background },
            ]}
        >
            <Text style={[textStyles.xl, { color: themeColors.text }]}>
                Explore
            </Text>
        </View>
    );
}
