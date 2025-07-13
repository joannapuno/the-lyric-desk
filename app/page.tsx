'use client'

import { useState } from 'react'
import { fetchLyrics } from '@/lib/lyrics'
import AppInput from './components/AppInput'
import AppButton from './components/AppButton'
import WindowsContent from './components/WindowsContent'

export default function Home() {
  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')
  const [lyrics, setLyrics] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const onClick = async (evt) => {
    evt.preventDefault()

    setCopied(false)
    setLyrics('')
    setError('')
    try {
      const data = await fetchLyrics(artist, title)
      setLyrics(data)
    } catch {
      setError('Lyrics not found')
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
    <main className='h-full grid grid-cols-2 justify-center'>
      {/* Form */}
      <section>
        <h1 className='text-6xl'>The Lyric Desk</h1>
        <form>
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
          <AppButton label="Show Lyrics" onClick={onClick} />
        </form>
      </section>

      <WindowsContent title={`"${title}" by ${artist || 'Unknown Artist'}`}>
        {lyrics}
      </WindowsContent>


      {/* TODO: handle laterz */}
      {/* {error && <p>{error}</p>} */}
    </main>
  )
}
