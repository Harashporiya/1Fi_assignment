export const colors = {
  primary: "#6D28D9",
  primaryDark: "#5B21B6",
  primaryDarker: "#4C1D95",
  primaryLight: "#EDE9FE",

  background: "#F5F5F7",
  surface: "#FFFFFF",

  textPrimary: "#1A1A1A",
  textSecondary: "#6B7280",
  textInverse: "#FFFFFF",

  border: "#E5E7EB",
  success: "#16A34A",
  danger: "#DC2626",
  warning: "#D97706",

  overlay: "rgba(0,0,0,0.4)",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
} as const;

export const typography = {
  heroTitle: { fontSize: 26, fontWeight: "700" as const, color: colors.textInverse },
  heroSubtitle: { fontSize: 14, fontWeight: "400" as const, color: "rgba(255,255,255,0.85)" },
  sectionHeader: { fontSize: 18, fontWeight: "700" as const, color: colors.textPrimary },
  cardTitle: { fontSize: 16, fontWeight: "700" as const, color: colors.textPrimary },
  cardSubtitle: { fontSize: 13, fontWeight: "400" as const, color: colors.textSecondary },
  price: { fontSize: 18, fontWeight: "700" as const, color: colors.textPrimary },
  priceMuted: { fontSize: 13, fontWeight: "400" as const, color: colors.textSecondary },
  button: { fontSize: 16, fontWeight: "700" as const, color: colors.textInverse },
  tabActive: { fontSize: 14, fontWeight: "700" as const, color: colors.primary },
  tabInactive: { fontSize: 14, fontWeight: "500" as const, color: colors.textSecondary },
};

export const shadow = {
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
};
