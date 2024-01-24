export interface Data {
  name: string
  userName: string
  avatar: string
  about: string
  contacts: Links[]
  socials: Links[]
}

export interface Links {
  title: string
  url: string
  icon: JSX.Element
}
