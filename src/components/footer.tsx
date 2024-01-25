export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='text-slate-400 text-center text-sm'>
      @ {`${year}`}
    </footer>
  )
}
