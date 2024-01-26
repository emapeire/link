import { data } from '@/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='text-slate-400 text-center text-xs mb-2'>
      {`${year}`}{' '}
      <span className='hover:underline hover:text-blue-400'>
        <a
          href={data.socials[1]?.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          @emapeire
        </a>
      </span>
    </footer>
  )
}
