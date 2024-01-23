export interface Data {
  name: string
  userName: string
  avatar: string
  about: string
  contact: Contact[]
  socials: Social[]
}

export interface Contact {
  title: string
  url: string
  icon: JSX.Element | string
}

export interface Social {
  title: string
  url: string
  icon: JSX.Element | string
}
