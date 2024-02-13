import { DevtoIcon } from '@/icons/devto'
import { GithubIcon } from '@/icons/github'
import { LinkedinIcon } from '@/icons/linkedin'
import { MailIcon } from '@/icons/mail'
import { TelegramIcon } from '@/icons/telegram'
import { WebIcon } from '@/icons/web'
import { WhatsappIcon } from '@/icons/whatsapp'
import { XIcon } from '@/icons/x'

export const SOCIAL_DATA = {
  name: 'Emanuel Peire',
  initials: 'EP',
  avatar: '/images/avatar.png',
  about:
    'Frontend Engineer, OSS Developer, LLMs technical researcher and DX Architect. Always influenced by design.',
  contacts: [
    {
      title: 'Website',
      url: 'https://emapeire.xyz',
      icon: WebIcon
    },
    {
      title: 'Email',
      url: 'mailto:me@emapeire.xyz',
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
      title: 'X',
      url: 'https://x.com/emapeire',
      icon: XIcon
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/emanuelpeire',
      icon: LinkedinIcon
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
  ]
}
