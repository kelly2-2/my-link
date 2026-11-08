"use client";

import { EmbedBlock, ThemeConfig } from "@/types/mylink";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface EmbedCardProps {
  embed: EmbedBlock;
  themePreset?: ThemeConfig["preset"];
}

export default function EmbedCard({ embed, themePreset }: EmbedCardProps) {
  if (!embed.isActive) return null;

  const isDark = themePreset === "dark";

  return (
    <Card
      className={`w-full flex flex-col gap-2.5 rounded-2xl overflow-hidden p-3.5 shadow-sm transition-all duration-200 border ${
        isDark
          ? "bg-[#1f2937]/90 border-gray-700/60 text-white shadow-sm"
          : "bg-white dark:bg-[#1f2937]/90 border-black/[0.06] dark:border-gray-700/60 text-gray-900 dark:text-white"
      }`}
    >
      <div className="flex items-center gap-2 px-1">
        <span
          className={`flex items-center justify-center w-5 h-5 rounded-md ${
            isDark
              ? "bg-[#3182F6]/20 text-[#3182F6]"
              : "bg-[#3182F6]/10 dark:bg-[#3182F6]/20 text-[#3182F6]"
          }`}
        >
          <Play className="w-2.5 h-2.5 fill-current" />
        </span>
        <h3
          className={`text-xs sm:text-[13px] font-semibold text-left truncate tracking-tight ${
            isDark ? "text-gray-100" : "text-gray-800 dark:text-gray-100"
          }`}
        >
          {embed.title}
        </h3>
      </div>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10 dark:bg-black/40 border border-black/5 dark:border-white/10">
        <iframe
          src={embed.embedUrl}
          title={embed.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    </Card>
  );
}
