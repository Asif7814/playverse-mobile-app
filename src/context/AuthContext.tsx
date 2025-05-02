import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

function AuthContextProvider({ children }: any) {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

    async function registerUser(
        username: string,
        email: string,
        password: string
    ) {
        try {
            const url = `${BASE_URL}/auth/users/register`;
            const options = {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            };

            const res = await fetch(url, options);
            const { message, data, error } = await res.json();

            if (error) {
                throw new Error(error);
            }

            return { message, data };
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AuthContext.Provider value={[registerUser]}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuthContext() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuthContext must be used within an AuthContextProvider"
        );
    }

    return context;
}

export { AuthContextProvider, useAuthContext };
