'use client'

import type { ButtonHTMLAttributes } from 'react'

type Props = {
  label: string
  type?: 'button' | 'submit'
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function AppButton({ label, type = 'button', disabled, ...attrs }: Props) {
  const baseStyles =
    'px-4 py-2 rounded border-2 border-purple-400 text-white shadow-sm transition-all'
  const enabledStyles =
    'bg-purple-500 hover:bg-purple-600 active:translate-y-0.5 cursor-pointer'
  const disabledStyles = 'bg-purple-500 opacity-50 cursor-not-allowed'

  return (
    <button
      {...attrs}
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${disabled ? disabledStyles : enabledStyles}`}
    >
      {label}
    </button>
  )
}