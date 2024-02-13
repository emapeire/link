import { type Links } from '@/types'

export function ContactCard({ title, url, icon }: Links) {
  return (
    <a
      aria-label={`${title} link`}
      key={url}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='hover:scale-105 transition-all ease-in-out shadow-xl shadow-white/5 border border-white/5 rounded-xl p-2 bg-white/10 hover:bg-white/20'
    >
      {icon({ className: 'size-8' })}
    </a>
  )
}
