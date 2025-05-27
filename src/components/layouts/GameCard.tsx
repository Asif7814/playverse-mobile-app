import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "@/src/theme/styles";

interface GameCardProps {
    game: {
        poster_path: string;
        // Add other game properties as needed
    };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    function handlePress() {
        console.log(`Game pressed`);
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={{ uri: game["poster_path"] }} style={styles.card} />
        </TouchableOpacity>
    );
};

export default GameCard;
