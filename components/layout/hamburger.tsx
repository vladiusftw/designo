'use client'
import { NavigationDocumentDataNavlinksItem, Simplify } from '@/prismicio-types'
import { GroupField } from '@prismicio/client'
// import { HeaderLink, headerLinks } from '@/data'
import ReactHamburger from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'
type Props = {
    links: GroupField<Simplify<NavigationDocumentDataNavlinksItem>>
}

const Hamburger = ({ links }: Props) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <ReactHamburger toggled={isOpen} toggle={setOpen} />
            <div className={`relative`}>
                <div
                    className={`absolute bg-dark-grey flex flex-col gap-[20px] p-[24px] rounded-[6px] right-0 whitespace-nowrap transition-all duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {links.map((link: NavigationDocumentDataNavlinksItem) => {
                        return (
                            <Link
                                key={link?.value}
                                href={link?.value ?? '#'}
                                className="text-[14px] text-white uppercase"
                            >
                                {link?.text}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hamburger
