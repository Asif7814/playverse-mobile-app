import { createContext, useContext, useEffect, useState } from "react";
import {
    saveToSecureStore,
    getFromSecureStore,
    deleteFromSecureStore,
} from "@/src/utils/secureStore";
import { SecureStoreKeys } from "@/src/constants/secureStoreKeys";

const AuthContext = createContext<any>(null);

function AuthContextProvider({ children }: any) {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkSignedIn();
    }, []);

    async function checkSignedIn() {
        try {
            const refreshToken = await getFromSecureStore(
                SecureStoreKeys.RefreshToken
            );
            const accessToken = await getFromSecureStore(
                SecureStoreKeys.AccessToken
            );
            const user = await getFromSecureStore(SecureStoreKeys.User);

            if (refreshToken && accessToken && user) {
                setIsSignedIn(true);
            } else {
                setIsSignedIn(false);
            }
        } catch (error) {
            console.error(error);
            setIsSignedIn(false);
        } finally {
            setIsLoading(false);
        }
    }

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

    async function verifyUser(otp: number) {
        try {
            const url = `${BASE_URL}/auth/users/verify`;
            const options = {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    otp,
                }),
            };

            const res = await fetch(url, options);
            const { message, data, error } = await res.json();

            if (error) {
                throw new Error(error);
            }

            // Save tokens to secure storage
            await saveToSecureStore(
                SecureStoreKeys.RefreshToken,
                data.tokens.refreshToken
            );
            await saveToSecureStore(
                SecureStoreKeys.AccessToken,
                data.tokens.accessToken
            );

            // Save user to secure storage
            await saveToSecureStore(
                SecureStoreKeys.User,
                JSON.stringify(data.user)
            );

            setIsSignedIn(true);

            return { message, data };
        } catch (error) {
            console.error(error);
        }
    }

    async function loginUser(email: string, password: string) {
        try {
            const url = `${BASE_URL}/auth/users/login`;
            const options = {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            };

            const res = await fetch(url, options);
            const { message, data, error } = await res.json();

            if (error) {
                throw new Error(error);
            }

            // Save tokens to secure storage
            await saveToSecureStore(
                SecureStoreKeys.RefreshToken,
                data.tokens.refreshToken
            );
            await saveToSecureStore(
                SecureStoreKeys.AccessToken,
                data.tokens.accessToken
            );

            // Save user to secure storage
            await saveToSecureStore(
                SecureStoreKeys.User,
                JSON.stringify(data.user)
            );

            setIsSignedIn(true);

            return { message, data };
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isSignedIn,
                isLoading,
                registerUser,
                verifyUser,
                loginUser,
            }}
        >
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
