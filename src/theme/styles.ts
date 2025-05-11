import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // --- Container Styles ---
    container: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 24,
        paddingRight: 24,
    },
    loadingIndicatorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    // --- Button Styles ---
    button: {
        alignItems: "center",
        paddingVertical: 12,
        borderRadius: 8,
    },

    // --- Input Styles ---
    inputContainer: {
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 0.5,
        borderRadius: 8,
    },

    checkbox: {
        width: 16,
        height: 16,
        borderWidth: 0.5,
        borderRadius: 4,
    },
});

const textStyles = StyleSheet.create({
    xl: { fontSize: 28, fontWeight: 700 },
    lg: { fontSize: 22, fontWeight: 500 },
    md: { fontSize: 17, fontWeight: 400 },
    sm: { fontSize: 15, fontWeight: 400 },
});

export { styles, textStyles };
