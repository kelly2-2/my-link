import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProfileData, ThemeConfig } from "@/types/mylink";

export const initialProfileData: ProfileData = {
  username: "gildong",
  displayName: "홍길동 (Gildong Hong)",
  bio: "🎨 디자이너 겸 웹 크리에이터 | 토스 테이스티 웹 개발과 일상 기록 🚀",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  theme: {
    preset: "toss-blue",
    buttonRadius: "full",
  },
  links: [
    {
      id: "link-1",
      title: "공식 기술 블로그 (Velog)",
      subtitle: "웹 프론트엔드와 최신 디자인 시스템 개발기",
      url: "https://velog.io",
      icon: "📝",
      badge: "주 2회 발행",
      isActive: true,
      sortOrder: 0,
    },
    {
      id: "link-2",
      title: "GitHub 코드 저장소",
      subtitle: "Next.js 및 토스 스타일 오픈소스 프로젝트 모음",
      url: "https://github.com",
      icon: "🐙",
      badge: "50+ Repos",
      isActive: true,
      sortOrder: 1,
    },
    {
      id: "link-3",
      title: "LinkedIn 비즈니스 이력서",
      subtitle: "글로벌 커리어 및 경력 이력 확인하기",
      url: "https://linkedin.com",
      icon: "💼",
      badge: "연락 가능",
      isActive: true,
      sortOrder: 2,
    },
    {
      id: "link-4",
      title: "1:1 커피챗 신청하기",
      subtitle: "웹 개발 & 커리어 관련 편하게 소통해요",
      url: "https://tally.so",
      icon: "☕",
      badge: "신청 가능",
      isActive: true,
      sortOrder: 3,
    },
  ],
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
    }
  )
);
