interface SocialLink {
  url: string
  img: string
  label: string
}

import twitterImg from '@/assets/img/twitter.png'
import facebookImg from '@/assets/img/facebook.png'
import instagramImg from '@/assets/img/instagram.png'

export const socialLinks: SocialLink[] = [
  {
    url: '#',
    img: twitterImg,
    label: 'Link to our Twitter'
  },
  {
    url: '#',
    img: facebookImg,
    label: 'Link to our Facebook'
  },
  {
    url: '#',
    img: instagramImg,
    label: 'Link to our Instagram'
  }
]
