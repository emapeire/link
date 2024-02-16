import { data } from '@/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center justify-center py-4 mt-12 mb-16 w-auto font-semibold text-gray-300 text-center text-sm border border-white/5 bg-white/10 shadow-xl shadow-white/5 rounded-xl'>
      <div className='flex items-center justify-center space-x-4'>
        <span>{`${year}`}</span>
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
      </div>
    </footer>
  )
}
