import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOLLEYBALL LIVE</Text>

      <View style={styles.actions}>
        <Link href="/add-team" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>+ Add Team</Text>
          </Pressable>
        </Link>

        <Link href="/new-match" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>+ New Match</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 48,
  },

  actions: {
    width: "100%",
    maxWidth: 360,
    gap: 16,
  },

  button: {
    minHeight: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#111",
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
