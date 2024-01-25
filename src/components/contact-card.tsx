import Image from 'next/image'
import { type Links } from '@/types'

export function ContactCard({ title, url, icon }: Links) {
  return (
    <a
      aria-label={`${title} link`}
      key={url}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        priority
        className='invert'
        alt={title}
        src={icon}
        width={32}
        height={32}
      />
    </a>
  )
}
