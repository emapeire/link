import { type Links } from '@/types'
import Image from 'next/image'

export function ContactCard({ title, url, icon }: Links) {
  return (
    <a
      aria-label={`${title} link`}
      key={url}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='hover:scale-110 transition-all ease-in-out'>
        <Image
          priority
          className='invert'
          alt={title}
          src={icon}
          width={32}
          height={32}
        />
      </div>
    </a>
  )
}
