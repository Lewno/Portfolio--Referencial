import Link from 'next/link'
import React from 'react'
import Logo from "./Logo"
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import {motion} from "framer-motion"

const CustomLink = ({href,title, className=""})=>{
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-1 inline-block bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${(router.asPath === href) ? 'w-full' : 'w-0'} `} >&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Projects" className='ml-4'/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap'> 
            <motion.a href="https://twitter.com" target={"_blank"} className='w-6 mr-3' whileHover={{y:-2}} whileTap={{scale:1.3}}>
              <TwitterIcon/>
            </motion.a>
            <motion.a href="https://twitter.com" target={"_blank"} className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:1.3}}>
              <GithubIcon/>
            </motion.a>
            <motion.a href="https://twitter.com" target={"_blank"} className='w-6 ml-3' whileHover={{y:-2}} whileTap={{scale:1.3}}>
              <LinkedInIcon/>
            </motion.a>

        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo/>
        </div>
    </header>
  )
}

export default NavBar