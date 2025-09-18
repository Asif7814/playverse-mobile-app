import { createContext, useContext, useEffect, useState } from "react";
import { GameDetails } from "@/src/types/Game.types";
import { mapGameDetailsToUserGame } from "../utils/gameObjectFormatter";

const UserGameLibraryContext = createContext<any>(null);

function UserGameLibraryContextProvider({ children }: any) {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

    const [userGameLibrary, setUserGameLibrary] = useState<any[]>([]);

    const [backloggedGames, setBackloggedGames] = useState<any[]>([]);
    const [playingGames, setPlayingGames] = useState<any[]>([]);
    const [completedGames, setCompletedGames] = useState<any[]>([]);

    useEffect(() => {
        getGamesFromLibrary();
    }, []);

    async function addToLibrary(
        game: GameDetails,
        status = "backlog", //temp default value
        platform = "PS5", //temp default value
        storefront = "physical" //temp default value
    ) {
        try {
            const url = `${BASE_URL}/api/userGames`;
            const options = {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    game: mapGameDetailsToUserGame(game),
                    status: status,
                    platform: platform,
                    storefront: storefront,
                }),
            };

            const response = await fetch(url, options);
            const { data, error } = await response.json();

            if (error) {
                throw new Error(error);
            }

            setUserGameLibrary((prev: any[]) => [...prev, data]);

            return data ? "SUCCESS" : "FAILED";
        } catch (error) {
            console.error(error);
        }
    }

    async function getGamesFromLibrary() {
        try {
            const response = await fetch(`${BASE_URL}/api/userGames`);
            const { data, error } = await response.json();

            if (error) {
                throw new Error(error);
            }

            setUserGameLibrary(data);

            setBackloggedGames(
                data.filter((game: any) => game.status === "backlog")
            );
            setPlayingGames(
                data.filter((game: any) => game.status === "playing")
            );
            setCompletedGames(
                data.filter((game: any) => game.status === "completed")
            );
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <UserGameLibraryContext.Provider
            value={{
                userGameLibrary,
                backloggedGames,
                playingGames,
                completedGames,
                addToLibrary,
            }}
        >
            {children}
        </UserGameLibraryContext.Provider>
    );
}

function useUserGameLibraryContext() {
    const context = useContext(UserGameLibraryContext);

    if (!context) {
        throw new Error(
            "useUserGameLibraryContext must be used within a UserGameLibraryContextProvider"
        );
    }

    return context;
}

export { UserGameLibraryContextProvider, useUserGameLibraryContext };
