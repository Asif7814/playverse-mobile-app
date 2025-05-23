import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useThemeContext } from "@/src/context/ThemeContext";
import { styles } from "@/src/theme/styles";

export default function TabsLayout() {
    const [themeColors] = useThemeContext();

    return (
        <Tabs initialRouteName="index">
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "My Games",
                    tabBarStyle: {
                        backgroundColor: themeColors.background,
                        borderTopColor: "transparent",
                    },
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarActiveTintColor: themeColors.primary,
                    tabBarInactiveTintColor: "#808080",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="game-controller"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    headerShown: false,
                    title: "Explore",
                    tabBarStyle: {
                        backgroundColor: themeColors.background,
                        borderTopColor: "transparent",
                    },
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarActiveTintColor: themeColors.primary,
                    tabBarInactiveTintColor: "#808080",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="search" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarStyle: {
                        backgroundColor: themeColors.background,
                        borderTopColor: "transparent",
                    },
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarActiveTintColor: themeColors.primary,
                    tabBarInactiveTintColor: "#808080",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
