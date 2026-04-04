import {Text, StyleSheet, Image} from "react-native";

import ThemedView from "../../components/ThemedView";

export default function Index() {

   
  return (
    <ThemedView style={styles.container}>
      <Image  source={require('../../assets/logo.png')} 
              style={{width: 200, height: 200}} />
      <Text style={styles.title}>
        Code & Lens
      </Text>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

