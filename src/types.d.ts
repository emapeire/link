export interface Data {
  name: string
  initials: string
  avatar: string
  about: string
  contacts: Links[]
  socials: Links[]
  community: Links[]
}

export interface Links {
  title: string
  url: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}
