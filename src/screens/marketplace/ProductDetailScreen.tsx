import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VariantSelector } from "../../components/marketplace/VariantSelector";
import { EMIPlanList } from "../../components/marketplace/EMIPlanList";
import { LoadingState } from "../../components/marketplace/LoadingState";
import { ErrorState } from "../../components/marketplace/ErrorState";
import { getProductById } from "../../services/marketplaceApi";
import { AsyncStatus, Product } from "../../types/marketplace";
import { colors, radii, spacing, typography, shadow } from "../../theme/theme";
import { MarketplaceStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<MarketplaceStackParamList, "ProductDetail">;

function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function ProductDetailScreen({ route, navigation }: Props) {
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [status, setStatus] = useState<AsyncStatus>("loading");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const [selectedMonths, setSelectedMonths] = useState<number>(0);

  const load = useCallback(async () => {
    setStatus("loading");
    setErrorMessage(undefined);
    try {
      const result = await getProductById(productId);
      setProduct(result);
      setSelectedVariantId(result.variants[0]?.id ?? "");
      setSelectedMonths(result.emiPlans[0]?.months ?? 0);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Unexpected error.");
      setStatus("error");
    }
  }, [productId]);

  useEffect(() => {
    load();
  }, [load]);

  const selectedPlan = useMemo(
    () => product?.emiPlans.find((p) => p.months === selectedMonths),
    [product, selectedMonths]
  );

  if (status === "loading") {
    return (
      <View style={styles.container}>
        <LoadingState rows={1} />
      </View>
    );
  }

  if (status === "error" || !product) {
    return (
      <View style={styles.container}>
        <ErrorState message={errorMessage} onRetry={load} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: product.image }} style={styles.image} contentFit="cover" />

        <View style={styles.section}>
          <Text style={typography.sectionHeader}>{product.name}</Text>
          <Text style={typography.price}>{formatPrice(product.price)}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        {product.variants.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.label}>Select variant</Text>
            <VariantSelector
              variants={product.variants}
              selectedId={selectedVariantId}
              onSelect={setSelectedVariantId}
            />
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.label}>Choose an EMI plan</Text>
          <EMIPlanList
            plans={product.emiPlans}
            selectedMonths={selectedMonths}
            onSelect={setSelectedMonths}
          />
        </View>
      </ScrollView>

      <View style={[styles.ctaBar, shadow.card]}>
        <Pressable
          style={styles.ctaButton}
          onPress={() =>
            navigation.navigate("Confirmation", {
              productName: product.name,
              months: selectedPlan?.months ?? 0,
              monthlyAmount: selectedPlan?.monthlyAmount ?? 0,
            })
          }
        >
          <Text style={typography.button}>Proceed with this EMI Plan</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollContent: { paddingBottom: spacing.xxxl * 2 },
  image: { width: "100%", height: 280, backgroundColor: colors.surface },
  section: {
    padding: spacing.lg,
    gap: spacing.sm,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  ctaBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.surface,
    padding: spacing.lg,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    paddingVertical: spacing.md,
    alignItems: "center",
  },
});
