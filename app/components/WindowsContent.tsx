'use client'

import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export default function WindowsContent({ title, children }: Props) {
  return (
    <section className="bg-pink-200 dark:bg-purple-400 border-2 border-purple-100 shadow-md rounded-md max-w-2xl overflow-hidden">
      <div className="flex items-center justify-between bg-purple-100 border-b-2 border-purple-100 px-3 py-2">
        <h2 className="text-2xl font-bold text-purple-900">{title}</h2>
      </div>

      <div className="p-4 text-[1.5rem] whitespace-pre-wrap text-purple-900 overflow-y-auto max-h-[90vh] scrollbar">
        {children || 'No Lyrics'}
      </div>
    </section>
  )
}
