"use client"

import { useState, useEffect } from "react"
import { fetchLyrics } from "@/lib/lyrics"
import LyricsContainer from "./components/LyricsContainer"
import AppButtonIcon from "./components/AppButtonIcon"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import AppLink from "./components/AppLink"
import { faCloudSun, faCloudMoon } from "@fortawesome/free-solid-svg-icons"
import TitleArtistForm from "./components/TitleArtistForm"

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [artist, setArtist] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const [lyrics, setLyrics] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [noSearchValue, setNoSearchValue] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)
  
  const noResultFound = error !== ""
  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault()
    setLoading(true)
    setCopied(false)
    setLyrics("")
    setError("")
    setNoSearchValue(false)

    try {
      const data = await fetchLyrics(artist, title)
      setLyrics(data)
    } catch {
      setError("Lyrics not found")
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

  const toggleThemeMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.body.classList.remove(theme)
    document.body.classList.add(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.body.classList.add(initialTheme)
  }, [])

  return (
    <main className="py-2 px-[2rem]">
      <div className='flex gap-4'>
        <AppButtonIcon 
          label="Switch Mode" 
          icon={(theme === "dark" ? faCloudSun : faCloudMoon)} 
          className="cursor-pointer"
          onClick={toggleThemeMode} />
        <AppLink 
          label="Github Repository"
          title='Github Repository'
          href="https://github.com/joannapuno/the-lyric-desk" 
          icon={faGithub} 
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer" />
      </div>
      <div className='grid py-4 1xl:py-0 1xl:grid-cols-2 gap-[5rem] justify-items-center items-center'>
        <section className="w-full max-w-[30rem] 3xl:justify-self-end">
          <h1 className="text-6xl mb-5">The Lyric Desk</h1>
          <TitleArtistForm
            title={title}
            artist={artist}
            setTitle={setTitle}
            setArtist={setArtist}
            handleSubmit={handleSubmit}
          />
        </section>

        <LyricsContainer
          title={title}
          artist={artist}
          onCopy={copyToClipboard}
          isCopied={copied}
          noResultFound={noResultFound}
          noSearchValue={noSearchValue}
          loading={loading}
        >
          {lyrics}
        </LyricsContainer>
      </div>

      <AppLink 
        label="Using Lyrics.ovh by Basile Bruneau"
        title='API Link'
        showLabel
        href="https://lyricsovh.docs.apiary.io/#" 
        className="cursor-pointer"
        target="_blank"
        rel="noopener noreferrer" />
    </main>
  )
}
