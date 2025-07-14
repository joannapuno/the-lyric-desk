'use client'

import { ReactNode } from 'react'
import { faFolderOpen, faCopy } from '@fortawesome/free-regular-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppSpinner from './AppSpinner'
import AppButtonIcon from './AppButtonIcon'

type Props = {
  children: ReactNode
  onCopy: () => void
  isCopied?: boolean
  title?: string
  artist?: string
  noResultFound?: boolean
  noSearchValue?: boolean
  loading?: boolean
  error?: string
}

export default function WindowsContent({
  children,
  title = '',
  artist = '',
  noResultFound = false,
  noSearchValue = true,
  loading = false,
  onCopy = () => {},
  isCopied = false,
  error = '',
}: Props) {
  const showFallback = noSearchValue || noResultFound

  return (
    <section className="grid grid-rows-[auto_1fr] 3xl:justify-self-start bg-pink-200 dark:bg-purple-400 border-2 border-purple-100 shadow-md rounded-md w-full max-w-[50rem] h-[90vh] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-purple-100 border-b-2 border-purple-100 px-4 py-2">
        <h2 className="text-2xl font-bold text-purple-900">
          {!showFallback ? (
            <>
              <span className="capitalize">&quot;{title}&quot; </span>by
              <span className="capitalize"> {artist}</span>
            </>
          ) : (
            <FontAwesomeIcon icon={faMusic} size="1x" />
          )}
        </h2>

        {children && title && artist && (
          <AppButtonIcon
            label={isCopied ? 'Copied!' : 'Copy'}
            showLabel
            onClick={onCopy}
            icon={faCopy}
            className="cursor-pointer text-pink-500"
          />
        )}
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <AppSpinner />
        </div>
      ) : error ? (
        <div className="flex flex-col justify-center items-center p-4 text-center text-purple-900 text-[1.3rem]">
          <p>A hiccup in the harmony.</p>
          <p>Let&apos;s rewind and retry.</p>
        </div>
      ) : showFallback ? (
        <div className="flex flex-col justify-center items-center p-4 overflow-y-auto scrollbar text-purple-900 text-[1.3rem] text-center">
          {noSearchValue && (
            <>
              <FontAwesomeIcon icon={faFolderOpen} size="5x" className="mb-5 text-white" />
              <p>The station is silent.</p>
              <p>Select your song and artist.</p>
            </>
          )}
          {noResultFound && (
            <>
              <p>The melody whispered, but no words replied.</p>
              <p>Make sure the title and artist are in harmony.</p>
            </>
          )}
        </div>
      ) : (
        <div className="text-purple-900 p-4 overflow-y-auto h-[90vh] scrollbar">
          <p className="text-[1.25rem] whitespace-pre-wrap">{children}</p>
        </div>
      )}
    </section>
  )
}
