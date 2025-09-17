import { ReactNode } from "react";
import { ThemeContextProvider } from "@/src/context/ThemeContext";
import { AuthContextProvider } from "@/src/context/AuthContext";
import { GameContextProvider } from "@/src/context/GameContext";
import { UserGameLibraryContextProvider } from "@/src/context/UserGameLibraryContext";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <GameContextProvider>
                    <UserGameLibraryContextProvider>
                        {children}
                    </UserGameLibraryContextProvider>
                </GameContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}
