import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../../theme/theme";

export function EmptyState({ query }: { query?: string }) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={40} color={colors.textSecondary} />
      <Text style={styles.title}>No products found</Text>
      <Text style={styles.message}>
        {query ? `Nothing matched "${query}". Try a different search.` : "Check back soon."}
      </Text>
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
});
