import { ContactCard } from '@/components/contact-card'
import { SocialCard } from '@/components/social-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { data } from '@/constants'

export default function HomePage() {
  return (
    <main className='flex items-center flex-col mx-auto w-full justify-center my-16 px-8'>
      <Avatar className='size-32 shadow-lg shadow-white/10'>
        <AvatarImage alt={data.name} src={data.avatar} />
        <AvatarFallback>{data.initials}</AvatarFallback>
      </Avatar>

      <section className='flex flex-col items-center justify-center'>
        <h1 className='font-bold mt-8 mb-2 text-2xl text-white text-center'>
          {data.name}
        </h1>
        <p className='mx-auto max-w-xl px-4 text-base font-semibold text-slate-300 md:text-pretty text-center'>
          {data.about}
        </p>
      </section>

      <section className='flex items-center gap-8 my-8'>
        {data.contacts.map((contact) => (
          <ContactCard key={contact.url} {...contact} />
        ))}
      </section>

      {data.socials.map((social) => (
        <SocialCard key={social.url} {...social} />
      ))}
    </main>
  )
}
