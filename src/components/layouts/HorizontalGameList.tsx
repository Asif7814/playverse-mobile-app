import { View, Text, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useThemeContext } from "@/src/context/ThemeContext";
import { textStyles } from "@/src/theme/styles";
import GameCard from "@/src/components/layouts/GameCard";

interface HorizontalGameListProps {
    title: string;
    data: any[]; // Adjust after defining the game type
}

const HorizontalGameList: React.FC<HorizontalGameListProps> = ({
    title,
    data,
}) => {
    const [themeColors] = useThemeContext();

    return (
        <View style={{ paddingBottom: 16, justifyContent: "center" }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: 12,
                }}
            >
                <Text
                    style={[
                        textStyles.lg,
                        {
                            color: themeColors.text,
                            textTransform: "uppercase",
                        },
                    ]}
                >
                    {title}
                </Text>

                <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={themeColors.text}
                />
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => String(item["id"])}
                renderItem={({ item }) => <GameCard game={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default HorizontalGameList;
