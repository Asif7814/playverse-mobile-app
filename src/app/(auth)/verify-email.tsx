import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";

import KeyboardDismissWrapper from "@/src/components/ui/KeyboardDismissWrapper";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function VerifyEmailScreen() {
    const insets = useSafeAreaInsets();
    const [themeColors] = useThemeContext();

    const [otp, setOtp] = useState("");

    function handleOtpChange(text: string) {
        setOtp(text);
    }

    return (
        <KeyboardDismissWrapper>
            <View
                style={[
                    styles.container,
                    {
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        backgroundColor: themeColors.background,
                    },
                ]}
            >
                {/* Verify Email Form */}
                <View style={{ flex: 8, justifyContent: "center", gap: 24 }}>
                    <View style={{ gap: 8 }}>
                        <Text
                            style={[textStyles.xl, { color: themeColors.text }]}
                        >
                            Verify Email
                        </Text>
                        <Text
                            style={[textStyles.md, { color: themeColors.text }]}
                        >
                            Enter the 6-digit verification code sent to your
                            email.
                        </Text>
                    </View>
                    <Input
                        placeholder="Verification Code"
                        value={otp}
                        onChangeText={handleOtpChange}
                        keyboardType="numeric"
                        maxLength={6}
                        leftIcon={
                            <Ionicons
                                name="key"
                                size={18}
                                color={themeColors.input}
                            />
                        }
                    />
                    <Button title="Confirm" />
                </View>
            </View>
        </KeyboardDismissWrapper>
    );
}
