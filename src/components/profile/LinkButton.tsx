"use client";

import { LinkBlock, ThemeConfig } from "@/types/mylink";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LinkButtonProps {
  link: LinkBlock;
  themePreset?: ThemeConfig["preset"];
}

export default function LinkButton({ link, themePreset }: LinkButtonProps) {
  if (!link.isActive) return null;

  const isMail = link.url.startsWith("mailto:");

  // 테마별 카드 배경 및 보더 스타일
  const getThemeStyles = () => {
    switch (themePreset) {
      case "dark":
        return "bg-[#1f2937]/90 hover:bg-[#374151] border-gray-700/60 text-white shadow-sm";
      case "gradient":
        return "bg-white/80 backdrop-blur-md hover:bg-white border-white/50 text-gray-900 shadow-sm";
      case "minimal":
        return "bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800 shadow-none";
      case "toss-blue":
      default:
        return "bg-white hover:bg-gray-50/80 text-gray-900 border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md";
    }
  };

  return (
    <a
      href={link.url}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="block w-full focus:outline-none"
    >
      <Card
        className={`group relative w-full p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer select-none active:scale-[0.98] ${getThemeStyles()}`}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          {link.icon && (
            <span
              className={`text-xl shrink-0 w-11 h-11 flex items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105 ${
                themePreset === "dark" ? "bg-gray-800 text-white" : "bg-gray-100/80 dark:bg-gray-800/80"
              }`}
            >
              {link.icon}
            </span>
          )}
          <div className="flex flex-col text-left min-w-0">
            <span
              className={`font-semibold text-[15px] sm:text-[16px] tracking-tight truncate group-hover:text-blue-500 transition-colors ${
                themePreset === "dark" ? "text-white" : "text-gray-900 dark:text-gray-100"
              }`}
            >
              {link.title}
            </span>
            {link.subtitle && (
              <span
                className={`text-xs truncate font-normal mt-0.5 ${
                  themePreset === "dark" ? "text-gray-300" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {link.subtitle}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {link.badge && (
            <Badge variant="tds" className="text-[11px] font-semibold px-2.5 py-0.5 shadow-none">
              {link.badge}
            </Badge>
          )}
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all opacity-60 group-hover:opacity-100" />
        </div>
      </Card>
    </a>
  );
}
