"use client";

import { EmbedBlock } from "@/types/mylink";

interface EmbedCardProps {
  embed: EmbedBlock;
}

export default function EmbedCard({ embed }: EmbedCardProps) {
  if (!embed.isActive) return null;

  return (
    <div className="w-full flex flex-col gap-2 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-3 shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-xs font-semibold opacity-80 px-1 text-left flex items-center gap-1.5">
        {embed.title}
      </h3>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/5">
        <iframe
          src={embed.embedUrl}
          title={embed.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}
