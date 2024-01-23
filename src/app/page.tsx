import Image from 'next/image'
import { get } from '@vercel/edge-config'
import { redirect } from 'next/navigation'
import { LinkCard } from '@/components/link-card'
import { GitHubIcon, XIcon } from '@/components/icons'
import { type Data } from '@/types'

export default async function HomePage() {
  const data: Data | undefined = await get('linktree')

  if (!data) {
    redirect('https://linktr.ee/emapeire')
  }

  return (
    <div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
      <Image
        priority
        className='rounded-full'
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className='font-bold mt-4 mb-8 text-xl text-white'>{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className='flex items-center gap-4 mt-8 text-white'>
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {social.href.includes('x') ? (
              <XIcon />
            ) : social.href.includes('github') ? (
              <GitHubIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  )
}
