"use client";

import { useState } from "react";
import Image from "next/image";
import { ProfileData } from "@/types/mylink";
import { Share2, Check, Sparkles } from "lucide-react";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center text-center pt-8 pb-4 px-4 relative">
      {/* 공유 버튼 */}
      <button
        onClick={handleShare}
        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 active:scale-95 transition-all text-gray-700 dark:text-gray-200"
        title="프로필 링크 공유하기"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
      </button>

      {/* 아바타 이미지 */}
      <div className="relative mb-4 group">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-500/20 shadow-md relative">
          <Image
            src={profile.avatarUrl}
            alt={profile.displayName}
            fill
            sizes="96px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        <span className="absolute bottom-0 right-0 p-1.5 rounded-full bg-blue-500 text-white shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* 표시 이름 & 유저네임 */}
      <h1 className="text-2xl font-bold tracking-tight mb-1 font-sans flex items-center gap-1.5">
        {profile.displayName}
      </h1>
      <p className="text-sm font-medium opacity-70 mb-3 font-mono">@{profile.username}</p>

      {/* 바이오 (한줄 소개) */}
      <p className="text-sm max-w-sm leading-relaxed opacity-85 px-2 mb-2 font-normal">
        {profile.bio}
      </p>

      {/* 복사 성공 토스트 메세지 */}
      {copied && (
        <div className="mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-full shadow-lg animate-fade-in">
          프로필 링크가 복사되었습니다! ✨
        </div>
      )}
    </div>
  );
}
