import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProfileData, ThemeConfig, LinkBlock } from "@/types/mylink";
import mockLinksData from "@/data/mock-links.json";

export const initialProfileData: ProfileData = {
  username: "gildong",
  displayName: "홍길동 (Gildong Hong)",
  bio: "🎨 디자이너 겸 웹 크리에이터 | 토스 테이스티 웹 개발과 일상 기록 🚀",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  theme: {
    preset: "toss-blue",
    buttonRadius: "full",
  },
  links: mockLinksData.data as LinkBlock[],
  socials: [
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "youtube", url: "https://youtube.com" },
    { platform: "github", url: "https://github.com" },
    { platform: "email", url: "mailto:gildong@example.com" },
  ],
  embeds: [
    {
      id: "embed-1",
      title: "🎬 최근 유튜브 영상 추천",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      platform: "youtube",
      isActive: true,
    },
  ],
};

interface ProfileStore {
  profile: ProfileData;
  setThemePreset: (preset: ThemeConfig["preset"]) => void;
  updateProfile: (partial: Partial<ProfileData>) => void;
  resetToDefault: () => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: initialProfileData,
      setThemePreset: (preset) =>
        set((state) => ({
          profile: {
            ...state.profile,
            theme: { ...state.profile.theme, preset },
          },
        })),
      updateProfile: (partial) =>
        set((state) => ({
          profile: { ...state.profile, ...partial },
        })),
      resetToDefault: () => set({ profile: initialProfileData }),
    }),
    {
      name: "mylink_profile_v1",
      storage: createJSONStorage(() => localStorage),
      version: 1,
      migrate: (persistedState: any, version: number) => {
        if (
          !persistedState ||
          version < 1 ||
          !persistedState?.profile?.links ||
          persistedState.profile.links.length < 8
        ) {
          return {
            ...persistedState,
            profile: {
              ...(persistedState?.profile || initialProfileData),
              links: mockLinksData.data as LinkBlock[],
            },
          };
        }
        return persistedState;
      },
    }
  )
);
