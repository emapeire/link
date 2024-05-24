import { ModeToggle } from '@/components/mode-toggle'

export function Header() {
  return (
    <header className='absolute top-8 right-8 z-10'>
      <ModeToggle />
    </header>
  )
}
