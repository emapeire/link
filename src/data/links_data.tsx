import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  EmailIcon,
  WebSiteIcon,
  PhoneIcon,
  TelegramIcon,
  DevToIcon
} from '@/components/icons'

export const LINKS_DATA = {
  name: 'Emanuel Peire',
  userName: 'emapeire',
  avatar: '/images/avatar.png',
  about:
    'Frontend Engineer, OSS Developer, LLMs technical researcher and DX Architect. Always influenced by design.',
  contact: [
    {
      title: 'Website',
      url: 'https://emapeire.xyz',
      icon: WebSiteIcon
    },
    {
      title: 'Email',
      url: 'mailto:me@emapeire.xyz',
      icon: EmailIcon
    },
    {
      title: 'Phone',
      url: 'tel:+5493417190449',
      icon: PhoneIcon
    }
  ],
  socials: [
    {
      title: 'GitHub',
      url: 'https://github.com/emapeire',
      icon: GitHubIcon
    },
    {
      title: 'X',
      url: 'https://x.com/emapeire',
      icon: XIcon
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/emanuelpeire',
      icon: LinkedInIcon
    },
    {
      title: 'Telegram',
      url: 'https://t.me/emapeire',
      icon: TelegramIcon
    },
    {
      title: 'Dev Community',
      url: 'https://dev.to/emapeire',
      icon: DevToIcon
    }
  ]
}
