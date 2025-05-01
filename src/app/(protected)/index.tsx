import { Text, View } from "react-native";
import { styles, textStyles } from "@/src/theme/styles";

export default function IndexScreen() {
    return (
        <View style={styles.container}>
            <Text style={textStyles.xl}>Home</Text>
        </View>
    );
}
