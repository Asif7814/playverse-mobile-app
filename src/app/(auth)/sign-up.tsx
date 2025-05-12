import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { useThemeContext } from "@/src/context/ThemeContext";
import { useAuthContext } from "@/src/context/AuthContext";

import { styles, textStyles } from "@/src/theme/styles";

import KeyboardDismissWrapper from "@/src/components/ui/KeyboardDismissWrapper";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function SignUpScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const [themeColors] = useThemeContext();
    const { registerUser } = useAuthContext();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function handleUsernameChange(text: string) {
        setUsername(text);
    }

    function handleEmailChange(text: string) {
        setEmail(text);
    }

    function handlePasswordChange(text: string) {
        setPassword(text);
    }

    async function handleSignUpFormSubmission() {
        setIsLoading(true);
        const { message, data } = await registerUser(username, email, password);

        if (data) {
            console.log(message, data);
            setIsLoading(false);
            router.push("/verify-email");
        }
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
                        Create an account
                    </Text>
                    <View style={{ gap: 16 }}>
                        <Input
                            placeholder="Username"
                            value={username}
                            onChangeText={handleUsernameChange}
                            leftIcon={
                                <Ionicons
                                    name="person"
                                    size={18}
                                    color={themeColors.input}
                                />
                            }
                        />
                        <Input
                            placeholder="Email"
                            value={email}
                            onChangeText={handleEmailChange}
                            leftIcon={
                                <Ionicons
                                    name="mail"
                                    size={18}
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
                                    size={18}
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
                    <Button
                        title="Sign up"
                        onPress={handleSignUpFormSubmission}
                        isLoading={isLoading}
                    />
                </View>
                {/* Sign in Link */}
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
                        Already have an account?
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            router.back();
                        }}
                    >
                        <Text
                            style={
                                (textStyles.sm,
                                { color: themeColors.primary, fontWeight: 500 })
                            }
                        >
                            Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardDismissWrapper>
    );
}
