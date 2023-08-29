'use client'
import { HeaderLink, headerLinks } from '@/data'
import ReactHamburger from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'
type Props = {}

const Hamburger = ({}: Props) => {
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
                    {headerLinks.map((link: HeaderLink) => {
                        return (
                            <Link
                                href={link?.value ?? '#'}
                                className="text-[14px] text-white uppercase"
                            >
                                {link?.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hamburger
