export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-3xl font-bold text-white shadow-md">
          홍
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          홍길동
        </h1>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          안녕하세요! 문제 해결을 즐기며 더 나은 사용자 경험과 깔끔한 코드를 만들어가는 풀스택 개발자입니다.
        </p>
      </main>
    </div>
  );
}
