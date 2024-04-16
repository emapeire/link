import { ContactCard } from '@/components/contact-card'
import { SocialCard } from '@/components/social-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Footer } from '@/components/footer'
import { data } from '@/constants'

export default function HomePage() {
  return (
    <main className='flex items-center flex-col mx-auto w-full justify-center pt-16 px-8'>
      <a
        href='https://github.com/emapeire'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Avatar className='size-28 shadow hover:scale-105 transition-all ease-in-out duration-300'>
          <AvatarImage alt={data.name} src={data.avatar} />
          <AvatarFallback>{data.initials}</AvatarFallback>
        </Avatar>
      </a>

      <section className='flex flex-col items-center justify-center'>
        <h1 className='font-bold mt-8 mb-2 text-3xl text-white text-center'>
          {data.name}
        </h1>
        <p className='mx-auto max-w-xl px-4 text-sm font-semibold text-neutral-300 md:text-pretty text-center'>
          {data.about}
        </p>
      </section>

      <section className='flex items-center gap-6 my-8'>
        {data.contacts.map((contact) => (
          <ContactCard key={contact.url} {...contact} />
        ))}
      </section>

      <h2 className='font-semibold my-4 text-xl text-white text-center'>
        Personal Network
      </h2>
      {data.socials.map((social) => (
        <SocialCard key={social.url} {...social} />
      ))}

      <h2 className='font-semibold mt-8 mb-4 text-xl text-white text-center'>
        Community Network
      </h2>
      {data.communities.map((community) => (
        <SocialCard key={community.url} {...community} />
      ))}
      <Footer />
    </main>
  )
}
