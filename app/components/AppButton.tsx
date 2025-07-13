'use client'

import type { ButtonHTMLAttributes } from 'react'

type Props = {
  label: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function AppButton({ label, ...attrs }: Props) {
  return (
    <button
      {...attrs}
      className="bg-purple-500 text-white px-4 py-2 rounded border-2 border-purple-400 shadow-sm hover:bg-purple-600 active:translate-y-0.5 transition-all"
    >
      {label}
    </button>
  )
}
