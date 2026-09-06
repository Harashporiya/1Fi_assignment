import React from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { colors, radii, spacing, typography } from "../../theme/theme";

export type ShopTabKey = "topBrands" | "nearbyStores" | "marketplace";

const TABS: { key: ShopTabKey; label: string }[] = [
  { key: "topBrands", label: "Top Brands" },
  { key: "nearbyStores", label: "Nearby Stores" },
  { key: "marketplace", label: "1Fi Marketplace" },
];

interface Props {
  activeTab: ShopTabKey;
  onChange: (tab: ShopTabKey) => void;
}

export function ShopTabs({ activeTab, onChange }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.track}
    >
      {TABS.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={[styles.tab, isActive && styles.tabActive]}
          >
            <Text style={isActive ? typography.tabActive : typography.tabInactive}>
              {tab.label}
            </Text>
            {isActive && <View style={styles.underline} />}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  track: {
    backgroundColor: colors.primaryLight,
    borderRadius: radii.pill,
    padding: spacing.xs,
    gap: spacing.xs,
  },
  tab: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.pill,
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: colors.surface,
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: "60%",
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
  },
});
