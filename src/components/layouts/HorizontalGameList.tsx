import { View, Text, FlatList } from "react-native";
import React from "react";

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
        <View style={{ paddingBottom: 16 }}>
            <Text
                style={[
                    textStyles.lg,
                    {
                        color: themeColors.text,
                        paddingBottom: 12,
                        textTransform: "uppercase",
                    },
                ]}
            >
                {title}
            </Text>
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
