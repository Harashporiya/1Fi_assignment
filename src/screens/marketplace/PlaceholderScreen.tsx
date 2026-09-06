import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../../theme/theme";


export function PlaceholderScreen({ label }: { label: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label} — coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: spacing.xxxl * 2,
  },
  text: {
    color: colors.textSecondary,
    fontSize: 14,
  },
});
