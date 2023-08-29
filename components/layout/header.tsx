import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderLink, headerLinks } from '@/data'
import Hamburger from './hamburger'
import Logo from '@/app/logo.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="fixed top-0 flex flex-col items-center w-full bg-white z-50">
            <div className="flex items-center justify-between max-w-[1300px] w-full px-[40px] py-[36px] md:py-[64px] ">
                <Link href="/">
                    <Image src={Logo} alt="Designo" width={196} height={24} />
                </Link>
                <div className="hidden md:flex gap-[42px] items-center">
                    {headerLinks.map((link: HeaderLink) => {
                        return (
                            <Link
                                href={link?.value ?? '#'}
                                className="text-[14px] text-dark-grey uppercase"
                            >
                                {link?.title}
                            </Link>
                        )
                    })}
                </div>

                <div className="flex md:hidden">
                    <Hamburger />
                </div>
            </div>
        </header>
    )
}

export default Header
