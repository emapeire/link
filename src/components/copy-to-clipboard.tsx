'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { CopyIcon, CheckIcon } from 'lucide-react'
import { type Links } from '@/types'

export function CopyToClipboard({ url }: { url: Links['url'] }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true)
        console.log('Copied to clipboard')
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      })
      .catch((error) => {
        console.error('Error copying to clipboard', error)
      })
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      className='size-4'
      onClick={copyToClipboard}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}
