import Image from 'next/image'
import { type Data } from '@/types'
import { LINKS_DATA } from '@/data/links_data'
import { ContactCard } from '@/components/contact-card'
import { SocialsCard } from '@/components/socials-card'

export default function HomePage() {
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
        <h3 className='flex items-center gap-4 text-white'>{data.about}</h3>
        {data.contacts.map((contact) => (
          <ContactCard key={contact.url} {...contact} />
        ))}
        <div className='flex items-center gap-4 mt-8 text-white'>
          {data.socials.map((social) => (
            <SocialsCard key={social.url} {...social} />
          ))}
        </div>
      </div>
    </main>
  )
}
