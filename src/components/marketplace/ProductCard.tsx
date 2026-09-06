import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Product } from "../../types/marketplace";
import { colors, radii, spacing, typography, shadow } from "../../theme/theme";

interface Props {
  product: Product;
  onPress: (product: Product) => void;
}

function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function ProductCard({ product, onPress }: Props) {
  const cheapestPlan = product.emiPlans.reduce((min, plan) =>
    plan.monthlyAmount < min.monthlyAmount ? plan : min
  , product.emiPlans[0]);

  return (
    <Pressable
      onPress={() => onPress(product)}
      style={({ pressed }) => [styles.card, shadow.card, pressed && styles.pressed]}
    >
      <Image source={{ uri: product.image }} style={styles.image} contentFit="cover" />
      <View style={styles.info}>
        <Text style={typography.cardTitle} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={typography.price}>{formatPrice(product.price)}</Text>
        {cheapestPlan && (
          <Text style={typography.priceMuted}>
            EMI from {formatPrice(cheapestPlan.monthlyAmount)}/mo
          </Text>
        )}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            No-cost EMI upto {product.maxEmiMonths} months
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.lg,
    flexDirection: "row",
    gap: spacing.lg,
    marginBottom: spacing.md,
  },
  pressed: {
    opacity: 0.85,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: radii.md,
    backgroundColor: colors.background,
  },
  info: {
    flex: 1,
    gap: 2,
    justifyContent: "center",
  },
  badge: {
    marginTop: spacing.xs,
    alignSelf: "flex-start",
    backgroundColor: colors.primaryLight,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.primary,
  },
});
