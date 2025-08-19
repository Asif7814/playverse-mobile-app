import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "@/src/theme/styles";

interface GameCardProps {
    game: {
        id: number;
        name: string;
        coverImage: string;
    };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    function handlePress() {
        console.log(`Game pressed: ${game["name"]} (${game["id"]})`);
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={{ uri: game["coverImage"] }} style={styles.card} />
        </TouchableOpacity>
    );
};

export default GameCard;
