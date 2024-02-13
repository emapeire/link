import { data } from '@/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex items-center font-semibold justify-evenly text-slate-300 text-center text-xs mt-12 mb-16 border border-white/5 bg-white/10 shadow-lg shadow-white/5 rounded-xl md:mx-[30rem] mx-[8rem] py-4'>
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
