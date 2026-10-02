import * as Device from "expo-device";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { Link } from "expo-router";

function getDevMenuHint() {
  if (Platform.OS === "web") {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOLLEYBALL LIVE</Text>

      <View style={styles.actions}>
        <Link href="/add-team" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>+ New Team</Text>
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
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 1,
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
    backgroundColor: "#111111",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
  },
});
