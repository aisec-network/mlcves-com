export interface IdentityFont {
  id: string;
  display: string;
  body: string;
  mono: string;
  google_fonts_url: string;
  stack_display: string;
  stack_body: string;
  stack_mono: string;
}

export interface IdentityPalette {
  id: string;
  hue: number;
  neutral_family: string;
  accent: string;
  accent_dark: string;
  surface: string;
  surface_alt: string;
  fg: string;
  fg_muted: string;
  border: string;
  surface_dark: string;
  surface_alt_dark: string;
  fg_dark: string;
  fg_muted_dark: string;
  border_dark: string;
}

export interface IdentityLayout {
  id: "magazine" | "dashboard" | "feed" | "directory" | "longform" | "kiosk";
  component: string;
  component_path: string;
  density: "loose" | "normal" | "dense";
  brief: string;
}

export interface IdentityVoice {
  id: string;
  label_latest: string;
  label_recent: string;
  label_featured: string;
  label_more: string;
  nav_posts: string;
  nav_about: string;
  cta_subscribe: string;
  cta_subscribe_desc: string;
  cta_button: string;
  site_motto: string;
}

export interface Identity {
  font: IdentityFont;
  palette: IdentityPalette;
  layout: IdentityLayout;
  voice: IdentityVoice;
}

export const identity: Identity = {
  "font": {
    "id": "f12_serif_playfair_sourcesans",
    "display": "Playfair Display",
    "body": "Source Sans 3",
    "mono": "JetBrains Mono",
    "google_fonts_url": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&family=Source+Sans+3:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
    "stack_display": "\"Playfair Display\", \"Times New Roman\", Georgia, serif",
    "stack_body": "\"Source Sans 3\", \"Helvetica Neue\", system-ui, sans-serif",
    "stack_mono": "\"JetBrains Mono\", ui-monospace, monospace"
  },
  "palette": {
    "id": "p25_h214_warm",
    "hue": 214,
    "neutral_family": "warm",
    "accent": "22 109 223",
    "accent_dark": "95 158 242",
    "surface": "255 253 250",
    "surface_alt": "253 250 242",
    "fg": "38 30 18",
    "fg_muted": "120 100 72",
    "border": "232 222 200",
    "surface_dark": "22 18 12",
    "surface_alt_dark": "34 28 20",
    "fg_dark": "248 242 228",
    "fg_muted_dark": "180 168 140",
    "border_dark": "60 50 36"
  },
  "layout": {
    "id": "kiosk",
    "component": "HomeKiosk",
    "component_path": "@components/clusters/HomeKiosk.astro",
    "density": "loose",
    "brief": "Full-bleed alternating sections with tall hero."
  },
  "voice": {
    "id": "v10_almanac",
    "label_latest": "This week",
    "label_recent": "Almanac",
    "label_featured": "This week's headliner",
    "label_more": "Read entry",
    "nav_posts": "Almanac",
    "nav_about": "Editors",
    "cta_subscribe": "Weekly almanac",
    "cta_subscribe_desc": "One email per week. Curated, ranked, dated.",
    "cta_button": "Subscribe",
    "site_motto": "The weekly almanac for AI security."
  }
} as const;
