'use client'

import { useState } from 'react'
import { fetchLyrics } from '@/lib/lyrics'

export default function Home() {
  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')
  const [lyrics, setLyrics] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const onClick = async () => {
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
    <div>
      <input
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button onClick={onClick}>Get Lyrics</button>

      {error && <p>{error}</p>}

      {lyrics && (
        <div>
          <pre>{lyrics}</pre>
          <button onClick={copyToClipboard}>
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
      )}
    </div>
  )
}
