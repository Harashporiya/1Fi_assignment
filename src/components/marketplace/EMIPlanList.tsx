import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { EMIPlan } from "../../types/marketplace";
import { colors, radii, spacing, typography } from "../../theme/theme";

interface Props {
  plans: EMIPlan[];
  selectedMonths: number;
  onSelect: (months: number) => void;
}

function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function EMIPlanList({ plans, selectedMonths, onSelect }: Props) {
  return (
    <View style={styles.list}>
      {plans.map((plan) => {
        const isSelected = plan.months === selectedMonths;
        return (
          <Pressable
            key={plan.months}
            onPress={() => onSelect(plan.months)}
            style={[styles.card, isSelected && styles.cardSelected]}
          >
            <View style={styles.left}>
              <View style={[styles.radio, isSelected && styles.radioSelected]}>
                {isSelected && <Ionicons name="checkmark" size={12} color={colors.textInverse} />}
              </View>
              <View>
                <Text style={typography.cardTitle}>{plan.months} months</Text>
                <Text style={typography.cardSubtitle}>
                  Total payable {formatPrice(plan.totalAmount)} · no interest
                </Text>
              </View>
            </View>
            <Text style={[typography.price, isSelected && { color: colors.primary }]}>
              {formatPrice(plan.monthlyAmount)}/mo
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: spacing.sm,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1.5,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  cardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: radii.pill,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
});
