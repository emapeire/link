import { type Links } from '@/types'

export function ContactCard({ title, url, icon }: Links) {
  return (
    <a
      aria-label={`${title} link`}
      key={url}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='hover:scale-105 transition-all ease-in-out duration-300 shadow border rounded-lg p-1.5 bg-neutral-800/30 hover:bg-neutral-800'
    >
      {icon({ className: 'size-8' })}
    </a>
  )
}
