import { StyleSheet, Text, View } from "react-native";

export default function NewMatchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Match</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
  },
});
