"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"links" | "projects" | "about" | "contact">("links");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(128);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gildong@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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
      title: "GitHub 저장소",
      subtitle: "오픈소스 및 프론트엔드 프로젝트 코드",
      url: "https://github.com",
      badge: "45개 Repos",
      icon: "🐙",
      accentBg: "bg-[#191f28]",
      accentText: "text-white",
    },
    {
      title: "기술 블로그 (Velog)",
      subtitle: "개발 아티클과 디버깅 기록을 공유해요",
      url: "https://velog.io",
      badge: "매주 작성",
      icon: "📝",
      accentBg: "bg-[#10b981]/10",
      accentText: "text-[#10b981]",
    },
    {
      title: "LinkedIn 프로필",
      subtitle: "글로벌 비즈니스 및 커리어 이력",
      url: "https://linkedin.com",
      badge: "일촌 맺기",
      icon: "💼",
      accentBg: "bg-[#3182f6]/10",
      accentText: "text-[#3182f6]",
    },
    {
      title: "온라인 포트폴리오",
      subtitle: "인터랙티브 웹 서비스 상세 프로젝트 모음",
      url: "#",
      badge: "대표 사이트",
      icon: "✨",
      accentBg: "bg-[#ffc342]/20",
      accentText: "text-[#191f28]",
    },
  ];

  const projects = [
    {
      title: "LinkCraft (링크 통합 빌더)",
      category: "웹 서비스",
      description: "나만의 맞춤형 프로필과 링크 페이지를 3초 만에 커스텀하고 관리하는 서비스예요.",
      tags: ["Next.js 16", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SmartDash (실시간 대시보드)",
      category: "SaaS 플랫폼",
      description: "대용량 금융 파이프라인과 잔액 데이터를 한눈에 시각화해주는 대시보드예요.",
      tags: ["React 19", "WebSockets", "Recharts"],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI Co-pilot (UI 자동 생성기)",
      category: "AI 엔진",
      description: "자연어 프롬프트를 직관적인 웹 인터페이스 컴포넌트로 자동 구현해주는 AI 툴킷이에요.",
      tags: ["Next.js", "OpenAI API", "TDS UI"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const skills = [
    { name: "React / Next.js", exp: "5년차", level: "전문가" },
    { name: "TypeScript", exp: "4년차", level: "숙련" },
    { name: "Tailwind CSS / TDS", exp: "4년차", level: "전문가" },
    { name: "Node.js / Express", exp: "3년차", level: "활용가능" },
    { name: "PostgreSQL / Prisma", exp: "3년차", level: "활용가능" },
    { name: "Git & Docker", exp: "4년차", level: "숙련" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f6] text-[#191f28] pb-28">
      
      {/* TDS Top App Bar (56pt) */}
      <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between bg-white/80 px-4 backdrop-blur-md border-b border-[#e5e8eb]">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3182f6] text-xs font-bold text-white">
            t
          </div>
          <span className="text-base font-bold tracking-tight text-[#191f28]">
            홍길동의 프로필
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              liked
                ? "bg-[#f04452]/10 text-[#f04452]"
                : "bg-[#f2f4f6] text-[#4e5968] hover:bg-[#e5e8eb]"
            }`}
          >
            <span>❤️</span>
            <span>{likeCount}</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="rounded-full bg-[#e8f3ff] px-3 py-1 text-xs font-semibold text-[#3182f6] hover:bg-[#3182f6]/15 transition-colors"
          >
            {copiedEmail ? "복사완료!" : "이메일 공유"}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-xl px-4 pt-4 space-y-4">
        
        {/* Profile Main Card */}
        <section className="overflow-hidden rounded-[24px] bg-white p-6 shadow-sm border border-[#e5e8eb]">
          <div className="flex items-start justify-between gap-4">
            
            {/* Avatar & Online Badge */}
            <div className="relative">
              <div className="relative h-20 w-20 overflow-hidden rounded-[20px] bg-[#f2f4f6] border border-[#e5e8eb]">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="홍길동 프로필 이미지"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full bg-[#3182f6] px-2 py-0.5 text-[11px] font-bold text-white shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                <span>구직 중</span>
              </div>
            </div>

            {/* Profile Stats */}
            <div className="flex items-center gap-4 text-right pt-1">
              <div>
                <span className="block text-lg font-bold text-[#191f28]">5년차</span>
                <span className="text-xs text-[#8b95a1]">개발 경력</span>
              </div>
              <div className="h-6 w-px bg-[#e5e8eb]" />
              <div>
                <span className="block text-lg font-bold text-[#191f28]">40+</span>
                <span className="text-xs text-[#8b95a1]">프로젝트</span>
              </div>
            </div>
          </div>

          {/* Profile Name & Tagline */}
          <div className="mt-5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-[#191f28]">
                홍길동
              </h1>
              <span className="rounded-full bg-[#e8f3ff] px-2.5 py-0.5 text-xs font-semibold text-[#3182f6]">
                풀스택 엔지니어
              </span>
            </div>

            <p className="mt-2 text-base text-[#4e5968] leading-relaxed">
              사용자 경험을 최우선으로 생각하는 프론트엔드 중심 개발자예요. 복잡한 문제를 깔끔한 코드로 풀어내는 일에 보람을 느껴요.
            </p>

            {/* Meta Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-[#6b7684]">
              <span className="rounded-md bg-[#f2f4f6] px-2.5 py-1 text-[#4e5968]">
                📍 서울특별시
              </span>
              <span className="rounded-md bg-[#f2f4f6] px-2.5 py-1 text-[#4e5968]">
                💼 외주 & 이직 협의 가능
              </span>
              <span className="rounded-md bg-[#f2f4f6] px-2.5 py-1 text-[#4e5968]">
                ✉️ gildong@example.com
              </span>
            </div>
          </div>
        </section>

        {/* TDS Segmented Control Navigation Tabs */}
        <section className="rounded-full bg-[#e5e8eb] p-1 flex items-center justify-between">
          {[
            { id: "links", label: "주요 링크" },
            { id: "projects", label: "프로젝트" },
            { id: "about", label: "소개·스택" },
            { id: "contact", label: "문의하기" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 rounded-full py-2 text-xs font-bold transition-all text-center ${
                activeTab === tab.id
                  ? "bg-white text-[#191f28] shadow-sm"
                  : "text-[#6b7684] hover:text-[#191f28]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </section>

        {/* TAB 1: Links (TDS ListRows) */}
        {activeTab === "links" && (
          <section className="rounded-[24px] bg-white p-2 shadow-sm border border-[#e5e8eb] divide-y divide-[#f2f4f6]">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 hover:bg-[#f9fafb] rounded-[16px] transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] ${link.accentBg} text-lg font-bold shadow-xs`}>
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#191f28] truncate">
                        {link.title}
                      </h3>
                      <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${link.accentBg} ${link.accentText}`}>
                        {link.badge}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-[#6b7684] truncate">
                      {link.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-[#b0b8c1] group-hover:text-[#3182f6] group-hover:translate-x-0.5 transition-all">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </section>
        )}

        {/* TAB 2: Projects (TDS Product Cards) */}
        {activeTab === "projects" && (
          <section className="space-y-3">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-[24px] bg-white p-4 shadow-sm border border-[#e5e8eb]"
              >
                <div className="relative h-44 w-full overflow-hidden rounded-[16px] bg-[#f2f4f6]">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-[#191f28]/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                    {proj.category}
                  </div>
                </div>

                <div className="mt-3.5">
                  <h3 className="text-lg font-bold text-[#191f28]">
                    {proj.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#4e5968] leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md bg-[#f2f4f6] px-2 py-0.5 text-[11px] font-medium text-[#4e5968]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* TAB 3: About & Skills */}
        {activeTab === "about" && (
          <section className="space-y-3">
            <div className="rounded-[24px] bg-white p-5 shadow-sm border border-[#e5e8eb]">
              <h3 className="text-base font-bold text-[#191f28] flex items-center gap-1.5">
                <span>👋</span> 안녕하세요!
              </h3>
              <p className="mt-2 text-sm text-[#4e5968] leading-relaxed">
                저는 웹과 모바일 환경 모두에서 빠르고 직관적인 인터페이스를 구현하는 것을 좋아해요. 토스 디자인 시스템(TDS)처럼 사용자 부담을 줄이고 핵심 가치를 명확히 전달하는 서비스를 지향해요.
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-5 shadow-sm border border-[#e5e8eb]">
              <h3 className="text-base font-bold text-[#191f28] mb-3">
                보유 기술 스택
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="rounded-[16px] bg-[#f9fafb] p-3 border border-[#e5e8eb]"
                  >
                    <span className="block text-xs font-bold text-[#191f28]">
                      {skill.name}
                    </span>
                    <div className="mt-1 flex items-center justify-between text-[11px]">
                      <span className="text-[#8b95a1]">{skill.exp}</span>
                      <span className="rounded-md bg-[#e8f3ff] px-1.5 py-0.5 font-semibold text-[#3182f6]">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: Contact Form */}
        {activeTab === "contact" && (
          <section className="rounded-[24px] bg-white p-5 shadow-sm border border-[#e5e8eb]">
            <h3 className="text-lg font-bold text-[#191f28] mb-1">
              메시지 남기기 ✉️
            </h3>
            <p className="text-xs text-[#6b7684] mb-5">
              궁금한 내용이나 프로젝트 문의가 있으시다면 편하게 남겨주세요.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("메시지가 성공적으로 전달되었어요!"); }} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#333d4b] mb-1">
                  성함 / 회사명
                </label>
                <input
                  type="text"
                  required
                  placeholder="성함을 입력해 주세요"
                  className="w-full rounded-[12px] bg-[#f2f4f6] px-3.5 py-3 text-sm text-[#191f28] placeholder-[#8b95a1] outline-none border border-transparent focus:border-[#3182f6] focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333d4b] mb-1">
                  회신받을 이메일
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@toss.im"
                  className="w-full rounded-[12px] bg-[#f2f4f6] px-3.5 py-3 text-sm text-[#191f28] placeholder-[#8b95a1] outline-none border border-transparent focus:border-[#3182f6] focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333d4b] mb-1">
                  문의 내용
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="문의하실 내용을 편하게 적어주세요."
                  className="w-full rounded-[12px] bg-[#f2f4f6] px-3.5 py-3 text-sm text-[#191f28] placeholder-[#8b95a1] outline-none border border-transparent focus:border-[#3182f6] focus:bg-white transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-[16px] bg-[#3182f6] py-3.5 text-sm font-bold text-white shadow-xs hover:bg-[#1b64da] transition-colors"
              >
                메시지 보내기
              </button>
            </form>
          </section>
        )}

      </main>

      {/* TDS Sticky Bottom CTA (56pt Height with Gradient Protection Mask) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bottom-cta-protection">
        <div className="mx-auto max-w-xl">
          <button
            onClick={handleCopyEmail}
            className="w-full h-14 rounded-[16px] bg-[#3182f6] hover:bg-[#1b64da] text-white font-bold text-base shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <span>{copiedEmail ? "이메일 주소가 복사되었어요! ✓" : "홍길동과 커뮤니케이션하기"}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
