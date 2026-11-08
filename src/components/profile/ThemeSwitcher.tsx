"use client";

import { useProfileStore } from "@/store/useProfileStore";
import { ThemeConfig } from "@/types/mylink";
import { Palette } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { profile, setThemePreset } = useProfileStore();

  const themes: { id: ThemeConfig["preset"]; label: string; bgClass: string }[] = [
    { id: "toss-blue", label: "Toss Blue", bgClass: "bg-[#3182F6]" },
    { id: "dark", label: "Modern Dark", bgClass: "bg-gray-900" },
    { id: "gradient", label: "Soft Pink", bgClass: "bg-gradient-to-r from-pink-300 to-purple-400" },
    { id: "minimal", label: "Minimal White", bgClass: "bg-gray-100 border border-gray-300" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2">
      <div className="flex items-center gap-1 text-xs font-semibold opacity-70 pr-1 border-r border-gray-200 dark:border-gray-700">
        <Palette className="w-3.5 h-3.5 text-[#3182F6]" />
        <span className="hidden sm:inline">테마 시연:</span>
      </div>
      <div className="flex items-center gap-1.5">
        {themes.map((t) => (
          <Button
            key={t.id}
            variant="ghost"
            size="xs"
            onClick={() => setThemePreset(t.id)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 h-7 cursor-pointer ${
              profile.theme.preset === t.id
                ? "bg-[#3182F6] text-white shadow-sm scale-105 hover:bg-[#1B64DA] hover:text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${t.bgClass}`} />
            {t.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
