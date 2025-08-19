import { StyleSheet } from "react-native";

const cardImageWidth = 96;
const cardImageHeight = (cardImageWidth / 4) * 5; // 4:5 aspect ratio;

const styles = StyleSheet.create({
    // --- Container Styles ---
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    loadingIndicatorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    // --- Overlay Styles ---
    overlay: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        paddingHorizontal: 24,
        paddingTop: 16,
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

    // --- TabBar Styles ---
    tabBarLabel: {
        fontSize: 10,
    },

    // --- Card Styles ---
    card: {
        width: cardImageWidth,
        height: cardImageHeight,

        borderRadius: 8,
        paddingHorizontal: 4,
    },
});

const textStyles = StyleSheet.create({
    xl: { fontSize: 28, fontWeight: 700 },
    lg: { fontSize: 22, fontWeight: 500 },
    md: { fontSize: 17, fontWeight: 400 },
    sm: { fontSize: 15, fontWeight: 400 },
});

export { styles, textStyles };
