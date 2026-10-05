export interface LinkBlock {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon?: string;
  badge?: string;
  isActive: boolean;
  sortOrder: number;
}

export interface SocialLink {
  platform: "instagram" | "youtube" | "github" | "twitter" | "tiktok" | "email";
  url: string;
}

export interface EmbedBlock {
  id: string;
  title: string;
  embedUrl: string;
  platform: "youtube" | "spotify";
  isActive: boolean;
}

export interface ThemeConfig {
  preset: "toss-blue" | "dark" | "gradient" | "minimal";
  bgColor?: string;
  textColor?: string;
  buttonBg?: string;
  buttonTextColor?: string;
  buttonRadius?: "none" | "md" | "full";
}

export interface ProfileData {
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  theme: ThemeConfig;
  links: LinkBlock[];
  socials: SocialLink[];
  embeds: EmbedBlock[];
}
