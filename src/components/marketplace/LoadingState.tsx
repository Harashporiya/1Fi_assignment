import React from "react";
import { View, StyleSheet } from "react-native";
import { colors, radii, spacing } from "../../theme/theme";

export function LoadingState({ rows = 5 }: { rows?: number }) {
  return (
    <View style={styles.container}>
      {Array.from({ length: rows }).map((_, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.thumb} />
          <View style={styles.lines}>
            <View style={[styles.line, { width: "60%" }]} />
            <View style={[styles.line, { width: "40%" }]} />
            <View style={[styles.line, { width: "50%" }]} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.md },
  card: {
    flexDirection: "row",
    gap: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  thumb: {
    width: 72,
    height: 72,
    borderRadius: radii.md,
    backgroundColor: colors.background,
  },
  lines: {
    flex: 1,
    justifyContent: "center",
    gap: spacing.sm,
  },
  line: {
    height: 10,
    borderRadius: radii.sm,
    backgroundColor: colors.background,
  },
});
