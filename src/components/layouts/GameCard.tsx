import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { styles } from "@/src/theme/styles";

interface GameCardProps {
    game: {
        id: number;
        gameId: number;
        name: string;
        coverImage: string;
    };
    isUserGame?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, isUserGame = false }) => {
    const router = useRouter();

    async function handlePress() {
        const gameId = isUserGame ? game["gameId"] : game["id"];

        router.push({
            pathname: "/games/[id]",
            params: { id: `${gameId}`, name: game["name"] },
        });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={{ uri: game["coverImage"] }} style={styles.card} />
        </TouchableOpacity>
    );
};

export default GameCard;
