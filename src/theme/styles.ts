import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // --- Container Styles ---
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 24,
        paddingRight: 24,
    },
});

const textStyles = StyleSheet.create({
    xl: { fontSize: 28, fontWeight: 700 },
    lg: { fontSize: 22, fontWeight: 500 },
    md: { fontSize: 17, fontWeight: 400 },
    sm: { fontSize: 15, fontWeight: 400 },
});

export { styles, textStyles };
