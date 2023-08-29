import React from 'react'
import Logo from '@/public/footer_logo.svg'
import Image from 'next/image'
import { HeaderLink, footerData, headerLinks } from '@/data'
import Link from 'next/link'
import FB from '@/public/fb.svg'
type Props = {
    className?: string
}

const Footer = ({ className }: Props) => {
    return (
        <footer
            className={`bg-black w-full flex flex-col items-center px-[40px] pt-[64px] md:pt-[80px] lg:pt-[72px] pb-[64px] ${className}`}
        >
            <div className="max-w-[1200px] w-full flex flex-col">
                <div className="w-full flex flex-col md:flex-row justify-between items-center pb-[40px] border-b-[1px] border-[#ffffff1a] border-none md:border-solid ">
                    <div className="border-b-[1px] border-[#ffffff1a] w-full items-center flex flex-col md:w-auto md:border-none py-[32px] md:py-0">
                        <Image src={Logo} alt="Logo" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-[42px] items-center py-[32px] md:py-0">
                        {headerLinks.map((link: HeaderLink) => {
                            return (
                                <Link
                                    key={link.value}
                                    href={link?.value ?? '#'}
                                    className="text-[14px] text-white uppercase"
                                >
                                    {link?.title}
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-[#8E8D8E] md:pt-[30px] gap-[40px]">
                    <div className="flex flex-col items-center md:items-start">
                        {footerData?.address?.map(
                            (Elem: React.ReactNode, index: number) => {
                                return <div key={index}>{Elem}</div>
                            }
                        )}
                    </div>
                    <div className="flex flex-col items-center md:items-start ">
                        {footerData?.contact?.map(
                            (Elem: React.ReactNode, index: number) => {
                                return <div key={index}>{Elem}</div>
                            }
                        )}
                    </div>
                    <div className="flex items-center gap-[16px] md:items-start">
                        {Array.from({ length: 5 }).map((_, index: number) => {
                            return <Image src={FB} alt="" key={index} />
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
