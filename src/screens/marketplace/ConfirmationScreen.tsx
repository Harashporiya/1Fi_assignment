import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { colors, radii, spacing, typography } from "../../theme/theme";
import { MarketplaceStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<MarketplaceStackParamList, "Confirmation">;

function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function ConfirmationScreen({ route, navigation }: Props) {
  const { productName, months, monthlyAmount } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Ionicons name="checkmark-circle" size={64} color={colors.success} />
      </View>
      <Text style={styles.title}>Plan selected!</Text>
      <Text style={styles.message}>
        You've chosen the {months}-month no-cost EMI plan for {productName} at{" "}
        {formatPrice(monthlyAmount)}/month. Your mutual fund holdings will back this
        purchase — no credit score check needed.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={typography.button}>Back to Marketplace</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xxl,
  },
  iconWrap: { marginBottom: spacing.lg },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  message: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: spacing.xxl,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxl,
  },
});
