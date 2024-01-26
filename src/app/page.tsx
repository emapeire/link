import { ContactCard } from '@/components/contact-card'
import { SocialCard } from '@/components/social-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { data } from '@/constants'

export default function HomePage() {
  return (
    <main className='flex items-center flex-col mx-auto w-full justify-center mt-16 mb-8 px-8'>
      <Avatar className='h-28 w-28'>
        <AvatarImage alt={data.name} src={data.avatar} />
        <AvatarFallback>{data.initials}</AvatarFallback>
      </Avatar>

      <section className='flex flex-col text-center text-white'>
        <h1 className='font-bold mt-8 mb-2 text-xl'>{data.name}</h1>
        <p className='mx-auto max-w-xl px-4 text-sm font-semibold text-slate-400'>
          {data.about}
        </p>
      </section>

      <section className='flex items-center gap-6 my-8'>
        {data.contacts.map((social) => (
          <ContactCard key={social.url} {...social} />
        ))}
      </section>

      {data.socials.map((contact) => (
        <SocialCard key={contact.url} {...contact} />
      ))}
    </main>
  )
}
