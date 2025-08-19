import { ReactNode } from "react";
import { ThemeContextProvider } from "@/src/context/ThemeContext";
import { AuthContextProvider } from "@/src/context/AuthContext";
import { GameContextProvider } from "@/src/context/GameContext";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <GameContextProvider>{children}</GameContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}
