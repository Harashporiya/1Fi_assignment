import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ShopTabs, ShopTabKey } from "../../components/marketplace/ShopTabs";
import { MarketplaceListContent } from "../../components/marketplace/MarketplaceListContent";
import { PlaceholderScreen } from "./PlaceholderScreen";
import { colors, spacing, typography, radii } from "../../theme/theme";
import { MarketplaceStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<MarketplaceStackParamList, "Shop">;

export function ShopScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<ShopTabKey>("marketplace");

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.hero} edges={["top"]}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>✨ NO-COST EMIs</Text>
        </View>
        <Text style={typography.heroTitle}>
          Shop today,{"\n"}
          <Text style={{ fontStyle: "italic" }}>Pay later using</Text>
          {"\n"}Mutual funds.
        </Text>
        <Text style={typography.heroSubtitle}>
          No credit score required. No interest.{"\n"}Backed by your investments.
        </Text>
      </SafeAreaView>

      <View style={styles.tabsWrap}>
        <ShopTabs activeTab={activeTab} onChange={setActiveTab} />
      </View>

      <View style={styles.content}>
        {activeTab === "topBrands" && <PlaceholderScreen label="Top Brands" />}
        {activeTab === "nearbyStores" && <PlaceholderScreen label="Nearby Stores" />}
        {activeTab === "marketplace" && (
          <MarketplaceListContent
            onProductPress={(product) =>
              navigation.navigate("ProductDetail", { productId: product.id })
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  hero: {
    backgroundColor: colors.primaryDark,
    padding: spacing.xl,
    paddingBottom: spacing.xxxl,
    gap: spacing.sm,
  },
  badge: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    borderRadius: radii.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginBottom: spacing.sm,
  },
  badgeText: {
    color: colors.textInverse,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  tabsWrap: {
    paddingHorizontal: spacing.lg,
    marginTop: -spacing.xl,
  },
  content: {
    flex: 1,
  },
});
