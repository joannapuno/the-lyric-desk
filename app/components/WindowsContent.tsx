'use client'

import { ReactNode } from 'react'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppSpinner from './AppSpinner'

type Props = {
  children: ReactNode
	title?: string
	artist?: string
  noResultFound?: boolean
  noSearchValue?: boolean
  loading?: boolean
}

export default function WindowsContent({
  children,
	title = '',
	artist = '',
  noResultFound = false,
  noSearchValue = true,
  loading = false,
}: Props) {
  const showFallback = noSearchValue || noResultFound

  return (
    <section className="grid grid-rows-[auto_1fr] 3xl:justify-self-start bg-pink-200 dark:bg-purple-400 border-2 border-purple-100 shadow-md rounded-md w-full max-w-[50rem] h-[90vh] overflow-hidden">
      <div className="flex items-center justify-between bg-purple-100 border-b-2 border-purple-100 px-3 py-2">
        <h2 className="text-2xl font-bold text-purple-900">
					{
						(children && title && artist) ? (
							<>
								<span className='capitalize'>&quot;{title}&quot; </span>by<span className='capitalize'> {artist}</span>
							</>
						) : (
							<p>. . .</p>
						)
					}
				</h2>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <AppSpinner />
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
          {/* {children} */}

					
					<p className="text-[1.25rem] whitespace-pre-wrap">
						{children}
					</p>
        </div>
      )}
    </section>
  )
}
