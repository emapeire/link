import { type Links } from '@/types'
import Image from 'next/image'

export function SocialCard({ title, url, icon }: Links) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-1.5 w-full rounded-md hover:scale-105 transition-all bg-slate-800 mb-3.5 max-w-2xl'
    >
      <div className='flex w-full items-center'>
        <Image
          priority
          className='invert'
          alt={title}
          src={icon}
          width={40}
          height={40}
        />
        <h2 className='flex justify-center font-semibold w-full text-white -ml-10'>
          {title}
        </h2>
      </div>
    </a>
  )
}
