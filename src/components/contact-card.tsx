import { type Links } from '@/types'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function ContactCard({ title, url, icon }: Links) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          aria-label={`${title} link`}
          key={url}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='transition-all ease-in-out shadow border rounded-lg p-2 dark:bg-black/90 bg-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-800'
        >
          {icon({ className: 'h-[1.5rem] w-[1.5rem]' })}
        </a>
      </TooltipTrigger>
      <TooltipContent side='bottom'>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}
