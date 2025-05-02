import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { useThemeContext } from "@/src/context/ThemeContext";
import { styles, textStyles } from "@/src/theme/styles";

import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function SignUpScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const [themeColors] = useThemeContext();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleUsernameChange(text: string) {
        setUsername(text);
    }

    function handleEmailChange(text: string) {
        setEmail(text);
    }

    function handlePasswordChange(text: string) {
        setPassword(text);
    }

    return (
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
            <View style={{ flex: 3, justifyContent: "center", gap: 24 }}>
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

                <Button title="Sign up" />
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
    );
}
