"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");
  const [pollChoice, setPollChoice] = useState("GBA");
  const [pollSubmitted, setPollSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"news" | "games" | "systems" | "links">("news");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gildong@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const newsItems = [
    {
      title: "Game Boy Advance Launches Worldwide with Record Hits!",
      category: "HARDWARE",
      date: "JUN 2001",
      url: "#",
    },
    {
      title: "Super Mario Advance: New Worlds & Classic Action Unveiled",
      category: "GAMES",
      date: "MAY 2001",
      url: "#",
    },
    {
      title: "Nintendo GameCube Official Hardware Specifications Released",
      category: "SYSTEMS",
      date: "MAY 2001",
      url: "#",
    },
    {
      title: "Pokémon Crystal Version Announced for Game Boy Color",
      category: "ANNOUNCEMENT",
      date: "APR 2001",
      url: "#",
    },
  ];

  const featuredSites = [
    {
      name: "Pokémon Official",
      url: "www.pokemon.com",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Zelda Universe",
      url: "www.zelda.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mario World",
      url: "www.mario.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "My-Link Hub",
      url: "www.my-link.com",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const profileLinks = [
    {
      name: "GITHUB REPOSITORY",
      desc: "45 Open Source & Personal Repos",
      url: "https://github.com",
      badge: "CODE",
    },
    {
      name: "TECH BLOG (VELOG)",
      desc: "Weekly Frontend & Hardware Notes",
      url: "https://velog.io",
      badge: "BLOG",
    },
    {
      name: "LINKEDIN NETWORK",
      desc: "Connect for Global Engineering",
      url: "https://linkedin.com",
      badge: "PRO",
    },
    {
      name: "MY-LINK PORTFOLIO",
      desc: "Interactive Console Apps & Demos",
      url: "#",
      badge: "STAR 🔥",
    },
  ];

  return (
    <div className="min-h-screen bg-[#7a8aba] text-[#21242e] font-sans p-2 sm:p-4 lg:p-6 select-none">
      {/* Outer Console Frame Container */}
      <div className="mx-auto max-w-[840px]">
        
        {/* MASTHEAD: Mario Mascot + Speech Bubble & Search Module */}
        <header className="mb-2 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
          
          {/* Mario Mascot & Speech Bubble */}
          <div className="flex items-center gap-3">
            {/* Mario Mascot Graphic Icon */}
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 beveled-plate bg-[#dedede] rounded-full p-1 overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                alt="Mario Mascot"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Welcome Speech Bubble */}
            <div className="relative border-2 border-[#3d4f97] bg-white px-3.5 py-1.5 rounded-2xl shadow-sm">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-[#3d4f97]" />
              <p className="text-xs font-bold text-[#21242e]">
                Welcome to <span className="font-extrabold text-[#e60012]">Nintendo.com</span>! 🎮
              </p>
              <p className="text-[10px] text-[#3d4f97] font-semibold">
                Circa 2001 Console Hardware Edition
              </p>
            </div>
          </div>

          {/* Search Input Module */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Games, Systems..."
              className="recessed-inset bg-white px-2.5 py-1 text-xs text-[#21242e] placeholder-[#60619c] font-medium outline-none w-full sm:w-44"
            />
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="border border-[#21242e] bg-white px-2 py-1 text-xs font-bold text-[#21242e] outline-none"
            >
              <option value="All">All</option>
              <option value="Games">Games</option>
              <option value="Systems">Systems</option>
              <option value="CodeBank">Code Bank</option>
            </select>
            <button
              onClick={() => alert(`Searching for: ${searchQuery}`)}
              className="beveled-chip bg-[#ecab37] hover:bg-[#e48600] text-[#21242e] px-3 py-1 text-xs font-black uppercase tracking-wider"
            >
              GO
            </button>
          </div>
        </header>

        {/* MAIN CONSOLE FACEPLATE */}
        <div className="beveled-plate bg-[#7a8aba] p-2 sm:p-3 space-y-2">

          {/* 1. DUAL NAVIGATION LAYER */}
          {/* Primary Carbon Command Nav Bar */}
          <div className="halftone-carbon border-b-2 border-[#3d4f97] p-2 flex flex-col md:flex-row items-center justify-between gap-2.5">
            
            {/* Nintendo Racetrack Logo Pill */}
            <div className="flex items-center gap-3">
              <div className="bg-white px-3.5 py-1 rounded-full border-2 border-[#e60012] shadow-sm shrink-0">
                <span className="font-black text-sm tracking-tight text-[#e60012] italic">
                  Nintendo<span className="text-[10px] not-italic ml-0.5">®</span>
                </span>
              </div>

              {/* Primary Nav Menu Words (Nav Gold) */}
              <nav className="flex items-center gap-3 sm:gap-5">
                {["GAMES", "SYSTEMS", "NEWS", "NSIDER", "DOWNLOADS"].map((menu) => (
                  <button
                    key={menu}
                    onClick={() => setActiveTab(menu.toLowerCase() as typeof activeTab)}
                    className="text-xs font-extrabold uppercase tracking-wider text-[#e48600] hover:text-[#f68d1f] transition-colors"
                  >
                    {menu}
                  </button>
                ))}
              </nav>
            </div>

            {/* Utility Chips (Amber) */}
            <div className="flex items-center gap-2">
              <button className="beveled-chip bg-[#ecab37] text-[#21242e] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider flex items-center gap-1">
                <span>🔑</span> CODE BANK
              </button>
              <button className="beveled-chip bg-[#ecab37] text-[#21242e] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider flex items-center gap-1">
                <span>🎯</span> GAME FINDER
              </button>
            </div>
          </div>

          {/* Secondary Subnav Strip (Pale Sky) */}
          <div className="bg-[#9fbee7] border-b-2 border-[#3d4f97] px-3 py-1 flex items-center justify-between text-[11px] font-bold text-[#21242e] overflow-x-auto whitespace-nowrap scrollbar-none">
            <div className="flex items-center gap-3">
              <span className="hover:underline cursor-pointer">PARENTS</span>
              <span>|</span>
              <span className="hover:underline cursor-pointer">CUSTOMER SERVICE</span>
              <span>|</span>
              <span className="hover:underline cursor-pointer">CORPORATE</span>
              <span>|</span>
              <span className="hover:underline cursor-pointer">GLOBAL</span>
              <span>|</span>
              <span className="hover:underline cursor-pointer">PRIVACY</span>
              <span>|</span>
              <span className="hover:underline cursor-pointer">MY-LINK STORE</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="text-[#e60012] hover:underline font-extrabold ml-4"
            >
              {copiedEmail ? "EMAIL COPIED! ✓" : "CONTACT US ✉️"}
            </button>
          </div>

          {/* 2. HERO FIELD PANEL */}
          <div className="relative border-2 border-[#3d4f97] bg-[#acace7] p-4 sm:p-6 overflow-hidden shadow-inner">
            {/* Background Product Image */}
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
              alt="Hero Box Art"
              fill
              priority
              className="object-cover opacity-30 mix-blend-multiply filter contrast-125"
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-md">
                <span className="inline-block bg-[#f68d1f] text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-widest mb-1 shadow-sm">
                  NEW SYSTEM RELEASE
                </span>
                <h1 className="box-art-title text-3xl sm:text-4xl tracking-tight leading-none mb-2">
                  GAME BOY ADVANCE & MY-LINK
                </h1>
                <p className="text-xs sm:text-sm font-bold text-[#21242e] leading-snug drop-shadow-sm">
                  Gorgeous 32-bit graphics, stereo sound, and full backward compatibility. Experience portable power redefined!
                </p>
              </div>

              {/* Forward Action Disc Button */}
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <span className="block text-[11px] font-black text-[#21242e] uppercase">LEARN MORE</span>
                  <span className="text-[10px] text-[#3d4f97] font-extrabold uppercase">GET SYSTEM INFO</span>
                </div>
                <button
                  onClick={() => alert("Launching Game Boy Advance System Hub...")}
                  className="h-11 w-11 rounded-full bg-[#f68d1f] hover:bg-[#e48600] border-2 border-[#21242e] flex items-center justify-center text-white text-lg font-black shadow-md transition-transform active:scale-95"
                >
                  ➔
                </button>
              </div>
            </div>
          </div>

          {/* 3. MAIN BODY GRID: Left Rotated Tabs + 2-Column Content Split */}
          <div className="flex flex-col md:flex-row gap-3">
            
            {/* Left Rotated Section Rail */}
            <div className="hidden md:flex flex-col gap-1.5 w-7 shrink-0 pt-1">
              {[
                { label: "TOP TEN", bg: "bg-[#21242e] text-[#9fbee7]" },
                { label: "RENTALS", bg: "bg-[#21242e] text-[#ecab37]" },
                { label: "CHOICE", bg: "bg-[#21242e] text-[#f68d1f]" },
                { label: "ESRB", bg: "bg-[#21242e] text-white" },
              ].map((tab, idx) => (
                <div
                  key={idx}
                  className={`${tab.bg} py-3 px-0.5 text-[9px] font-black tracking-widest text-center border-l-2 border-t-2 border-[#3d4f97] cursor-pointer hover:opacity-90 writing-vertical`}
                >
                  {tab.label}
                </div>
              ))}
            </div>

            {/* Center Content Column (2/3 Width) */}
            <div className="flex-1 space-y-3 min-w-0">
              
              {/* SECTION A: Official News */}
              <div className="beveled-plate bg-[#8ba1d4] p-2 space-y-1.5">
                <div className="bg-[#7a8aba] border-b border-[#3d4f97] px-2 py-1 flex items-center justify-between text-xs font-black uppercase text-[#21242e]">
                  <span>≡ OFFICIAL NEWS & ANNOUNCEMENTS</span>
                  <span className="text-[10px] text-[#3d4f97]">UPDATED DAILY</span>
                </div>

                <div className="space-y-1">
                  {newsItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="recessed-inset bg-[#dedede] p-2 flex items-center justify-between gap-2 hover:bg-white transition-colors"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="bg-[#21242e] text-white px-1.5 py-0.5 text-[9px] font-black shrink-0">
                          {item.category}
                        </span>
                        <a
                          href={item.url}
                          className="text-xs font-extrabold text-[#3d4f97] hover:text-[#e60012] truncate"
                        >
                          {item.title}
                        </a>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold text-[#60619c] hidden sm:inline">
                          {item.date}
                        </span>
                        <div className="h-4 w-4 rounded-xs bg-[#f68d1f] flex items-center justify-center text-white text-[10px] font-black">
                          ›
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION B: Featured Sites 2x2 Grid */}
              <div className="beveled-plate bg-[#8ba1d4] p-2 space-y-1.5">
                <div className="bg-[#7a8aba] border-b border-[#3d4f97] px-2 py-1 text-xs font-black uppercase text-[#21242e]">
                  ≡ FEATURED OFFICIAL NETWORK SITES
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {featuredSites.map((site, idx) => (
                    <a
                      key={idx}
                      href={`https://${site.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="halftone-carbon border-2 border-[#3d4f97] p-1.5 flex items-center gap-2.5 group hover:border-[#f68d1f] transition-all"
                    >
                      <div className="relative h-11 w-16 shrink-0 border border-[#9fbee7] bg-[#7a8aba] overflow-hidden">
                        <Image
                          src={site.image}
                          alt={site.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-black text-white group-hover:text-[#ecab37] truncate">
                          {site.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#9fbee7] truncate block">
                          {site.url}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* SECTION C: My-Link Quick Connections */}
              <div className="beveled-plate bg-[#8ba1d4] p-2 space-y-1.5">
                <div className="bg-[#7a8aba] border-b border-[#3d4f97] px-2 py-1 text-xs font-black uppercase text-[#21242e]">
                  ≡ DEVELOPER PROFILE & CONNECTIONS
                </div>

                <div className="grid sm:grid-cols-2 gap-2">
                  {profileLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border-2 border-[#3d4f97] p-2 flex items-center justify-between hover:bg-[#dedede] transition-colors"
                    >
                      <div>
                        <span className="block text-xs font-black text-[#21242e]">
                          {link.name}
                        </span>
                        <span className="text-[10px] text-[#60619c] font-semibold">
                          {link.desc}
                        </span>
                      </div>
                      <span className="bg-[#ecab37] text-[#21242e] border border-[#21242e] px-1.5 py-0.5 text-[9px] font-black">
                        {link.badge}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Action Rail (1/3 Width) */}
            <div className="w-full md:w-64 space-y-3 shrink-0">
              
              {/* Right Action Buttons Slabs */}
              <div className="space-y-1.5">
                {[
                  { label: "MY-LINK MEMBER LOGIN", icon: "🔑", bg: "hover:bg-[#3d4f97]" },
                  { label: "NSIDER NEWSLETTER", icon: "✉️", bg: "hover:bg-[#3d4f97]" },
                  { label: "DOWNLOAD CENTER", icon: "💾", bg: "hover:bg-[#3d4f97]" },
                  { label: "TECH SUPPORT & FAQ", icon: "❓", bg: "hover:bg-[#3d4f97]" },
                ].map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => alert(`Opening ${btn.label}...`)}
                    className={`w-full halftone-carbon text-white border-2 border-[#3d4f97] px-3 py-2 text-xs font-black uppercase tracking-wider flex items-center justify-between ${btn.bg} active:translate-y-0.5 transition-all`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{btn.icon}</span>
                      <span>{btn.label}</span>
                    </span>
                    <span className="text-[#f68d1f]">➔</span>
                  </button>
                ))}
              </div>

              {/* Player's Poll Module */}
              <div className="beveled-plate bg-[#8ba1d4] p-3 space-y-2">
                <div className="bg-[#ecab37] border border-[#21242e] px-2 py-0.5 text-[11px] font-black uppercase text-[#21242e]">
                  POLL: NINTENDO SYSTEM CHOICE
                </div>

                <p className="text-xs font-extrabold text-[#21242e] leading-snug">
                  Which system are you spending the most game time on this month?
                </p>

                <div className="space-y-1.5 pt-1">
                  {[
                    { id: "GBA", label: "Game Boy Advance (32-Bit)" },
                    { id: "N64", label: "Nintendo 64" },
                    { id: "NGC", label: "Nintendo GameCube" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center gap-2 text-xs font-bold text-[#21242e] cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="poll"
                        value={option.id}
                        checked={pollChoice === option.id}
                        onChange={(e) => setPollChoice(e.target.value)}
                        className="accent-[#f68d1f]"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={() => setPollSubmitted(true)}
                  className="w-full beveled-chip bg-[#f68d1f] hover:bg-[#e48600] text-white py-1.5 text-xs font-black uppercase tracking-wider mt-2 shadow-sm"
                >
                  {pollSubmitted ? "VOTE RECORDED! ✓" : "SUBMIT VOTE"}
                </button>
              </div>

              {/* "What Is — Game Finder" Info Box */}
              <div className="bg-white border-2 border-[#3d4f97] p-3 space-y-1.5">
                <div className="bg-[#ecab37] border border-[#21242e] px-2 py-0.5 text-[10px] font-black uppercase text-[#21242e]">
                  WHAT IS GAME FINDER?
                </div>
                <p className="text-xs font-bold text-[#21242e] leading-relaxed">
                  Search over 500+ official Nintendo 64 and Game Boy Advance titles by genre, release date, and ESRB rating.
                </p>
              </div>

              {/* Side Promo Card */}
              <div className="bg-[#acace7] border-2 border-[#3d4f97] p-3 text-center space-y-2">
                <span className="text-[10px] font-black uppercase text-[#e60012] bg-white border border-[#e60012] px-2 py-0.5 inline-block">
                  RECOMMENDED HARDWARE
                </span>
                <h4 className="box-art-title text-xl leading-none">
                  NINTENDO 64
                </h4>
                <p className="text-[11px] font-extrabold text-[#21242e]">
                  Experience revolutionary 3D gaming with 4-player multiplayer action built-in.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* FOOTER BAR: Carbon Chamfered Slab */}
        <footer className="mt-2 halftone-carbon border-2 border-[#3d4f97] p-3 sm:p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          
          <div className="space-y-1">
            <p className="text-[11px] font-mono text-[#9fbee7]">
              © 1997–2001 Nintendo / My-Link. All Rights Reserved.
            </p>
            <p className="text-[10px] text-[#8ba1d4]">
              Nintendo 64, Game Boy Advance, and Nintendo GameCube are trademarks of Nintendo.
            </p>
          </div>

          {/* ESRB Badges & Rating */}
          <div className="flex items-center gap-3">
            <div className="bg-[#ecab37] border border-[#21242e] px-2 py-1 text-[10px] font-black text-[#21242e] rounded-xs uppercase">
              ESRB — PRIVACY CERTIFIED
            </div>
            <div className="bg-white border-2 border-[#21242e] px-2 py-0.5 font-black text-sm text-[#21242e]">
              EVERYONE [E]
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
