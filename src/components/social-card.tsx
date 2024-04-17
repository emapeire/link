import { type Links } from '@/types'

export function SocialCard({ title, url, icon }: Links) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-2 w-full border shadow rounded-lg hover:scale-105 transition-all ease-in-out duration-300 dark:bg-black/90 bg-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-800 mb-4 max-w-lg'
    >
      <div className='flex w-full items-center'>
        {icon({ className: 'size-8' })}
        <h2 className='flex justify-center font-semibold font-mono w-full dark:text-white text-black -ml-10'>
          {title}
        </h2>
      </div>
    </a>
  )
}
