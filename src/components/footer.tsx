import { data } from '@/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex items-center font-medium justify-evenly text-slate-300 text-center text-xs my-16 border border-white/10 bg-white/10 shadow-lg shadow-white/10 rounded-xl md:mx-[30rem] mx-[8rem] py-3'>
      {`${year}`}
      <span>|</span>
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
