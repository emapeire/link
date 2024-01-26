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
      className='hover:scale-110 transition-all ease-in-out'
    >
      <Image
        priority
        className='invert'
        alt={title}
        src={icon}
        width={30}
        height={30}
      />
    </a>
  )
}
