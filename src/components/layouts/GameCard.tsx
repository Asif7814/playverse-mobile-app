import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { styles } from "@/src/theme/styles";

interface GameCardProps {
    game: {
        id: number;
        name: string;
        coverImage: string;
    };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    const router = useRouter();

    async function handlePress() {
        router.push({
            pathname: "/explore/games/[id]",
            params: { id: `${game.id}`, name: game["name"] },
        });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={{ uri: game["coverImage"] }} style={styles.card} />
        </TouchableOpacity>
    );
};

export default GameCard;
