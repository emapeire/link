import { DevtoIcon } from '@/components/icons/devto'
import { DiscordIcon } from '@/components/icons/discord'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { MailIcon } from '@/components/icons/mail'
import { NextJSArgIcon } from '@/components/icons/nextjsargentina'
import { ResumeIcon } from '@/components/icons/resume'
import { TelegramIcon } from '@/components/icons/telegram'
import { WebIcon } from '@/components/icons/web'
import { WhatsappIcon } from '@/components/icons/whatsapp'
import { XIcon } from '@/components/icons/x'

export const SOCIAL_DATA = {
  name: 'Emanuel Peire',
  initials: 'EP',
  avatar: '/assets/avatar.webp',
  about: `Frontend Engineer, Developer Relations and AI research enthusiast. Always influenced by design.
  Based in Rosario, Argentina 🇦🇷`,
  contacts: [
    {
      title: 'Portfolio',
      url: 'https://emapeire.xyz',
      icon: WebIcon
    },
    {
      title: 'Resume',
      url: 'https://cv.emapeire.xyz',
      icon: ResumeIcon
    },
    {
      title: 'Email',
      url: 'mailto:hi@emapeire.xyz',
      icon: MailIcon
    },
    {
      title: 'Phone',
      url: 'tel:+5493417190449',
      icon: WhatsappIcon
    }
  ],
  socials: [
    {
      title: 'GitHub',
      url: 'https://github.com/emapeire',
      icon: GithubIcon
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/emanuelpeire',
      icon: LinkedinIcon
    },
    {
      title: 'The everything app',
      url: 'https://x.com/emapeire',
      icon: XIcon
    },
    {
      title: 'Dev Community',
      url: 'https://dev.to/emapeire',
      icon: DevtoIcon
    },
    {
      title: 'Telegram',
      url: 'https://t.me/emapeire',
      icon: TelegramIcon
    }
  ],
  communities: [
    {
      title: 'Next.js Argentina',
      url: 'https://dub.sh/nextjsargentina',
      icon: NextJSArgIcon
    },
    {
      title: 'Discord Community',
      url: 'https://dub.sh/dsnextjsarg',
      icon: DiscordIcon
    }
  ]
}
