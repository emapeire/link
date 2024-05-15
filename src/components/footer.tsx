export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex items-center justify-center mb-8 mt-24 mx-auto w-full'>
      <div className='flex items-center justify-center space-x-4 font-medium dark:text-neutral-300 text-neutral-800 text-sm'>
        <p>
          © {year}
          <span className='ms-2 me-2'>•</span>
          <a
            href='https://emapeire.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:underline-offset-4'
          >
            Emanuel Peire
          </a>
          <span className='ms-2 me-2'>—</span>
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
