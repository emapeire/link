import type { SVGProps } from 'react'

export const ResumeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={`lucide lucide-file-text ${props.className ?? ''}`}
  >
    <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' />
    <path d='M14 2v4a2 2 0 0 0 2 2h4' />
    <path d='M10 9H8' />
    <path d='M16 13H8' />
    <path d='M16 17H8' />
  </svg>
)
