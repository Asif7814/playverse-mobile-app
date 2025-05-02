import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";

import KeyboardDismissWrapper from "@/src/components/ui/KeyboardDismissWrapper";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import CheckBox from "@/src/components/ui/CheckBox";

export default function SignInScreen() {
    const insets = useSafeAreaInsets();
    const [themeColors] = useThemeContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState<Boolean>(false);

    function handleEmailChange(text: string) {
        setEmail(text);
    }

    function handlePasswordChange(text: string) {
        setPassword(text);
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
                {/* Sign in Form */}
                <View style={{ flex: 8, justifyContent: "center", gap: 24 }}>
                    <Text style={[textStyles.xl, { color: themeColors.text }]}>
                        Sign in
                    </Text>
                    <View style={{ gap: 16 }}>
                        <Input
                            placeholder="Email"
                            value={email}
                            onChangeText={handleEmailChange}
                            leftIcon={
                                <Ionicons
                                    name="mail"
                                    size={16}
                                    color={themeColors.input}
                                />
                            }
                            keyboardType="email-address"
                        />
                        <Input
                            placeholder="Password"
                            value={password}
                            onChangeText={handlePasswordChange}
                            secureTextEntry={!showPassword}
                            leftIcon={
                                <Ionicons
                                    name="lock-closed"
                                    size={16}
                                    color={themeColors.input}
                                />
                            }
                            rightIcon={
                                <Ionicons
                                    name={showPassword ? "eye" : "eye-off"}
                                    size={18}
                                    color={themeColors.input}
                                    onPress={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                />
                            }
                        />
                    </View>
                    <Button title="Sign in" />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <CheckBox
                            title="Remember Me"
                            checked={rememberMe}
                            onToggle={(value) => {
                                setRememberMe(value);
                            }}
                        />
                        <Link
                            href="/forgot-password"
                            style={[
                                textStyles.sm,
                                { color: themeColors.primary, fontWeight: 500 },
                            ]}
                        >
                            Forgot Password?
                        </Link>
                    </View>
                </View>
                {/* Sign up Link */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        gap: 8,
                    }}
                >
                    <Text style={(textStyles.sm, { color: themeColors.text })}>
                        Don't have an account?
                    </Text>
                    <Link
                        href="/sign-up"
                        style={[
                            textStyles.sm,
                            { color: themeColors.primary, fontWeight: 500 },
                        ]}
                    >
                        Create an account
                    </Link>
                </View>
            </View>
        </KeyboardDismissWrapper>
    );
}
