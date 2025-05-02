import { ReactNode } from "react";
import { ThemeContextProvider } from "@/src/context/ThemeContext";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
