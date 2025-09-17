import { GameDetails } from "@/src/types/Game.types";

export function mapGameDetailsToUserGame(game: GameDetails) {
    return {
        gameId: game.id,
        ...game,
    };
}
