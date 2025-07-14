import type { Metadata } from "next"
import { VT323 } from "next/font/google"
import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

// Preload fontawesome style to prevent fauc
config.autoAddCss = false
const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-vt323",
})

export const metadata: Metadata = {
  title: "The Lyric Desk",
  description: "A quiet typewriter for loud hearts.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
