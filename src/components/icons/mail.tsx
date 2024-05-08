import type { SVGProps } from 'react'

export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
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
    className={`lucide lucide-mail ${props.className ?? ''}`}
  >
    <rect width='20' height='16' x='2' y='4' rx='2' />
    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
  </svg>
)
