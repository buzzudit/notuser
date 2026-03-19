export type Palette = {
  id: string;
  name: string;
  light: {
    primary: string;
    accent: string;
    background: string;
    foreground: string;
    secondary: string;
    muted: string;
    border: string;
    selection: string;
    selectionForeground: string;
  };
  dark: {
    primary: string;
    accent: string;
    background: string;
    foreground: string;
    secondary: string;
    muted: string;
    border: string;
    selection: string;
    selectionForeground: string;
  };
};

export const palettes: Palette[] = [
  {
    id: "blue-resume",
    name: "Blue Resume",
    light: {
      primary: "217 65% 73%",
      accent: "223 47% 71%",
      background: "0 0% 100%",
      foreground: "0 0% 0%",
      secondary: "0 0% 89%",
      muted: "0 0% 94%",
      border: "0 0% 89%",
      selection: "214 74% 76%",
      selectionForeground: "0 0% 10%",
    },
    dark: {
      primary: "38 92% 50%",
      accent: "38 92% 50%",
      background: "0 0% 4%",
      foreground: "40 10% 92%",
      secondary: "0 0% 12%",
      muted: "0 0% 10%",
      border: "0 0% 14%",
      selection: "38 92% 46%",
      selectionForeground: "0 0% 6%",
    },
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    light: {
      primary: "199 89% 48%",
      accent: "187 85% 53%",
      background: "0 0% 100%",
      foreground: "0 0% 5%",
      secondary: "199 20% 92%",
      muted: "199 15% 95%",
      border: "199 20% 88%",
      selection: "199 89% 68%",
      selectionForeground: "0 0% 10%",
    },
    dark: {
      primary: "199 89% 58%",
      accent: "187 85% 63%",
      background: "200 20% 6%",
      foreground: "199 15% 90%",
      secondary: "200 15% 12%",
      muted: "200 10% 10%",
      border: "200 15% 16%",
      selection: "199 89% 48%",
      selectionForeground: "0 0% 6%",
    },
  },
  {
    id: "forest-green",
    name: "Forest Green",
    light: {
      primary: "142 76% 36%",
      accent: "158 64% 52%",
      background: "0 0% 100%",
      foreground: "0 0% 5%",
      secondary: "142 20% 92%",
      muted: "142 15% 95%",
      border: "142 20% 88%",
      selection: "142 76% 56%",
      selectionForeground: "0 0% 100%",
    },
    dark: {
      primary: "142 76% 46%",
      accent: "158 64% 62%",
      background: "142 30% 5%",
      foreground: "142 15% 90%",
      secondary: "142 20% 11%",
      muted: "142 15% 9%",
      border: "142 20% 15%",
      selection: "142 76% 36%",
      selectionForeground: "0 0% 6%",
    },
  },
  {
    id: "sunset-coral",
    name: "Sunset Coral",
    light: {
      primary: "14 100% 57%",
      accent: "340 82% 52%",
      background: "0 0% 100%",
      foreground: "0 0% 5%",
      secondary: "14 30% 92%",
      muted: "14 20% 95%",
      border: "14 25% 88%",
      selection: "14 100% 77%",
      selectionForeground: "0 0% 10%",
    },
    dark: {
      primary: "14 100% 67%",
      accent: "340 82% 62%",
      background: "14 25% 6%",
      foreground: "14 15% 90%",
      secondary: "14 20% 12%",
      muted: "14 15% 10%",
      border: "14 20% 16%",
      selection: "14 100% 57%",
      selectionForeground: "0 0% 6%",
    },
  },
  {
    id: "purple-haze",
    name: "Purple Haze",
    light: {
      primary: "271 81% 56%",
      accent: "291 64% 62%",
      background: "0 0% 100%",
      foreground: "0 0% 5%",
      secondary: "271 25% 92%",
      muted: "271 20% 95%",
      border: "271 25% 88%",
      selection: "271 81% 76%",
      selectionForeground: "0 0% 100%",
    },
    dark: {
      primary: "271 81% 66%",
      accent: "291 64% 72%",
      background: "271 30% 6%",
      foreground: "271 15% 90%",
      secondary: "271 25% 12%",
      muted: "271 20% 10%",
      border: "271 25% 16%",
      selection: "271 81% 56%",
      selectionForeground: "0 0% 6%",
    },
  },
  {
    id: "slate-modern",
    name: "Slate Modern",
    light: {
      primary: "215 20% 45%",
      accent: "215 25% 55%",
      background: "0 0% 100%",
      foreground: "215 25% 10%",
      secondary: "215 15% 92%",
      muted: "215 10% 95%",
      border: "215 15% 88%",
      selection: "215 20% 65%",
      selectionForeground: "0 0% 100%",
    },
    dark: {
      primary: "215 20% 65%",
      accent: "215 25% 75%",
      background: "215 25% 8%",
      foreground: "215 15% 88%",
      secondary: "215 20% 14%",
      muted: "215 15% 12%",
      border: "215 20% 18%",
      selection: "215 20% 45%",
      selectionForeground: "0 0% 6%",
    },
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    light: {
      primary: "340 55% 50%",
      accent: "30 80% 55%",
      background: "0 0% 100%",
      foreground: "0 0% 5%",
      secondary: "340 20% 92%",
      muted: "340 15% 95%",
      border: "340 20% 88%",
      selection: "340 55% 70%",
      selectionForeground: "0 0% 100%",
    },
    dark: {
      primary: "340 55% 60%",
      accent: "30 80% 65%",
      background: "340 25% 6%",
      foreground: "340 15% 90%",
      secondary: "340 20% 12%",
      muted: "340 15% 10%",
      border: "340 20% 16%",
      selection: "340 55% 50%",
      selectionForeground: "0 0% 6%",
    },
  },
  {
    id: "teal-wave",
    name: "Teal Wave",
    light: {
      primary: "174 62% 47%",
      accent: "184 77% 54%",
      background: "0 0% 100%",
      foreground: "0 0% 5%",
      secondary: "174 20% 92%",
      muted: "174 15% 95%",
      border: "174 20% 88%",
      selection: "174 62% 67%",
      selectionForeground: "0 0% 10%",
    },
    dark: {
      primary: "174 62% 57%",
      accent: "184 77% 64%",
      background: "174 25% 6%",
      foreground: "174 15% 90%",
      secondary: "174 20% 12%",
      muted: "174 15% 10%",
      border: "174 20% 16%",
      selection: "174 62% 47%",
      selectionForeground: "0 0% 6%",
    },
  },
  {
    id: "amber-glow",
    name: "Amber Glow",
    light: {
      primary: "45 93% 47%",
      accent: "38 92% 50%",
      background: "0 0% 100%",
      foreground: "0 0% 5%",
      secondary: "45 25% 92%",
      muted: "45 20% 95%",
      border: "45 25% 88%",
      selection: "45 93% 67%",
      selectionForeground: "0 0% 10%",
    },
    dark: {
      primary: "45 93% 57%",
      accent: "38 92% 60%",
      background: "45 25% 6%",
      foreground: "45 15% 90%",
      secondary: "45 20% 12%",
      muted: "45 15% 10%",
      border: "45 20% 16%",
      selection: "45 93% 47%",
      selectionForeground: "0 0% 6%",
    },
  },
  {
    id: "indigo-night",
    name: "Indigo Night",
    light: {
      primary: "239 84% 67%",
      accent: "249 77% 72%",
      background: "0 0% 100%",
      foreground: "0 0% 5%",
      secondary: "239 25% 92%",
      muted: "239 20% 95%",
      border: "239 25% 88%",
      selection: "239 84% 87%",
      selectionForeground: "0 0% 10%",
    },
    dark: {
      primary: "239 84% 77%",
      accent: "249 77% 82%",
      background: "239 30% 6%",
      foreground: "239 15% 90%",
      secondary: "239 25% 12%",
      muted: "239 20% 10%",
      border: "239 25% 16%",
      selection: "239 84% 67%",
      selectionForeground: "0 0% 6%",
    },
  },
];
