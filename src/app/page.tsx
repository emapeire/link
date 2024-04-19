import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '@/components/mode-toggle'
import { ButtonContact } from '@/components/button-contact'
import { SocialCard } from '@/components/social-card'
import { data } from '@/constants'

export default function HomePage() {
  return (
    <main className='flex items-center flex-col mx-auto w-full justify-center pt-16 px-8'>
      <a
        href='https://github.com/emapeire'
        target='_blank'
        rel='noopener noreferrer'
        className='rounded-full'
      >
        <Avatar className='size-28 shadow border'>
          <AvatarImage alt={data.name} src={data.avatar} />
          <AvatarFallback className='font-mono font-bold'>
            {data.initials}
          </AvatarFallback>
        </Avatar>
      </a>

      <section className='flex flex-col items-center justify-center'>
        <div className='flex gap-4 justify-center items-center mt-8 mb-4'>
          <h1 className='font-bold text-3xl dark:text-white text-black text-center'>
            {data.name}
          </h1>
          <ModeToggle />
        </div>
        <p className='mx-auto max-w-lg px-4 text-sm font-mono font-semibold dark:text-neutral-300 text-neutral-700 md:text-pretty text-center'>
          {data.about}
        </p>
      </section>

      <section className='flex items-center gap-4 my-8'>
        {data.contacts.map((contact) => (
          <ButtonContact key={contact.url} {...contact} />
        ))}
      </section>

      <h2 className='font-semibold my-4 text-xl dark:text-white text-black text-center'>
        Personal Network
      </h2>
      {data.socials.map((social) => (
        <SocialCard key={social.url} {...social} />
      ))}

      <h2 className='font-semibold mt-8 mb-4 text-xl dark:text-white text-black text-center'>
        Community Network
      </h2>
      {data.communities.map((community) => (
        <SocialCard key={community.url} {...community} />
      ))}
    </main>
  )
}
