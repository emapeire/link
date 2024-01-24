export interface Data {
  name: string
  avatar: string
  about: string
  contacts: Links[]
  socials: Links[]
}

export interface Links {
  title: string
  url: string
  icon: string
}
