import { type Links } from '@/types'

export function SocialCard({ title, url, icon }: Links) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-2 w-full border shadow rounded-lg hover:scale-105 transition-all ease-in-out duration-300 bg-neutral-800/30 hover:bg-neutral-800 mb-4 max-w-lg'
    >
      <div className='flex w-full items-center'>
        {icon({ className: 'size-8' })}
        <h2 className='flex justify-center font-semibold font-mono w-full text-white -ml-10'>
          {title}
        </h2>
      </div>
    </a>
  )
}
