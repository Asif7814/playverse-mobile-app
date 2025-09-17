import { createContext, useContext, useEffect, useState } from "react";
import { GameDetails } from "@/src/types/Game.types";
import { mapGameDetailsToUserGame } from "../utils/gameObjectFormatter";

const UserGameLibraryContext = createContext<any>(null);

function UserGameLibraryContextProvider({ children }: any) {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

    const [userGameLibrary, setUserGameLibrary] = useState<GameDetails[]>([]);

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

            console.log("Game Added to Library:", data);

            setUserGameLibrary((prev: GameDetails[]) => [...prev, data]);

            return data ? "SUCCESS" : "FAILED";
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <UserGameLibraryContext.Provider
            value={{
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
