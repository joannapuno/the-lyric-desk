// components/AppInput.tsx
'use client'

import { InputHTMLAttributes } from 'react'

type AppInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export default function AppInput({ label, ...props }: AppInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-bold uppercase">{label}</label>}
      <input
        {...props}
        className="bg-pink-100 border-2 border-purple-400 text-purple-900 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-purple-300"
      />
    </div>
  )
}
