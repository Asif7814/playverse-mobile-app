import { Text, View } from "react-native";
import { styles, textStyles } from "@/src/theme/styles";

export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <Text style={textStyles.xl}>Sign in</Text>
        </View>
    );
}
