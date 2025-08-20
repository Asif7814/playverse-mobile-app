import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "@/src/theme/styles";

import { useGameContext } from "@/src/context/GameContext"; // temporary import for testing
interface GameCardProps {
    game: {
        id: number;
        name: string;
        coverImage: string;
    };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    // fetchGameByID used on this screen for testing, will be moved into useEffect in GameDetails screen later
    const { fetchGameByID } = useGameContext();

    async function handlePress() {
        // will add navigation and passing id through afterwards
        const gameDetails = await fetchGameByID(game["id"]);
        console.log(gameDetails);
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={{ uri: game["coverImage"] }} style={styles.card} />
        </TouchableOpacity>
    );
};

export default GameCard;
