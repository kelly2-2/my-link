"use client";

import { useEffect, useState } from "react";
import { useProfileStore } from "@/store/useProfileStore";
import ProfileHeader from "./ProfileHeader";
import SocialBar from "./SocialBar";
import LinkButton from "./LinkButton";
import EmbedCard from "./EmbedCard";
import ThemeSwitcher from "./ThemeSwitcher";

export default function ProfileView() {
  const [mounted, setMounted] = useState(false);
  const { profile } = useProfileStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // 테마별 모바일 배경 컨테이너 클래스
  const getThemeBgClass = () => {
    switch (profile.theme.preset) {
      case "dark":
        return "bg-gray-950 text-gray-100";
      case "gradient":
        return "bg-gradient-to-b from-pink-100 via-purple-100 to-indigo-100 text-gray-900";
      case "minimal":
        return "bg-gray-50 text-gray-900";
      case "toss-blue":
      default:
        return "bg-[#F2F4F6] text-gray-900";
    }
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 flex justify-center py-6 px-4 ${getThemeBgClass()}`}>
      {/* 모바일 화면 래퍼 (최대 너비 430px로 링크트리 모바일 뷰 강조) */}
      <main className="w-full max-w-[430px] flex flex-col items-center gap-5 pb-24">
        {/* 헤더 */}
        <ProfileHeader profile={profile} />

        {/* 소셜 매체 바 */}
        <SocialBar socials={profile.socials} />

        {/* 다중 링크 버튼 리스트 */}
        <section className="w-full flex flex-col gap-3 px-1">
          {profile.links
            .filter((l) => l.isActive)
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((link) => (
              <LinkButton key={link.id} link={link} themePreset={profile.theme.preset} />
            ))}
        </section>

        {/* 미디어 임베드 카드 리스트 */}
        <section className="w-full flex flex-col gap-4 px-1 mt-2">
          {profile.embeds
            .filter((e) => e.isActive)
            .map((embed) => (
              <EmbedCard key={embed.id} embed={embed} />
            ))}
        </section>

        {/* 서비스 푸터 */}
        <footer className="mt-8 text-center">
          <p className="text-xs opacity-60 font-semibold tracking-wider uppercase">
            Powered by <span className="text-blue-500 font-bold">MyLink</span>
          </p>
        </footer>
      </main>

      {/* 시연용 하단 테마 변경 바 */}
      <ThemeSwitcher />
    </div>
  );
}
