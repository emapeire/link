import { ModeToggle } from '@/components/mode-toggle'

export function Header() {
  return (
    <header className='fixed top-6 right-6 z-10'>
      <ModeToggle />
    </header>
  )
}
