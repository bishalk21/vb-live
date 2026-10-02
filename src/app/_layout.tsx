import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="add-team"
        options={{
          title: "Add Team",
        }}
      />

      <Stack.Screen
        name="new-match"
        options={{
          title: "New Match",
        }}
      />
    </Stack>
  );
}
