"use client"

import { SizeProp } from "@fortawesome/fontawesome-svg-core"
import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { ButtonHTMLAttributes } from "react"

type AppButtonIconProps = {
  label: string
  icon: IconDefinition
  showLabel?:boolean
  size?: SizeProp
  iconClass?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function AppButtonIcon({ label, icon, showLabel = false, size = "1x", iconClass = "", ...attrs }: AppButtonIconProps) {
  return (
    <button
      aria-label={label}
      {...attrs}
      className={`flex items-center gap-2 text-[1.3rem] ${attrs.className}`}
    >
      <FontAwesomeIcon icon={icon} size={size} className={iconClass}/>
      {showLabel && <p className='text-[1.3rem]'>{label}</p>}
    </button>
  )
}