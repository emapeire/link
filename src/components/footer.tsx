export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center justify-center mb-8 mt-28 mx-auto w-full max-w-[16rem] font-semibold text-neutral-300 text-center text-xs'>
      <div className='flex items-center justify-center space-x-6'>
        <span>{`${year}`}</span>
        <span>|</span>
        <section>
          <span>By</span>{' '}
          <span className='hover:underline hover:text-blue-600'>
            <a
              href='https://x.com/emapeire'
              target='_blank'
              rel='noopener noreferrer'
            >
              @emapeire
            </a>
          </span>
        </section>
      </div>
    </footer>
  )
}
