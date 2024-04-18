'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { CopyIcon, CheckIcon } from 'lucide-react'
import { Button } from './ui/button'
import { type Links } from '@/types'

export function CopyToClipboard({ url }: { url: Links['url'] }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true)
        toast.success('Copied to clipboard.')
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      })
      .catch((error) => {
        if (error) toast.error('Error copying to clipboard.')
      })
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      className='size-4 disabled:opacity-100 disabled:cursor-not-allowed'
      onClick={copyToClipboard}
      disabled={copied}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}
