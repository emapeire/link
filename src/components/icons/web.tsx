import type { SVGProps } from 'react'

export const WebIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={`lucide lucide-app-window ${props.className ?? ''}`}
  >
    <rect x='2' y='4' width='20' height='16' rx='2' />
    <path d='M10 4v4' />
    <path d='M2 8h20' />
    <path d='M6 4v4' />
  </svg>
)
