import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radii, spacing, typography } from "../../theme/theme";

interface Props {
  message?: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="cloud-offline-outline" size={40} color={colors.textSecondary} />
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>
        {message ?? "We couldn't load the marketplace right now."}
      </Text>
      <Pressable style={styles.button} onPress={onRetry}>
        <Text style={typography.button}>Retry</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.xxxl,
    gap: spacing.sm,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    marginTop: spacing.sm,
  },
  message: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: "center",
    paddingHorizontal: spacing.xxl,
  },
  button: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxl,
  },
});
