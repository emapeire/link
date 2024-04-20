export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex items-center justify-center mb-8 mt-24 mx-auto w-full'>
      <div className='flex items-center justify-center space-x-4 font-medium dark:text-neutral-300 text-neutral-800 text-sm'>
        <span>© {year}</span>
        <span>—</span>
        <section>
          <span>By</span>{' '}
          <span className='hover:text-neutral-900 dark:hover:text-neutral-100 transition-all'>
            <a
              href='https://x.com/emapeire'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline underline-offset-4'
            >
              @emapeire
            </a>
          </span>
        </section>
      </div>
    </footer>
  )
}
