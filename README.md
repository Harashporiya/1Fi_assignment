# 1Fi Marketplace — SDE Intern Assignment

A frontend-only implementation of the "1Fi Marketplace" tab on the Shop page,
built with Expo SDK 54 / React Native 0.81 / TypeScript, matching the
existing 1Fi app's design system (purple/violet theme, pill tabs, card lists).

## Stack
- Expo SDK 54, React Native 0.81, React 19.1
- TypeScript (strict)
- React Navigation (native-stack)
- Mock async data layer (no backend, no real network calls)

## Getting started

```bash
npm install
npx expo start
```

Scan the QR with Expo Go, or press `i` / `a` for iOS/Android simulator.

## Folder structure

```
src/
  theme/            design tokens (colors, spacing, typography) lifted from
                     the existing Shop page screenshot
  types/            Product, Variant, EMIPlan TypeScript interfaces
  data/             mock product + EMI plan dataset (never imported by UI directly)
  services/         marketplaceApi.ts — simulated async "API" layer
                     (latency + randomized failure so error states are real)
  components/       reusable, presentation-only components
  screens/          ShopScreen (3-tab switcher), MarketplaceScreen (listing),
                     ProductDetailScreen, ConfirmationScreen
  navigation/        stack navigator wiring
```

## Design decisions

- **Shop page** now has three tabs: `Top Brands`, `Nearby Stores` (both left
  as empty placeholder screens per the assignment) and `1Fi Marketplace`
  (fully built).
- All product/EMI data flows through `services/marketplaceApi.ts`, which
  simulates network latency (700–900ms) and has an injectable failure mode
  (`simulateFailureRate`) so the loading/error/empty/success states are all
  real and demonstrable, not just visual mockups.
- Swapping the mock layer for a real backend later only requires editing
  `marketplaceApi.ts` — no screen or component needs to change.
- EMI plans are "no-cost": `monthlyAmount * months === totalAmount === price`.

## Demoing the error state

`services/marketplaceApi.ts` exports `setSimulatedFailureRate(rate: number)`.
Call it (e.g. from a debug menu, or temporarily in `App.tsx`) with `1` to
force every request to fail and see the retry UI, or leave at the default
`0.08` for occasional randomized failures.
# 1Fi_assignment
