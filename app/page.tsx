'use client'

import { useState, MouseEvent } from 'react'
import { fetchLyrics } from '@/lib/lyrics'
import AppInput from './components/AppInput'
import AppButton from './components/AppButton'
import WindowsContent from './components/WindowsContent'

export default function Home() {
  const [artist, setArtist] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [lyrics, setLyrics] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)
  const [noSearchValue, setNoSearchValue] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)

  const noResultFound = !lyrics && !!(artist || title) && !!error

  const onClick = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    setLoading(true)
    setCopied(false)
    setLyrics('')
    setError('')
    setNoSearchValue(false)

    try {
      const data = await fetchLyrics(artist, title)
      setLyrics(data)
    } catch {
      setError('Lyrics not found')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(lyrics)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main className="h-screen grid 1xl:grid-cols-2 gap-[5rem] justify-items-center items-center px-[2rem]">
      <section className="w-full max-w-[30rem] 3xl:justify-self-end">
        <h1 className="text-6xl mb-5">The Lyric Desk</h1>
        <form className="flex flex-col gap-[1rem]">
          <AppInput
            label="Song Title"
            placeholder="Mr. Brightside"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <AppInput
            label="Artist / Band"
            placeholder="The Killers"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <AppButton
            label="Show Lyrics"
            onClick={onClick}
            disabled={!title || !artist}
          />
        </form>
      </section>

      <WindowsContent
        title={title}
        artist={artist}
        onCopy={copyToClipboard}
        isCopied={copied}
        noResultFound={noResultFound}
        noSearchValue={noSearchValue}
        loading={loading}
        error={error}
      >
        {lyrics}
      </WindowsContent>
    </main>
  )
}
