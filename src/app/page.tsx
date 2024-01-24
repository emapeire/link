import Image from 'next/image'
import { LinkCard } from '@/components/link-card'
import { LINKS_DATA } from '@/data/LINKS_DATA'
import { type Data } from '@/types'
// import { get } from '@vercel/edge-config'
// import { redirect } from 'next/navigation'

export default function HomePage() {
  // const data: Data | undefined = await get('linktree')
  // if (!data) {
  //   redirect('https://linktr.ee/emapeire')
  // }

  const data: Data = LINKS_DATA

  return (
    <main>
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
        {data.contact.map((contact) => (
          <LinkCard key={contact.url} {...contact} />
        ))}
        <div className='flex items-center gap-4 mt-8 text-white'>
          {data.socials.map((social) => (
            <a
              aria-label={`${social.title} link`}
              key={social.url}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
