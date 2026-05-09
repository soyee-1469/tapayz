"use client";

import { FormEvent } from "react";

export default function LoginPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="min-h-[calc(100vh-1px)] bg-zinc-100 py-16 text-zinc-900">
      <div className="mx-auto w-full max-w-md px-4">
        <div className="rounded-2xl border border-zinc-200 bg-white px-8 py-10 shadow-sm">
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight">로그인</h1>
            <p className="mt-2 text-sm text-zinc-500">
              Anytap 계정으로 로그인하세요
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-zinc-700"
              >
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none ring-[#2E86FF] transition placeholder:text-zinc-400 focus:border-[#2E86FF] focus:ring-2"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-700"
                >
                  비밀번호
                </label>
                <button
                  type="button"
                  className="text-sm font-medium text-[#2E86FF] hover:text-[#2E86FF]/90"
                >
                  비밀번호 찾기
                </button>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none ring-[#2E86FF] transition placeholder:text-zinc-400 focus:border-[#2E86FF] focus:ring-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-zinc-300 text-[#2E86FF] focus:ring-[#2E86FF]"
              />
              <label htmlFor="remember" className="text-sm text-zinc-600">
                로그인 상태 유지
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#2E86FF] py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2E86FF]/90"
            >
              로그인
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-zinc-500">
            계정이 없으신가요?{" "}
            <button
              type="button"
              className="font-semibold text-[#2E86FF] hover:text-[#2E86FF]/90"
            >
              회원가입
            </button>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-400">
          데모 페이지입니다. 실제 인증은 연결되어 있지 않습니다.
        </p>
      </div>
    </div>
  );
}
