import * as React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import UnstyledLink from '@/components/links/UnstyledLink';
import Logo from '@/components/Logo';
import Typography from '@/components/typography/Typography';

const footerNavigations = {
  links: [
    {
      name: 'Tentang Fil In',
      href: 'about-us',
    },
    {
      name: 'Syarat Penggunaan',
      href: 'user-terms',
    },
    {
      name: 'Kebijakan Privasi',
      href: '#',
    },
    {
      name: 'Tanya Jawab',
      href: '#',
    },
    {
      name: 'Saran',
      href: '#',
    },
    {
      name: 'Bantuan',
      href: 'mailto:halo@filinmovie.com',
    },
  ],
  social: [
    {
      icon: FaFacebook,
      href: '#',
    },
    {
      icon: FaGithub,
      href: '#',
    },
    {
      icon: RiInstagramFill,
      href: 'https://instagram.com/filinmovie',
    },
    {
      icon: FaTwitter,
      href: 'https://www.twitter.com/filinmovie',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.twitter.com/filinmovie',
    },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby='footer-heading'>
      <Typography id='footer-heading' variant='h2' className='sr-only'>
        Footer
      </Typography>
      <div className='layout space-y-6 py-12'>
        <div className='items-center space-y-8 md:flex md:flex-grow md:gap-x-8 md:gap-y-12 md:space-y-0'>
          <Logo className='w-32' />
          <div className='grid grid-flow-row grid-cols-2 items-start gap-x-8 gap-y-3 sm:grid-flow-col sm:grid-rows-2 sm:items-center sm:gap-y-5'>
            {footerNavigations.links.map((link) => (
              <UnstyledLink key={link.name} href={link.href} className='s2'>
                {link.name}
              </UnstyledLink>
            ))}
          </div>
          <div className='ml-auto'>
            <Typography variant='s2'>Temukan Kami</Typography>
            <div className='mt-3 flex gap-3 sm:mt-5'>
              {footerNavigations.social.map((social, i) => (
                <UnstyledLink key={i} href={social.href}>
                  <social.icon size={36} />
                </UnstyledLink>
              ))}
            </div>
          </div>
        </div>
        <Typography variant='b2' color='tertiary'>
          ©2022 FilIn dan entitas terkaitnya. <br /> Hak cipta dilindungi
          undang-undang.
        </Typography>
      </div>
    </footer>
  );
}
