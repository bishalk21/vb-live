import { StyleSheet, Text, View } from "react-native";

export default function AddTeamScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Team</Text>
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
