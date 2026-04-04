import { StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function ThemedCard({ style, ...props }: any) {
    const colorScheme = useColorScheme();
    const theme = Colors.theme[(colorScheme ?? 'light') as 'light' | 'dark'];

    return (
        <View 
            style= {[styles.card, {backgroundColor: theme.uiBackground}, style]}
            {...props}
            /> 
        );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    },
});