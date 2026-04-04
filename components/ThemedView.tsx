import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function ThemedView({ style, ...props }: any) {
    const colorScheme = useColorScheme();
    const theme = Colors.theme[(colorScheme ?? 'light') as 'light' | 'dark'];

    return (
        <View 
            style= {[{ backgroundColor: theme.background}, style]}
            {...props}
            /> 
        );
}
