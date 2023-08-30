import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { HeaderLink, headerLinks } from '@/data'
import Hamburger from './hamburger'
import {
    NavigationDocumentData,
    NavigationDocumentDataNavlinksItem,
    Simplify,
} from '@/prismicio-types'
import { GroupField, ImageField } from '@prismicio/client'
// import Logo from '@/app/logo.png'

type Props = {
    headerLogo: ImageField
    links: GroupField<Simplify<NavigationDocumentDataNavlinksItem>>
}

const Header = ({ headerLogo, links }: Props) => {
    return (
        <header className="fixed top-0 flex flex-col items-center w-full bg-white z-50">
            <div className="flex items-center justify-between max-w-[1300px] w-full px-[40px] py-[36px] md:py-[64px] ">
                <Link href="/">
                    <Image
                        src={headerLogo?.url ?? ''}
                        alt={headerLogo?.alt ?? ''}
                        width={headerLogo?.dimensions?.width}
                        height={headerLogo?.dimensions?.height}
                    />
                </Link>
                <div className="hidden md:flex gap-[42px] items-center">
                    {links.map((link: NavigationDocumentDataNavlinksItem) => {
                        return (
                            <Link
                                href={link?.value ?? '#'}
                                className="text-[14px] text-dark-grey uppercase"
                            >
                                {link?.text}
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
