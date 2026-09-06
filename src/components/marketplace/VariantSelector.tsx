import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Variant } from "../../types/marketplace";
import { colors, radii, spacing } from "../../theme/theme";

interface Props {
  variants: Variant[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function VariantSelector({ variants, selectedId, onSelect }: Props) {
  if (variants.length === 0) return null;

  return (
    <View style={styles.row}>
      {variants.map((variant) => {
        const isSelected = variant.id === selectedId;
        return (
          <Pressable
            key={variant.id}
            onPress={() => onSelect(variant.id)}
            style={[styles.chip, isSelected && styles.chipSelected]}
          >
            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {variant.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  chip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.pill,
    backgroundColor: colors.primaryLight,
  },
  chipSelected: {
    backgroundColor: colors.primary,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },
  labelSelected: {
    color: colors.textInverse,
  },
});
