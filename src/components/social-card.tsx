import { type Links } from '@/types'
import Image from 'next/image'

export function SocialCard({ title, url, icon }: Links) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-slate-800 mb-3 max-w-3xl'
    >
      <div className='flex text-center w-full'>
        <Image
          priority
          className='invert'
          alt={title}
          src={icon}
          width={32}
          height={32}
        />
        <h2 className='flex justify-center items-center font-semibold w-full text-white -ml-10'>
          {title}
        </h2>
      </div>
    </a>
  )
}
