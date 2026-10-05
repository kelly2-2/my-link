"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"links" | "projects" | "about" | "contact">("links");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [likeCount, setLikeCount] = useState(128);
  const [liked, setLiked] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gildong@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleLike = () => {
    if (!liked) {
      setLikeCount((prev) => prev + 1);
      setLiked(true);
    } else {
      setLikeCount((prev) => prev - 1);
      setLiked(false);
    }
  };

  const links = [
    {
      title: "GITHUB REPOSITORY",
      description: "오픈소스 및 개인 개발 프로젝트 코드 모음",
      url: "https://github.com",
      badge: "45 REPOS",
      bg: "bg-yellow-300 hover:bg-yellow-400",
      stickerBg: "bg-black text-yellow-300",
      icon: (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      title: "TECH BLOG (VELOG)",
      description: "개발 지식과 디버깅 기록을 공유하는 공간",
      url: "https://velog.io",
      badge: "WEEKLY",
      bg: "bg-cyan-300 hover:bg-cyan-400",
      stickerBg: "bg-black text-cyan-300",
      icon: (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
    },
    {
      title: "LINKEDIN NETWORK",
      description: "커리어 및 글로벌 비즈니스 이력",
      url: "https://linkedin.com",
      badge: "CONNECT",
      bg: "bg-pink-300 hover:bg-pink-400",
      stickerBg: "bg-black text-pink-300",
      icon: (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
        </svg>
      ),
    },
    {
      title: "PORTFOLIO WEBSITE",
      description: "인터랙티브 웹 앱 프로젝트 상세 모음",
      url: "#",
      badge: "FEATURED 🔥",
      bg: "bg-lime-300 hover:bg-lime-400",
      stickerBg: "bg-black text-lime-300",
      icon: (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      ),
    },
  ];

  const projects = [
    {
      title: "LINKCRAFT ⚡",
      category: "FULL-STACK",
      description: "네오브루탈리즘 감성의 나만의 링크 페이지를 3초 만에 생성하는 웹 플랫폼입니다.",
      tags: ["Next.js 16", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      color: "bg-yellow-200",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "SMART DASH 📊",
      category: "SAAS APP",
      description: "실시간 대용량 데이터 파이프라인을 시각화하는 고성능 브루탈리스트 대시보드입니다.",
      tags: ["React 19", "WebSockets", "Recharts"],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
      color: "bg-cyan-200",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "AI COPILOT 🤖",
      category: "AI ENGINE",
      description: "자연어 프롬프트를 직관적인 웹 인터페이스 컴포넌트로 자동 변환해주는 AI 코딩 도구입니다.",
      tags: ["Next.js", "OpenAI API", "Tailwind v4"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      color: "bg-pink-200",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const skills = [
    { name: "React 19 / Next.js 16", level: "EXPERT ⚡", bg: "bg-yellow-300" },
    { name: "TypeScript", level: "PRO 🎯", bg: "bg-cyan-300" },
    { name: "Tailwind CSS v4", level: "NINJA 🥷", bg: "bg-pink-300" },
    { name: "Node.js / Express", level: "ADVANCED 🚀", bg: "bg-lime-300" },
    { name: "PostgreSQL & Prisma", level: "SKILLED 💾", bg: "bg-purple-300" },
    { name: "Git & Docker Workflow", level: "READY 📦", bg: "bg-orange-300" },
  ];

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-black font-sans selection:bg-black selection:text-yellow-300">
      
      {/* Top Floating Neo-Stickers Header */}
      <div className="mx-auto max-w-4xl mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 border-3 border-black bg-yellow-300 px-4 py-1.5 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] -rotate-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse border border-black" />
          <span>NEOBRUTALISM EDITION 💥</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 border-3 border-black px-4 py-1.5 text-xs sm:text-sm font-black uppercase shadow-[3px_3px_0px_0px_#000] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${
              liked ? "bg-pink-400 text-black" : "bg-white hover:bg-pink-200"
            }`}
          >
            <span>👍 LIKES</span>
            <span className="border-2 border-black bg-black text-white px-2 py-0.5 rounded-none text-xs">
              {likeCount}
            </span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="border-3 border-black bg-cyan-300 hover:bg-cyan-400 px-4 py-1.5 text-xs sm:text-sm font-black uppercase shadow-[3px_3px_0px_0px_#000] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            {copiedEmail ? "COPIED! 🎉" : "COPY EMAIL ✉️"}
          </button>
        </div>
      </div>

      {/* Main Neobrutalist Container */}
      <main className="mx-auto max-w-4xl border-4 border-black bg-white shadow-[10px_10px_0px_0px_#000] sm:shadow-[14px_14px_0px_0px_#000] rounded-none overflow-hidden">
        
        {/* Banner Cover */}
        <div className="relative h-44 sm:h-60 w-full border-b-4 border-black bg-yellow-300 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
            alt="네오브루탈리즘 커버 아트"
            fill
            priority
            className="object-cover object-center opacity-90 filter contrast-125"
          />
          <div className="absolute inset-0 bg-yellow-400/20 mix-blend-multiply" />
          
          {/* Cover Decorative Sticker Labels */}
          <div className="absolute top-4 left-4 border-3 border-black bg-black px-3 py-1 font-black text-xs text-yellow-300 shadow-[3px_3px_0px_0px_#fff] rotate-2">
            HELLO WORLD! 👋
          </div>
          <div className="absolute bottom-4 right-4 border-3 border-black bg-pink-400 px-3 py-1 font-black text-xs text-black shadow-[3px_3px_0px_0px_#000] -rotate-2">
            FULL-STACK DEV 🚀
          </div>
        </div>

        {/* Profile Card Header Info */}
        <div className="p-6 sm:p-10 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-24 mb-6 gap-6">
            
            {/* Avatar Photo Frame */}
            <div className="relative">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 border-4 border-black bg-yellow-300 shadow-[6px_6px_0px_0px_#000] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="홍길동 네오브루탈리즘 프로필"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 border-3 border-black bg-lime-400 px-2.5 py-1 text-xs font-black uppercase text-black shadow-[2px_2px_0px_0px_#000] rotate-3">
                AVAILABLE ⚡
              </div>
            </div>

            {/* Brutalist Stat Cards */}
            <div className="grid grid-cols-3 gap-3 w-full sm:w-auto">
              <div className="border-3 border-black bg-yellow-300 p-2.5 sm:p-3 text-center shadow-[4px_4px_0px_0px_#000] -rotate-1">
                <span className="block text-xl sm:text-2xl font-black">5+ YRS</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">EXPERIENCE</span>
              </div>
              <div className="border-3 border-black bg-pink-300 p-2.5 sm:p-3 text-center shadow-[4px_4px_0px_0px_#000] rotate-1">
                <span className="block text-xl sm:text-2xl font-black">40+</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">PROJECTS</span>
              </div>
              <div className="border-3 border-black bg-cyan-300 p-2.5 sm:p-3 text-center shadow-[4px_4px_0px_0px_#000] -rotate-1">
                <span className="block text-xl sm:text-2xl font-black">100%</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">HAPPY CODE</span>
              </div>
            </div>
          </div>

          {/* Name & Tagline */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-black">
                홍길동 <span className="text-xl sm:text-3xl text-slate-700">(GILDONG HONG)</span>
              </h1>
              <span className="border-3 border-black bg-purple-300 px-3 py-1 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000]">
                SENIOR ENGINEER
              </span>
            </div>
            
            <p className="text-base sm:text-lg font-bold leading-relaxed text-black border-l-4 border-black pl-4 py-1 bg-yellow-100/60">
              ⚡ 사용자 경험을 압도하는 강렬한 UI/UX와 확장성 높은 코드를 구현하는 개발자입니다. 직관적이고 도전적인 웹 서비스를 좋아합니다.
            </p>

            {/* Quick Meta Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="border-2 border-black bg-white px-3 py-1 text-xs font-extrabold uppercase shadow-[2px_2px_0px_0px_#000]">
                📍 SEOUL, KOREA
              </span>
              <span className="border-2 border-black bg-white px-3 py-1 text-xs font-extrabold uppercase shadow-[2px_2px_0px_0px_#000]">
                💼 FREELANCE & FULL-TIME
              </span>
              <span className="border-2 border-black bg-white px-3 py-1 text-xs font-extrabold uppercase shadow-[2px_2px_0px_0px_#000]">
                ✉️ GILDONG@EXAMPLE.COM
              </span>
            </div>
          </div>

          {/* Brutalist Navigation Tabs */}
          <div className="mt-10 border-b-4 border-black pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: "links", label: "🔗 LINKS", color: "bg-yellow-300 hover:bg-yellow-400" },
                { id: "projects", label: "⚡ PROJECTS", color: "bg-pink-300 hover:bg-pink-400" },
                { id: "about", label: "🧠 ABOUT", color: "bg-lime-300 hover:bg-lime-400" },
                { id: "contact", label: "✉️ CONTACT", color: "bg-cyan-300 hover:bg-cyan-400" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`border-3 border-black py-3 px-4 text-center text-sm font-black uppercase shadow-[4px_4px_0px_0px_#000] transition-all ${
                    activeTab === tab.id
                      ? "bg-black text-white translate-x-1 translate-y-1 shadow-none"
                      : `${tab.color} text-black active:translate-x-1 active:translate-y-1 active:shadow-none`
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="mt-8">
            
            {/* TAB 1: Links */}
            {activeTab === "links" && (
              <div className="grid gap-5 sm:grid-cols-2">
                {links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center gap-4 border-3 border-black ${link.bg} p-4 sm:p-5 shadow-[5px_5px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border-3 border-black bg-white shadow-[2px_2px_0px_0px_#000]">
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-black uppercase text-black truncate">
                          {link.title}
                        </h3>
                        <span className={`border border-black ${link.stickerBg} px-2 py-0.5 text-[10px] font-black uppercase shadow-[1px_1px_0px_0px_#000]`}>
                          {link.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-bold text-slate-900 truncate">
                        {link.description}
                      </p>
                    </div>
                    <span className="text-lg font-black group-hover:translate-x-1 transition-transform">
                      ➔
                    </span>
                  </a>
                ))}
              </div>
            )}

            {/* TAB 2: Projects */}
            {activeTab === "projects" && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className={`border-3 border-black ${proj.color} p-4 shadow-[6px_6px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between`}
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative h-44 w-full border-3 border-black bg-white shadow-[3px_3px_0px_0px_#000] overflow-hidden mb-4">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover filter contrast-110"
                        />
                        <div className="absolute top-2 left-2 border-2 border-black bg-black px-2 py-0.5 text-[10px] font-black text-white uppercase">
                          {proj.category}
                        </div>
                      </div>

                      <h3 className="text-lg font-black text-black uppercase">
                        {proj.title}
                      </h3>
                      <p className="mt-2 text-xs font-bold text-slate-900 leading-relaxed">
                        {proj.description}
                      </p>

                      {/* Tag Badges */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {proj.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="border border-black bg-white px-2 py-0.5 text-[10px] font-black text-black shadow-[1px_1px_0px_0px_#000]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Link Buttons */}
                    <div className="mt-6 flex items-center gap-2 pt-3 border-t-2 border-black">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border-2 border-black bg-white hover:bg-black hover:text-white px-3 py-1.5 text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                      >
                        CODE ➔
                      </a>
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border-2 border-black bg-yellow-300 hover:bg-yellow-400 px-3 py-1.5 text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                      >
                        DEMO 🚀
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: About & Skills */}
            {activeTab === "about" && (
              <div className="space-y-6">
                <div className="border-3 border-black bg-yellow-200 p-5 shadow-[6px_6px_0px_0px_#000]">
                  <h3 className="text-xl font-black uppercase text-black flex items-center gap-2 mb-2">
                    <span>👾</span> WHO AM I?
                  </h3>
                  <p className="text-sm font-bold leading-relaxed text-black">
                    안녕하세요! 저는 코드를 예술처럼 다듬고 사용자 경험을 극대화하는 것을 좋아하는 풀스택 개발자 홍길동입니다. 웹 인터페이스 디자인부터 백엔드 분산 시스템 구축까지 빠르고 견고한 제품을 만듭니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-black uppercase text-black mb-4">
                    ⚡ TECH STACK & SKILLS
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`border-3 border-black ${skill.bg} p-3.5 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between`}
                      >
                        <span className="text-sm font-black uppercase text-black">
                          {skill.name}
                        </span>
                        <span className="mt-2 inline-block self-start border border-black bg-black text-white px-2 py-0.5 text-[10px] font-black">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Contact Form */}
            {activeTab === "contact" && (
              <div className="border-3 border-black bg-pink-200 p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000]">
                <h3 className="text-2xl font-black uppercase text-black mb-1">
                  SEND A MESSAGE ✉️
                </h3>
                <p className="text-xs font-bold text-black mb-6">
                  프로젝트 외주, 개발 협업, 멘토링 문의 등 편하게 메시지를 남겨주세요!
                </p>

                <form onSubmit={(e) => { e.preventDefault(); alert("🚀 메시지가 성공적으로 전송되었습니다!"); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase text-black mb-1">
                        YOUR NAME / COMPANY
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="NAME HERE"
                        className="w-full border-3 border-black bg-white px-4 py-3 text-sm font-bold text-black shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-yellow-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-black mb-1">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="NAME@EMAIL.COM"
                        className="w-full border-3 border-black bg-white px-4 py-3 text-sm font-bold text-black shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-yellow-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-black mb-1">
                      MESSAGE CONTENT
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="TYPE YOUR MESSAGE HERE..."
                      className="w-full border-3 border-black bg-white px-4 py-3 text-sm font-bold text-black shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-yellow-100 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto border-3 border-black bg-black hover:bg-yellow-300 hover:text-black text-white px-8 py-3.5 text-sm font-black uppercase tracking-wider shadow-[5px_5px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                  >
                    SEND MESSAGE 🚀
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>

        {/* Footer Banner */}
        <footer className="border-t-4 border-black bg-yellow-300 px-6 py-4 text-center font-black text-xs uppercase tracking-wider text-black">
          © 2026 GILDONG HONG • BUILT WITH NEXT.JS 16 & NEOBRUTALISM ⚡
        </footer>
      </main>
    </div>
  );
}
