"use client"

import { SizeProp } from "@fortawesome/fontawesome-svg-core"
import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { AnchorHTMLAttributes } from "react"

type AppLinkProps = {
  label: string
  href: string
  icon?: IconDefinition
  showLabel?:boolean
  size?: SizeProp
  iconClass?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function AppLink({ label, href, icon, showLabel = false, size = "1x", iconClass = "", ...attrs }: AppLinkProps) {
  return (
    <a
      {...attrs}
      href={href}
      aria-label={label}
      className={`flex items-center gap-2 text-[1.3rem] ${attrs.className}`}
    >
      {icon && <FontAwesomeIcon icon={icon} size={size} className={iconClass}/>}
      {showLabel && <p className='text-[1.3rem]'>{label}</p>}
    </a>
  )
}