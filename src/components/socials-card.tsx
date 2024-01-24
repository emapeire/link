import { type Links } from '@/types'

export function SocialsCard({ title, url, icon }: Links) {
  return (
    <a
      aria-label={`${title} link`}
      key={url}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon()}
    </a>
  )
}
