"use client";

import { LinkBlock, ThemeConfig } from "@/types/mylink";
import { ExternalLink } from "lucide-react";

interface LinkButtonProps {
  link: LinkBlock;
  themePreset?: ThemeConfig["preset"];
}

export default function LinkButton({ link, themePreset }: LinkButtonProps) {
  if (!link.isActive) return null;

  // 버튼 테두리 및 배경 스타일
  const getButtonStyles = () => {
    switch (themePreset) {
      case "dark":
        return "bg-gray-800/90 hover:bg-gray-700 text-white border-gray-700 shadow-md";
      case "gradient":
        return "bg-white/80 backdrop-blur-md hover:bg-white text-gray-900 border-white/40 shadow-sm";
      case "minimal":
        return "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100";
      case "toss-blue":
      default:
        return "bg-white hover:bg-gray-50 text-gray-900 border-gray-100 shadow-sm hover:shadow-md";
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-full p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 active:scale-[0.98] ${getButtonStyles()}`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        {link.icon && (
          <span className="text-xl flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform">
            {link.icon}
          </span>
        )}
        <div className="flex flex-col text-left overflow-hidden">
          <span className="font-semibold text-base tracking-tight truncate group-hover:text-blue-500 transition-colors">
            {link.title}
          </span>
          {link.subtitle && (
            <span className="text-xs opacity-70 truncate font-normal">
              {link.subtitle}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {link.badge && (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
            {link.badge}
          </span>
        )}
        <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-500" />
      </div>
    </a>
  );
}
