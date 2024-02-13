import { type Links } from '@/types'

export function SocialCard({ title, url, icon }: Links) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-1.5 w-full rounded-xl hover:scale-105 transition-all bg-white/10 hover:bg-white/20 mb-3.5 max-w-2xl'
    >
      <div className='flex w-full items-center'>
        {icon({ className: 'size-10' })}
        <h2 className='flex justify-center font-semibold w-full text-white -ml-10'>
          {title}
        </h2>
      </div>
    </a>
  )
}
