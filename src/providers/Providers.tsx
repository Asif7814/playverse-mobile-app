import { ReactNode } from "react";
import { ThemeContextProvider } from "@/src/context/ThemeContext";
import { AuthContextProvider } from "@/src/context/AuthContext";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
        </ThemeContextProvider>
    );
}
