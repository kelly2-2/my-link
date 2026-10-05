"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"links" | "projects" | "about" | "contact">("links");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gildong@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const links = [
    {
      title: "GitHub 저장소",
      description: "오픈소스 프로젝트와 개인 코딩 작업물",
      url: "https://github.com",
      badge: "45 Repos",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
      gradient: "from-gray-900 to-gray-800 text-white dark:from-zinc-800 dark:to-zinc-900",
    },
    {
      title: "기술 블로그 (Velog)",
      description: "개발 모험기와 학습 노하우를 정리하는 공간",
      url: "https://velog.io",
      badge: "매주 업데이트",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      gradient: "from-teal-600 to-emerald-600 text-white",
    },
    {
      title: "LinkedIn 프로필",
      description: "경력 사항 및 비즈니스 네트워크",
      url: "https://linkedin.com",
      badge: "Connect",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
        </svg>
      ),
      gradient: "from-blue-600 to-sky-600 text-white",
    },
    {
      title: "온라인 포트폴리오",
      description: "디자인과 개발 프로젝트의 상세 기록",
      url: "#",
      badge: "Featured",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      ),
      gradient: "from-indigo-600 to-purple-600 text-white",
    },
  ];

  const projects = [
    {
      title: "LinkCraft (링크 통합 빌더)",
      category: "Full-Stack Web App",
      description: "개인 프로필과 모바일 맞춤형 링크 페이지를 손쉽게 커스텀하고 관리할 수 있는 서비스입니다.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "SmartDash (실시간 대시보드)",
      category: "SaaS Application",
      description: "실시간 데이터 시각화와 커스텀 위젯 조립을 지원하는 차세대 반응형 관리자 파이프라인입니다.",
      tags: ["React 19", "Recharts", "Node.js", "WebSockets"],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "AI Co-pilot (코드 생성 도우미)",
      category: "AI Service",
      description: "자연어 명령으로 프론트엔드 컴포넌트를 즉시 시각화하고 코드를 생성해주는 웹 툴킷입니다.",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const skills = [
    { name: "React / Next.js", level: "Senior", category: "Frontend" },
    { name: "TypeScript", level: "Advanced", category: "Language" },
    { name: "Tailwind CSS", level: "Expert", category: "Styling" },
    { name: "Node.js / Express", level: "Intermediate", category: "Backend" },
    { name: "PostgreSQL / Prisma", level: "Intermediate", category: "Database" },
    { name: "Git / Docker", level: "Proficient", category: "DevOps" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white dark:bg-slate-950 dark:text-slate-100">
      {/* Background decoration grid & gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/15" />
        <div className="absolute top-60 -right-40 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-600/15" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Card Main Container */}
        <main className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90">
          
          {/* Banner Header Image */}
          <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
              alt="프로필 커버 배경 이미지"
              fill
              priority
              className="object-cover object-center opacity-85 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Quick Action Top Bar */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-white/30 active:scale-95"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {copiedEmail ? "이메일 복사완료!" : "이메일 문의"}
              </button>
            </div>
          </div>

          {/* Profile Header Details */}
          <div className="relative px-6 pb-6 pt-0 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 sm:-mt-20 mb-6 gap-4">
              
              {/* Profile Avatar Image with Indicator */}
              <div className="relative flex-shrink-0">
                <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full border-4 border-white bg-slate-100 shadow-md overflow-hidden dark:border-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                    alt="홍길동 프로필 이미지"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Live Availability Badge */}
                <div className="absolute bottom-1 right-1 flex items-center gap-1 rounded-full border border-white bg-emerald-500 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow dark:border-slate-900">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                  </span>
                  <span>구직중</span>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="flex items-center gap-4 sm:gap-6 self-start sm:self-auto py-2">
                <div className="text-center sm:text-right">
                  <span className="block text-xl font-bold text-slate-900 dark:text-white">5+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">개발 경력</span>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
                <div className="text-center sm:text-right">
                  <span className="block text-xl font-bold text-slate-900 dark:text-white">40+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">완료 프로젝트</span>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
                <div className="text-center sm:text-right">
                  <span className="block text-xl font-bold text-slate-900 dark:text-white">100%</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">고객 만족도</span>
                </div>
              </div>
            </div>

            {/* Profile Intro Info */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  홍길동 <span className="text-base font-normal text-slate-500 dark:text-slate-400">(Gildong Hong)</span>
                </h1>
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20">
                  Full-Stack Engineer
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
                사용자 경험을 최우선으로 생각하는 프론트엔드 중심 풀스택 개발자입니다. 복잡한 문제를 직관적이고 아름다운 웹 서비스로 풀어내는 일에서 큰 보람을 느낍니다.
              </p>

              {/* Location & Contact Meta Pills */}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  서울특별시, 대한민국
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  외주 & 이직 협의 가능
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  gildong@example.com
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-8 border-b border-slate-200 dark:border-slate-800">
              <nav className="flex space-x-6 overflow-x-auto pb-px scrollbar-none" aria-label="Tabs">
                {[
                  { id: "links", label: "주요 링크", count: links.length },
                  { id: "projects", label: "프로젝트", count: projects.length },
                  { id: "about", label: "소개 & 스택" },
                  { id: "contact", label: "문의하기" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`whitespace-nowrap py-3 px-1 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400"
                        : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                    {tab.count !== undefined && (
                      <span className={`rounded-full px-2 py-0.5 text-xs ${
                        activeTab === tab.id
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Contents */}
            <div className="mt-6">
              {/* TAB 1: Links */}
              {activeTab === "links" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500"
                    >
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${link.gradient} shadow-md transition-transform group-hover:scale-110`}>
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                            {link.title}
                          </h3>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                            {link.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 truncate">
                          {link.description}
                        </p>
                      </div>
                      <svg className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
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
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="rounded-full bg-slate-900/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white">
                            {proj.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {proj.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {proj.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {proj.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold">
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1"
                          >
                            Code ↗
                          </a>
                          <a
                            href={proj.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1"
                          >
                            Live Demo 🚀
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: About & Tech Stack */}
              {activeTab === "about" && (
                <div className="space-y-6">
                  {/* Bio Card */}
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>👋</span> 안녕하세요, 홍길동입니다!
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-300">
                      저는 프론트엔드와 백엔드를 넘나들며 사용자 친화적인 웹 플랫폼을 만드는 개발자입니다. Clean Code와 빠른 웹 성능, 반응형 UI 디자인에 관심이 높으며, 팀 커뮤니케이션과 지식 공유를 소중하게 생각합니다.
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                      기술 스택 및 역량
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
                        >
                          <div>
                            <span className="block text-xs font-bold text-slate-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">
                              {skill.category}
                            </span>
                          </div>
                          <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-300">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Contact */}
              {activeTab === "contact" && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    메시지 보내기 ✉️
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    프로젝트 제안, 외주 문의, 잡 오퍼 등 궁금한 점이 있으시다면 언제든 연락주세요.
                  </p>

                  <form onSubmit={(e) => { e.preventDefault(); alert("메시지가 성공적으로 전송되었습니다!"); }} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          성함 / 회사명
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="홍길동"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          회신받을 이메일
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="example@domain.com"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        문의 내용
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="문의하실 내용이나 프로젝트 요구사항을 입력해 주세요."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-95"
                    >
                      메시지 전송
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>

          {/* Footer */}
          <footer className="border-t border-slate-100 bg-slate-50/50 px-6 py-4 text-center text-xs text-slate-500 dark:border-slate-800/80 dark:bg-slate-900/50 dark:text-slate-400">
            © 2026 홍길동. Designed & Built with Next.js & Tailwind CSS.
          </footer>
        </main>
      </div>
    </div>
  );
}
