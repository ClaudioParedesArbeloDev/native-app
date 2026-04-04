import { Stack } from "expo-router";
import { StyleSheet, useColorScheme} from "react-native";
import { StatusBar } from "expo-status-bar";
import {Colors} from '../../constants/Colors';

const RootLayout = () => {
  const colorScheme = useColorScheme();

  const theme = Colors.theme[(colorScheme ?? 'light') as 'light' | 'dark'];

  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}>
        <Stack.Screen name="index" options={{title: 'Home'}} />
      
      </Stack>
    </>
    
  )
}

export default RootLayout;

const styles = StyleSheet.create({})