'use client'

export default function AppSpinner() {
  return (
    <div>
      <div className="flex items-center justify-center gap-5 mb-5">
        <span className="w-4 h-4 rounded-full bg-purple-100 animate-bounce" />
        <span className="w-4 h-4 rounded-full bg-purple-100 animate-pulse" />
        <span className="w-4 h-4 rounded-full bg-purple-100 animate-bounce" />
      </div>
      <p className="text-purple-100 text-[1.3rem] text-center">Typing out the verses…</p>
    </div>
  )
}
