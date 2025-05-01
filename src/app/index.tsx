import { Text, View } from "react-native";
import { styles, textStyles } from "@/src/theme/styles";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={textStyles.xl}>PlayVerse</Text>
        </View>
    );
}
