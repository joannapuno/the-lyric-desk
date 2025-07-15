// components/AppInput.tsx
'use client'

import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputHTMLAttributes } from 'react'

type AppInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  leadingIcon?: IconDefinition
}

export default function AppInput({ label, leadingIcon, ...props }: AppInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className='flex items-center gap-2'>
        {leadingIcon && <FontAwesomeIcon icon={leadingIcon} />}
        {label && <label className="font-bold uppercase">{label}</label>}
      </div>
      <input
        {...props}
        className="bg-pink-100 border-2 border-purple-400 text-purple-900 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-purple-300"
      />
    </div>
  )
}
