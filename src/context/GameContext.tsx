import { createContext, useContext, useEffect, useState } from "react";

const GameContext = createContext<any>(null);

function GameContextProvider({ children }: any) {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

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
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchGameByID(id: string) {
        try {
            const url = `${BASE_URL}/api/games/${id}`;
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
        } catch (error) {
            console.error(error);
        }
    }

    async function searchGames(title: string) {
        try {
            const url = `${BASE_URL}/api/games/search?title=${title}`;
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
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <GameContext.Provider
            value={{ fetchGames, fetchGameByID, searchGames }}
        >
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
