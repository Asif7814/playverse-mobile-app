import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    ViewStyle,
} from "react-native";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    style?: ViewStyle;
}

export default function KeyboardDismissWrapper({ children, style }: Props) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={[{ flex: 1 }, style]}
            >
                {children}
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
