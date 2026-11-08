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
      <div className="min-h-screen flex items-center justify-center bg-[#F2F4F6]">
        <div className="w-8 h-8 border-4 border-[#3182F6] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // 테마별 페이지 배경 클래스
  const getThemeBgClass = () => {
    switch (profile.theme.preset) {
      case "dark":
        return "bg-gray-950 text-gray-100 dark";
      case "gradient":
        return "bg-gradient-to-b from-pink-100 via-purple-100 to-indigo-100 text-gray-900";
      case "minimal":
        return "bg-gray-100 text-gray-900";
      case "toss-blue":
      default:
        return "bg-[#F2F4F6] text-gray-900";
    }
  };

  // 테마별 내부 카드(흰 패널) 클래스
  const getCardClass = () => {
    switch (profile.theme.preset) {
      case "dark":
        return "bg-[#111827] border border-gray-800 text-gray-100 shadow-2xl";
      case "gradient":
        return "bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl";
      case "minimal":
        return "bg-white border-2 border-gray-900 shadow-none";
      case "toss-blue":
      default:
        return "bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(25,31,40,0.08)]";
    }
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 flex justify-center py-8 px-4 ${getThemeBgClass()}`}>
      {/* 모바일 화면 래퍼 (최대 너비 430px) */}
      <main className="w-full max-w-[430px] flex flex-col items-center gap-0 pb-24">

        {/* ── 흰 패널 카드 (프로필 + 소셜 + 링크 + 임베드 전체 감싸기) ── */}
        <div className={`w-full rounded-3xl transition-colors duration-300 overflow-hidden ${getCardClass()}`}>

          {/* 헤더 */}
          <ProfileHeader profile={profile} />

          {/* 소셜 매체 바 */}
          <div className="px-6 pb-4">
            <SocialBar socials={profile.socials} />
          </div>

          {/* 구분선 */}
          <div className="mx-6 border-t border-black/[0.05] dark:border-gray-800" />

          {/* 다중 링크 버튼 리스트 */}
          <section className="w-full flex flex-col gap-3 px-5 py-5">
            {profile.links && profile.links.length > 0 ? (
              profile.links
                .filter((l) => l.isActive)
                .sort((a, b) => a.sortOrder - b.sortOrder)
                .map((link) => (
                  <LinkButton key={link.id} link={link} themePreset={profile.theme.preset} />
                ))
            ) : (
              <div className="w-full py-12 text-center text-sm opacity-50 dark:opacity-60 text-gray-500 dark:text-gray-400">
                등록된 링크가 아직 없어요
              </div>
            )}
          </section>

          {/* 미디어 임베드 카드 리스트 */}
          {profile.embeds.some((e) => e.isActive) && (
            <section className="w-full flex flex-col gap-4 px-5 pb-5">
              {profile.embeds
                .filter((e) => e.isActive)
                .map((embed) => (
                  <EmbedCard key={embed.id} embed={embed} themePreset={profile.theme.preset} />
                ))}
            </section>
          )}

          {/* 서비스 푸터 */}
          <footer className="py-5 text-center border-t border-black/[0.05] dark:border-gray-800">
            <p className="text-xs opacity-60 dark:opacity-75 font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
              Powered by <span className="text-[#3182F6] font-bold">MyLink</span>
            </p>
          </footer>

        </div>
        {/* ── 흰 패널 끝 ── */}

      </main>

      {/* 시연용 하단 테마 변경 바 */}
      <ThemeSwitcher />
    </div>
  );
}
