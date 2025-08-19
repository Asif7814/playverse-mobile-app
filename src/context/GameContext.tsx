import { createContext, useContext, useEffect, useState } from "react";

const GameContext = createContext<any>(null);

function GameContextProvider({ children }: any) {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const [isLoading, setIsLoading] = useState(true);

    async function fetchGames(queries: string, limit: number) {
        try {
            const url = `${BASE_URL}/api/games?${queries}&limit=${limit}`;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                },
            };

            const response = await fetch(url, options);
            const { data, error } = await response.json();

            if (error) {
                throw new Error(error);
            }

            return data;
            // console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <GameContext.Provider value={{ isLoading, fetchGames }}>
            {children}
        </GameContext.Provider>
    );
}

function useGameContext() {
    const context = useContext(GameContext);

    if (!context) {
        throw new Error(
            "useGameContext must be used within a GameContextProvider"
        );
    }

    return context;
}

export { GameContextProvider, useGameContext };
