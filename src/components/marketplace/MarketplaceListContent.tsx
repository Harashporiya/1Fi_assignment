import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { SearchBar } from "./SearchBar";
import { ProductCard } from "./ProductCard";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { EmptyState } from "./EmptyState";
import { getProducts, searchProducts } from "../../services/marketplaceApi";
import { AsyncStatus, Product } from "../../types/marketplace";
import { colors, spacing } from "../../theme/theme";

interface Props {
  onProductPress: (product: Product) => void;
}

export function MarketplaceListContent({ onProductPress }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<AsyncStatus>("loading");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [query, setQuery] = useState("");

  const load = useCallback(async (searchQuery: string) => {
    setStatus("loading");
    setErrorMessage(undefined);
    try {
      const results = searchQuery.trim()
        ? await searchProducts(searchQuery)
        : await getProducts();
      setProducts(results);
      setStatus(results.length === 0 ? "empty" : "success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Unexpected error.");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => load(query), query ? 300 : 0);
    return () => clearTimeout(timeout);

  }, [query]);

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChangeText={setQuery} />

      <View style={styles.listArea}>
        {status === "loading" && <LoadingState />}
        {status === "error" && (
          <ErrorState message={errorMessage} onRetry={() => load(query)} />
        )}
        {status === "empty" && <EmptyState query={query} />}
        {status === "success" && (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard product={item} onPress={onProductPress} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: spacing.xxxl }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  listArea: {
    flex: 1,
    marginTop: spacing.lg,
  },
});
