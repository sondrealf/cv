import { IconType } from "react-icons/lib"

export type position = {
  timerange: string
  description: string
  text?: string
}

export type location = {
  title: string
  location: string
  positions: position[]
}
export type expirience = {
  title: string
  Icon: IconType
  locations: location[]
}

export type education = location

export type imageprops = {
  src: string
  alt: string
}
export type project = {
  image: imageprops
  title: string
  githubLink: string
  website?: { link: string; text: string }
  text: string
}

export type content = {
  education: education[]
  experience: expirience[]
  projects: project[]
}

export type about = {
  title: string
  text: string
}
export type link = {
  Icon: IconType
  link: string
  text: string
}

export type contact = {
  title: string
  adress: string[]
  phone: string
  links: link[]
}

export type techSection = {
  title: string
  techs: IconType[]
}

export type info = {
  about: about
  contact: contact
  skills: techSection[]
}

export type profile = {
  name: string
  role: string
}

export type langInfo = {
  lang: string
  profile: profile
  info: info
  content: content
}
