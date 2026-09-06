import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShopScreen } from "../screens/marketplace/ShopScreen";
import { ProductDetailScreen } from "../screens/marketplace/ProductDetailScreen";
import { ConfirmationScreen } from "../screens/marketplace/ConfirmationScreen";
import { MarketplaceStackParamList } from "./types";
import { colors } from "../theme/theme";

const Stack = createNativeStackNavigator<MarketplaceStackParamList>();

export function ShopNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.textPrimary,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
